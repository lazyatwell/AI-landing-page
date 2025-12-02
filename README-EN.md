# Nexus Landing Page

<p align="center">
  <img src="public/favicon.svg" alt="Nexus Logo" width="80" height="80">
</p>

<p align="center">
  A modern, responsive product landing page built with Vue 3 + TypeScript + Vite.
</p>

<p align="center">
  <a href="./README.md">🇨🇳 简体中文</a> | <strong>🇺🇸 English</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#i18n">I18n</a> •
  <a href="#theming">Theming</a>
</p>

---

## ✨ Features

- 🎨 **Modern Design** - Carefully crafted UI with gradients, glassmorphism, and smooth animations
- 🌓 **Dark/Light Theme** - Theme switching with automatic preference persistence
- 🌍 **Multi-language Support** - Built-in Chinese, English, and Japanese
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **High Performance** - Built with Vite for blazing fast development
- 🎭 **Smooth Animations** - Scroll-triggered animations, hover effects, and transitions
- 🔧 **SCSS Architecture** - Modular styles, reusable mixins, CSS variable theming

## 🛠 Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| [Vue 3](https://vuejs.org/) | ^3.4 | Progressive JavaScript Framework |
| [TypeScript](https://www.typescriptlang.org/) | ^5.4 | Typed JavaScript |
| [Vite](https://vitejs.dev/) | ^5.2 | Next Generation Frontend Tooling |
| [Vue I18n](https://vue-i18n.intlify.dev/) | ^9.10 | Internationalization Plugin for Vue.js |
| [Sass](https://sass-lang.com/) | ^1.71 | CSS Preprocessor |

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (recommended) or npm >= 9.0.0

### Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### Development

```bash
pnpm dev
# or
npm run dev
```

Visit http://localhost:3000 to see the result.

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 📁 Project Structure

```
landing-page/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # Vue components
│   │   ├── NavBar.vue          # Navigation bar
│   │   ├── HeroSection.vue     # Hero section
│   │   ├── FeaturesSection.vue # Features showcase
│   │   ├── TestimonialsSection.vue # Customer testimonials
│   │   ├── PricingSection.vue  # Pricing plans
│   │   └── FooterSection.vue   # Footer
│   ├── composables/        # Composition functions
│   │   └── useTheme.ts         # Theme management
│   ├── i18n/               # Internationalization
│   │   ├── index.ts            # i18n configuration
│   │   └── locales/            # Language files
│   │       ├── zh-CN.ts        # Simplified Chinese
│   │       ├── en-US.ts        # English
│   │       └── ja-JP.ts        # Japanese
│   ├── styles/             # Global styles
│   │   ├── main.scss           # Main stylesheet
│   │   └── _mixins.scss        # SCSS Mixins
│   ├── App.vue             # Root component
│   └── main.ts             # Entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🌍 I18n

The project uses Vue I18n for multi-language support. Currently supported:

- 🇨🇳 Simplified Chinese (zh-CN)
- 🇺🇸 English (en-US)
- 🇯🇵 Japanese (ja-JP)

### Adding a New Language

1. Create a new language file in `src/i18n/locales/`, e.g., `ko-KR.ts`
2. Import and register the new language in `src/i18n/index.ts`
3. Add the new option to the language selector in the navigation bar

## 🌓 Theming

The project supports both dark and light theme modes:

- **Auto Detection** - Automatically sets theme based on system preference on first visit
- **Manual Toggle** - Click the theme toggle button in the navigation bar
- **Persistence** - User preference is saved in localStorage

### Theme Implementation

```scss
// CSS variables defined in :root and [data-theme="light"] selectors
:root {
  --color-bg-primary: #0a0a0f;  // Dark mode default
}

[data-theme="light"] {
  --color-bg-primary: #fafafa;  // Light mode override
}
```

## 🎨 Styling Architecture

The project uses SCSS with the following architecture:

### CSS Variables

All colors, spacing, border-radius, etc. are defined through CSS variables for easy theming and consistency.

### Mixins

Common style patterns are encapsulated as mixins:

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

### Responsive Breakpoints

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

