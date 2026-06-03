import ClientEnhancements from "./client-enhancements";

const pageMarkup = `<header class="topbar">
    <nav class="shell nav" aria-label="主导航">
      <a href="#top" class="brand" aria-label="绒绒岛宠物洗护店首页">
        <span class="brand-mark"><i data-lucide="paw-print" aria-hidden="true"></i></span>
        <span>绒绒岛宠物洗护店</span>
      </a>
      <div class="nav-links" id="navLinks">
        <a href="#services">服务</a>
        <a href="#process">流程</a>
        <a href="#pricing">价目</a>
        <a href="#environment">环境</a>
        <a href="#visit">到店</a>
      </div>
      <div class="nav-actions">
        <button class="icon-btn" type="button" id="menuBtn" aria-label="打开菜单" aria-controls="navLinks" aria-expanded="false">
          <i data-lucide="menu" aria-hidden="true"></i>
        </button>
        <a class="btn primary" href="#booking"><i data-lucide="calendar-check" aria-hidden="true"></i>预约洗护</a>
      </div>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="shell hero-grid">
        <div data-reveal>
          <span class="eyebrow"><i data-lucide="sparkles" aria-hidden="true"></i> 猫狗分区洗护 · 透明护理间</span>
          <h1>把毛孩子洗成会发光的小云朵</h1>
          <p class="hero-copy">从基础沐浴、开结梳毛到造型修剪，绒绒岛用预约制控制节奏，让每只宠物都在更安静、更干净、更被照顾的空间里完成护理。</p>
          <div class="hero-actions">
            <a class="btn primary" href="#booking"><i data-lucide="scissors" aria-hidden="true"></i>选服务</a>
            <a class="btn mint" href="#pricing"><i data-lucide="receipt" aria-hidden="true"></i>看价目</a>
          </div>
          <div class="quick-facts" aria-label="门店亮点">
            <div class="fact">
              <strong>12+</strong>
              <span>项洗护检查</span>
            </div>
            <div class="fact">
              <strong>1:1</strong>
              <span>护理师陪护</span>
            </div>
            <div class="fact">
              <strong>20:30</strong>
              <span>最晚可约</span>
            </div>
          </div>
        </div>

        <div class="hero-visual" aria-label="宠物洗护展示" data-reveal>
          <div class="photo-stack">
            <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1100&q=82" alt="洗护后坐在护理台上的狗狗">
          </div>
          <div class="hero-badge">
            <strong>洗澡、吹干、修型一次完成</strong>
            <span>新客基础洗护减 30 元</span>
          </div>
          <aside class="booking" id="booking" aria-label="预约表单">
            <h2>今日预约</h2>
            <form id="bookingForm">
              <div class="form-row">
                <div class="field">
                  <label for="petName">宠物名</label>
                  <input id="petName" name="petName" placeholder="例如：奶盖" required>
                </div>
                <div class="field">
                  <label for="petType">宠物类型</label>
                  <select id="petType" name="petType" required>
                    <option value="">请选择</option>
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>猫咪</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label for="service">服务项目</label>
                <select id="service" name="service" required>
                  <option value="">请选择</option>
                  <option>基础香波浴</option>
                  <option>精修美容</option>
                  <option>皮毛 SPA</option>
                  <option>除味护理</option>
                </select>
              </div>
              <div class="form-row">
                <div class="field">
                  <label for="date">到店日期</label>
                  <input id="date" name="date" type="date" required>
                </div>
                <div class="field">
                  <label for="phone">手机号</label>
                  <input id="phone" name="phone" inputmode="tel" placeholder="用于确认时段" required>
                </div>
              </div>
              <div class="field">
                <label for="note">备注</label>
                <textarea id="note" name="note" placeholder="怕吹风、皮肤敏感、接送需求等"></textarea>
              </div>
              <button class="btn primary" type="submit"><i data-lucide="send" aria-hidden="true"></i>提交预约</button>
              <div class="form-note" id="formNote" role="status" aria-live="polite"></div>
            </form>
          </aside>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="shell">
        <div class="section-head" data-reveal>
          <h2>从洗干净到洗舒服，都有对应方案</h2>
          <p>每项服务都会记录毛发、耳道、指甲和皮肤状态，护理结束后同步给主人。</p>
        </div>
        <div class="service-grid">
          <article class="service" data-reveal>
            <div class="service-media">
              <img src="https://images.unsplash.com/photo-1589995031786-5f1489a339ac?auto=format&fit=crop&w=720&q=80" alt="洗护台上的小狗">
            </div>
            <div class="service-body">
              <h3>基础香波浴</h3>
              <p>温和清洁、耳眼护理、修甲磨甲、吹干梳顺，适合日常维护。</p>
              <span class="price">¥98 起</span>
            </div>
          </article>
          <article class="service" data-reveal>
            <div class="service-media">
              <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=720&q=80" alt="蓬松的狗狗肖像">
            </div>
            <div class="service-body">
              <h3>精修美容</h3>
              <p>脸型、脚型、腹底和尾部精修，按品种与生活习惯调整造型。</p>
              <span class="price">¥168 起</span>
            </div>
          </article>
          <article class="service" data-reveal>
            <div class="service-media">
              <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=720&q=80" alt="安静坐着的猫咪">
            </div>
            <div class="service-body">
              <h3>猫咪低压洗护</h3>
              <p>猫狗错峰、低噪吹干、快速流程，减少猫咪等待与应激。</p>
              <span class="price">¥138 起</span>
            </div>
          </article>
          <article class="service" data-reveal>
            <div class="service-media">
              <img src="https://images.unsplash.com/photo-1558236825-4a5267a676a6?auto=format&fit=crop&w=720&q=80" alt="护理后的宠物狗">
            </div>
            <div class="service-body">
              <h3>皮毛 SPA</h3>
              <p>深层梳理、去浮毛、护毛素封层，适合换毛期和干枯毛质。</p>
              <span class="price">¥128 起</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="process-band" id="process">
      <div class="shell">
        <div class="section-head" data-reveal>
          <h2>每一步都看得见，也更放心</h2>
          <p>预约制不是为了显得高级，而是为了让宠物少等、少吵、少被催。</p>
        </div>
        <div class="timeline">
          <article class="step" data-reveal>
            <h3>到店评估</h3>
            <p>先看毛结、皮肤、耳道和情绪状态，确认适合的水温、香波与护理节奏。</p>
          </article>
          <article class="step" data-reveal>
            <h3>分区洗护</h3>
            <p>猫狗分时段使用护理间，工具消毒后独立摆放，一宠一巾一围布。</p>
          </article>
          <article class="step" data-reveal>
            <h3>低噪吹整</h3>
            <p>按毛量分层吹干，配合安抚休息，不把宠物困在高噪环境里硬扛。</p>
          </article>
          <article class="step" data-reveal>
            <h3>护理反馈</h3>
            <p>交接时说明护理发现和下次建议，照片、注意事项与消费明细同步发送。</p>
          </article>
        </div>
      </div>
    </section>

    <section id="pricing">
      <div class="shell pricing-wrap">
        <div data-reveal>
          <div class="section-head">
            <h2>清楚标价，不临场加戏</h2>
          </div>
          <div class="price-board" aria-label="服务价目表">
            <div class="price-row">
              <div>
                <strong>小型犬基础洗护</strong>
                <span>10kg 以下，含基础清洁、吹干、耳眼和指甲护理。</span>
              </div>
              <b>¥98-138</b>
            </div>
            <div class="price-row">
              <div>
                <strong>中大型犬基础洗护</strong>
                <span>按体重与毛量计价，到店评估后确认。</span>
              </div>
              <b>¥168-298</b>
            </div>
            <div class="price-row">
              <div>
                <strong>猫咪低压洗护</strong>
                <span>需提前预约，建议避开饭后与刚接种疫苗时段。</span>
              </div>
              <b>¥138-238</b>
            </div>
            <div class="price-row">
              <div>
                <strong>造型精修</strong>
                <span>泰迪、比熊、雪纳瑞等常见造型，可带参考图。</span>
              </div>
              <b>¥168 起</b>
            </div>
            <div class="price-row">
              <div>
                <strong>接送服务</strong>
                <span>门店 3 公里内可约，按路程和时段确认。</span>
              </div>
              <b>20 元起</b>
            </div>
          </div>
        </div>
        <div class="studio-shot" data-reveal>
          <img src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1000&q=82" alt="宠物洗护店内的狗狗">
        </div>
      </div>
    </section>

    <section class="environment-band" id="environment">
      <div class="shell">
        <div class="section-head" data-reveal>
          <h2>门店环境配置，不只好看也好清洁</h2>
          <p>三张店内环境图由 AI 绘制，参考中国高端宠物洗护店的真实功能分区：接待、洗护、烘干修毛。</p>
        </div>
        <div class="environment-carousel" data-reveal aria-label="门店环境轮播图">
          <div class="environment-stage">
            <article class="environment-slide is-active" data-slide>
              <img src="/assets/store-reception.png" alt="中国高端宠物洗护店接待与等候区">
              <div class="environment-caption">
                <span>接待等候区</span>
                <h3>明亮临街接待</h3>
                <p>大面积玻璃、产品展示墙、等候长凳和牵引绳挂架，给主人一个干净、安静、可停留的第一印象。</p>
              </div>
            </article>
            <article class="environment-slide" data-slide>
              <img src="/assets/store-washroom.png" alt="中国高端宠物洗护店透明洗护操作区">
              <div class="environment-caption">
                <span>透明洗护区</span>
                <h3>可视玻璃操作间</h3>
                <p>不锈钢浴缸、防滑地面、独立排水和分区耗材收纳，让洗澡、冲洗、消毒都更清楚。</p>
              </div>
            </article>
            <article class="environment-slide" data-slide>
              <img src="/assets/store-grooming.png" alt="中国高端宠物洗护店烘干修毛美容区">
              <div class="environment-caption">
                <span>烘干修毛区</span>
                <h3>低噪烘干与精修台</h3>
                <p>烘干柜、专业美容台、剪刀梳具托盘和毛巾暖柜集中布置，缩短宠物等待时间。</p>
              </div>
            </article>
            <button class="carousel-control prev" type="button" aria-label="上一张门店环境图" data-carousel-prev>
              <i data-lucide="chevron-left" aria-hidden="true"></i>
            </button>
            <button class="carousel-control next" type="button" aria-label="下一张门店环境图" data-carousel-next>
              <i data-lucide="chevron-right" aria-hidden="true"></i>
            </button>
          </div>
          <div class="environment-info">
            <div>
              <strong id="environmentTitle">接待等候区</strong>
              <p id="environmentText">临街接待、产品陈列、等候长凳和牵引绳挂架，适合承接预约咨询与交接。</p>
            </div>
            <div class="carousel-dots" aria-label="选择门店环境图片">
              <button class="carousel-dot is-active" type="button" aria-label="查看接待等候区" data-carousel-dot="0"></button>
              <button class="carousel-dot" type="button" aria-label="查看透明洗护区" data-carousel-dot="1"></button>
              <button class="carousel-dot" type="button" aria-label="查看烘干修毛区" data-carousel-dot="2"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="shell">
        <div class="section-head" data-reveal>
          <h2>主人最常夸的不是香，是细</h2>
          <p>把宠物交给别人，总要多一点踏实感。我们把这种踏实做进流程里。</p>
        </div>
        <div class="reviews">
          <article class="review" data-reveal>
            <p>“我家狗很怕吹风，之前每次洗澡都发抖。这里会分段休息，洗完毛很蓬，回家也不蔫。”</p>
            <footer><span class="avatar">M</span> 毛毛家长</footer>
          </article>
          <article class="review" data-reveal>
            <p>“猫咪第一次外洗，没有强行按着洗。店员会提前沟通性格，结束还发了耳朵和皮肤情况。”</p>
            <footer><span class="avatar">Y</span> 柚子家长</footer>
          </article>
          <article class="review" data-reveal>
            <p>“价目表很清楚，修得也自然。最喜欢交接时说得很具体，不是只说一句洗好了。”</p>
            <footer><span class="avatar">D</span> 豆包家长</footer>
          </article>
        </div>
      </div>
    </section>

    <section class="visit-band" id="visit">
      <div class="shell">
        <div class="visit-panel" data-reveal>
          <div class="visit-copy">
            <h2>来店里，先摸摸水温再开洗</h2>
            <ul class="visit-list">
              <li><i data-lucide="map-pin" aria-hidden="true"></i><span>地址：广州市天河区前进街道兰亭盛荟商业街（兰亭盛荟二期附近）</span></li>
              <li><i data-lucide="clock" aria-hidden="true"></i><span>营业：周一至周日 10:00-21:00，20:30 后不接新单</span></li>
              <li><i data-lucide="phone" aria-hidden="true"></i><span>电话：18148935468，可预约接送和会员卡</span></li>
            </ul>
            <div class="hero-actions">
              <a class="btn primary" href="#booking"><i data-lucide="calendar-plus" aria-hidden="true"></i>约一个时段</a>
              <a class="btn mint" href="tel:18148935468"><i data-lucide="phone-call" aria-hidden="true"></i>拨打电话</a>
            </div>
          </div>
          <div class="map-pane" aria-label="门店位置示意">
            <div class="cute-map" role="img" aria-label="广州市天河区前进街道兰亭盛荟商业街绒绒岛宠物洗护店位置示意图">
              <div class="map-road road-commercial"><span>兰亭盛荟商业街</span></div>
              <div class="map-road road-qianjin"><span>前进街道</span></div>
              <div class="map-road road-neighborhood"><span>宦溪西路</span></div>
              <div class="map-zone park">万富商业<br>大厦</div>
              <div class="map-zone tianhe">兰亭盛荟<br>三期</div>
              <div class="map-zone community">西马社区</div>
              <div class="map-shop yihe"><i data-lucide="shopping-bag" aria-hidden="true"></i>益禾堂</div>
              <div class="map-shop food"><i data-lucide="utensils" aria-hidden="true"></i>兰州牛肉面</div>
              <div class="map-shop office"><i data-lucide="building-2" aria-hidden="true"></i>万富商业大厦-B座</div>
              <div class="map-shop-marker">
                <span class="map-pin"><i data-lucide="paw-print" aria-hidden="true"></i></span>
                <strong>绒绒岛门店</strong>
                <small>广州市天河区前进街道兰亭盛荟商业街，近兰亭盛荟二期</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="shell">
      <strong>绒绒岛宠物洗护店</strong>
      <span>干净、温柔、可追踪的猫狗洗护服务</span>
    </div>
  </footer>`;

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
      <ClientEnhancements />
    </>
  );
}
