# Nexus Landing Page

<p align="center">
  <img src="public/favicon.svg" alt="Nexus Logo" width="80" height="80">
</p>

<p align="center">
  一个现代化、响应式的产品落地页，使用 Vue 3 + TypeScript + Vite 构建。
</p>

<p align="center">
  <strong>🇨🇳 简体中文</strong> | <a href="./README-EN.md">🇺🇸 English</a>
</p>

<p align="center">
  <a href="#功能特性">功能特性</a> •
  <a href="#技术栈">技术栈</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#项目结构">项目结构</a> •
  <a href="#国际化">国际化</a> •
  <a href="#主题切换">主题切换</a>
</p>

---

## ✨ 功能特性

- 🎨 **现代设计** - 精心设计的 UI，渐变色彩、玻璃态效果、流畅动画
- 🌓 **深色/浅色主题** - 支持主题切换，自动保存用户偏好
- 🌍 **多语言支持** - 内置中文、英文、日文三种语言
- 📱 **完全响应式** - 适配桌面端、平板、移动设备
- ⚡ **高性能** - 基于 Vite 构建，极速开发体验
- 🎭 **平滑动画** - 滚动触发动画、悬停效果、过渡动画
- 🔧 **SCSS 架构** - 模块化样式，Mixin 复用，CSS 变量主题

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| [Vue 3](https://vuejs.org/) | ^3.4 | 渐进式 JavaScript 框架 |
| [TypeScript](https://www.typescriptlang.org/) | ^5.4 | JavaScript 的超集 |
| [Vite](https://vitejs.dev/) | ^5.2 | 下一代前端构建工具 |
| [Vue I18n](https://vue-i18n.intlify.dev/) | ^9.10 | Vue.js 国际化插件 |
| [Sass](https://sass-lang.com/) | ^1.71 | CSS 预处理器 |

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (推荐) 或 npm >= 9.0.0

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
pnpm dev
# 或
npm run dev
```

访问 http://localhost:3000 查看效果。

### 构建生产版本

```bash
pnpm build
# 或
npm run build
```

### 预览构建结果

```bash
pnpm preview
# 或
npm run preview
```

## 📁 项目结构

```
landing-page/
├── public/                 # 静态资源
│   └── favicon.svg
├── src/
│   ├── components/         # Vue 组件
│   │   ├── NavBar.vue          # 导航栏
│   │   ├── HeroSection.vue     # 首屏区域
│   │   ├── FeaturesSection.vue # 功能特性
│   │   ├── TestimonialsSection.vue # 用户评价
│   │   ├── PricingSection.vue  # 定价方案
│   │   └── FooterSection.vue   # 页脚
│   ├── composables/        # 组合式函数
│   │   └── useTheme.ts         # 主题管理
│   ├── i18n/               # 国际化
│   │   ├── index.ts            # i18n 配置
│   │   └── locales/            # 语言文件
│   │       ├── zh-CN.ts        # 简体中文
│   │       ├── en-US.ts        # 英文
│   │       └── ja-JP.ts        # 日文
│   ├── styles/             # 全局样式
│   │   ├── main.scss           # 主样式文件
│   │   └── _mixins.scss        # SCSS Mixins
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── index.html              # HTML 模板
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖
```

## 🌍 国际化

项目使用 Vue I18n 实现多语言支持，目前支持：

- 🇨🇳 简体中文 (zh-CN)
- 🇺🇸 English (en-US)
- 🇯🇵 日本語 (ja-JP)

### 添加新语言

1. 在 `src/i18n/locales/` 目录下创建新的语言文件，如 `ko-KR.ts`
2. 在 `src/i18n/index.ts` 中导入并注册新语言
3. 在导航栏语言选择器中添加新选项

## 🌓 主题切换

项目支持深色和浅色两种主题模式：

- **自动检测** - 首次访问时根据系统偏好自动设置
- **手动切换** - 点击导航栏的主题切换按钮
- **持久化** - 用户选择保存在 localStorage 中

### 主题实现原理

```scss
// CSS 变量定义在 :root 和 [data-theme="light"] 选择器中
:root {
  --color-bg-primary: #0a0a0f;  // 深色模式默认
}

[data-theme="light"] {
  --color-bg-primary: #fafafa;  // 浅色模式覆盖
}
```

## 🎨 样式架构

项目使用 SCSS 并采用以下架构：

### CSS 变量

所有颜色、间距、圆角等都通过 CSS 变量定义，便于主题切换和统一管理。

### Mixins

常用样式模式封装为 Mixin：

```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin card-base {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}
```

### 响应式断点

```scss
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
```

## 📄 License

MIT License © 2024

---

<p align="center">
  Made with ❤️ using Vue 3
</p>

