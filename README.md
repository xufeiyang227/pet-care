# 🐾 绒绒岛宠物洗护店

> 把毛孩子洗成会发光的小云朵 ☁️

绒绒岛宠物洗护店的官方网站，基于 Next.js 构建的单页面应用，提供猫狗洗护服务展示、在线预约、价目查询和门店导航功能。

## ✨ 功能特色

- **在线预约** — 宠物名、类型、服务项目、到店日期一键提交
- **服务展示** — 四大服务项目（基础香波浴、精修美容、猫咪低压洗护、皮毛 SPA）
- **护理流程** — 四步透明流程（到店评估 → 分区洗护 → 低噪吹整 → 护理反馈）
- **价目公示** — 清晰标价，分犬种和体型定价，含接送服务
- **环境轮播** — 门店接待区、洗护区、烘干区三张实景展示
- **客户评价** — 真实用户反馈展示
- **门店导航** — 手绘风格地图 + 地址、营业时间、联系电话
- **响应式设计** — 适配桌面、平板、手机三种屏幕尺寸
- **滚动动画** — 页面元素入场渐现效果

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | [Next.js 16](https://nextjs.org/) |
| UI 库 | [React 19](https://react.dev/) |
| 图标 | [Lucide](https://lucide.dev/) |
| 字体 | Fraunces + Nunito Sans（Google Fonts） |
| 样式 | 纯 CSS（CSS 变量 + Grid + Flexbox） |
| 图片 | Unsplash + AI 生成门店环境图 |

## 📁 项目结构

```
pet-cat/
├── app/
│   ├── layout.jsx              # 根布局（Metadata + 字体加载）
│   ├── page.jsx                # 首页（服务端组件渲染 HTML）
│   ├── globals.css             # 全局样式（所有 CSS 定义）
│   └── client-enhancements.jsx # 客户端交互逻辑（"use client"）
├── assets/
│   ├── store-reception.png     # 门店接待区
│   ├── store-washroom.png      # 透明洗护区
│   └── store-grooming.png      # 烘干修毛区
├── index.html                  # 独立 HTML 版本（可直接打开）
├── next.config.mjs             # Next.js 配置
├── package.json                # 项目依赖与脚本
└── .gitignore
```

## 🚀 本地开发

### 环境要求

- Node.js 18+
- npm / yarn / pnpm

### 安装与启动

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建生产版本

```bash
npm run build
npm start
```

## 📄 页面说明

| 区块 | 锚点 | 说明 |
|------|------|------|
| 首页 Hero | `#top` | 品牌标语 + 快速预约表单 + 门店亮点 |
| 服务项目 | `#services` | 四大服务卡片，含描述和起步价格 |
| 护理流程 | `#process` | 深色背景区，四步流程带编号步骤 |
| 价目查询 | `#pricing` | 左侧价格明细表 + 右侧店内图片 |
| 门店环境 | `#environment` | 三张环境图轮播，含文字说明 |
| 客户评价 | — | 三条带头像的用户好评 |
| 到店指引 | `#visit` | 地址、营业时间、电话 + 手绘地图 |

## 🏪 门店信息

- **地址**：广州市天河区前进街道兰亭盛荟商业街（兰亭盛荟二期肯德基附近）
- **营业**：周一至周日 10:00-21:00（20:30 后不接新单）
- **电话**：18148935468

## 📝 License

Private — 绒绒岛宠物洗护店 版权所有
