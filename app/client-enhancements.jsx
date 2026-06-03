"use client";

import { useEffect } from "react";

export default function ClientEnhancements() {
  useEffect(() => {
    const menuBtn = document.querySelector("#menuBtn");
    const navLinks = document.querySelector("#navLinks");
    const bookingForm = document.querySelector("#bookingForm");
    const formNote = document.querySelector("#formNote");
    const dateField = document.querySelector("#date");
    const environmentSlides = Array.from(document.querySelectorAll("[data-slide]"));
    const environmentDots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
    const environmentTitle = document.querySelector("#environmentTitle");
    const environmentText = document.querySelector("#environmentText");
    const environmentCopy = [
      {
        title: "接待等候区",
        text: "临街接待、产品陈列、等候长凳和牵引绳挂架，适合承接预约咨询与交接。"
      },
      {
        title: "透明洗护区",
        text: "玻璃隔断、不锈钢浴缸、防滑地面和独立排水，让清洁流程更可视。"
      },
      {
        title: "烘干修毛区",
        text: "低噪烘干柜、美容台、工具托盘和毛巾暖柜集中配置，方便精修造型。"
      }
    ];

    let environmentIndex = 0;
    let carouselTimer;

    const renderIcons = () => {
      window.lucide?.createIcons?.();
    };

    const setToday = () => {
      if (!dateField) {
        return;
      }

      const today = new Date();
      const isoDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);
      dateField.min = isoDate;
      dateField.value = isoDate;
    };

    const toggleMenu = () => {
      const isOpen = navLinks?.classList.toggle("is-open") ?? false;
      menuBtn?.setAttribute("aria-expanded", String(isOpen));
    };

    const closeMenu = (event) => {
      if (event.target.matches("a")) {
        navLinks?.classList.remove("is-open");
        menuBtn?.setAttribute("aria-expanded", "false");
      }
    };

    const submitBooking = (event) => {
      event.preventDefault();
      const data = new FormData(bookingForm);
      const petName = data.get("petName") || "毛孩子";
      const service = data.get("service") || "洗护";
      formNote.textContent = `${petName}的${service}预约已记录，我们会尽快电话确认时段。`;
      bookingForm.reset();
      if (dateField) {
        dateField.value = dateField.min;
      }
    };

    const showEnvironmentSlide = (nextIndex) => {
      if (!environmentSlides.length) {
        return;
      }

      environmentIndex = (nextIndex + environmentSlides.length) % environmentSlides.length;
      environmentSlides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === environmentIndex);
      });
      environmentDots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === environmentIndex);
      });

      const current = environmentCopy[environmentIndex];
      if (current && environmentTitle && environmentText) {
        environmentTitle.textContent = current.title;
        environmentText.textContent = current.text;
      }
    };

    const restartCarousel = () => {
      window.clearInterval(carouselTimer);
      carouselTimer = window.setInterval(() => {
        showEnvironmentSlide(environmentIndex + 1);
      }, 5200);
    };

    const goPrev = () => {
      showEnvironmentSlide(environmentIndex - 1);
      restartCarousel();
    };

    const goNext = () => {
      showEnvironmentSlide(environmentIndex + 1);
      restartCarousel();
    };

    const dotHandlers = environmentDots.map((dot) => {
      const handler = () => {
        showEnvironmentSlide(Number(dot.dataset.carouselDot));
        restartCarousel();
      };
      dot.addEventListener("click", handler);
      return [dot, handler];
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    renderIcons();
    document.querySelector('script[src*="lucide"]')?.addEventListener("load", renderIcons);
    setToday();
    menuBtn?.addEventListener("click", toggleMenu);
    navLinks?.addEventListener("click", closeMenu);
    bookingForm?.addEventListener("submit", submitBooking);
    document.querySelector("[data-carousel-prev]")?.addEventListener("click", goPrev);
    document.querySelector("[data-carousel-next]")?.addEventListener("click", goNext);

    if (environmentSlides.length) {
      restartCarousel();
    }

    document.querySelectorAll("[data-reveal]").forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
      revealObserver.observe(element);
    });

    return () => {
      window.clearInterval(carouselTimer);
      document.querySelector('script[src*="lucide"]')?.removeEventListener("load", renderIcons);
      menuBtn?.removeEventListener("click", toggleMenu);
      navLinks?.removeEventListener("click", closeMenu);
      bookingForm?.removeEventListener("submit", submitBooking);
      document.querySelector("[data-carousel-prev]")?.removeEventListener("click", goPrev);
      document.querySelector("[data-carousel-next]")?.removeEventListener("click", goNext);
      dotHandlers.forEach(([dot, handler]) => dot.removeEventListener("click", handler));
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
