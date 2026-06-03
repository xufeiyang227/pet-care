import "./globals.css";

export const metadata = {
  title: "绒绒岛宠物洗护店",
  description: "绒绒岛宠物洗护店提供猫狗洗护、美容修毛、皮毛护理、除味养护和上门接送服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,650;9..144,800&family=Nunito+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/lucide@latest" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
