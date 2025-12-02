<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'
import { setLocale, type Locale } from '../i18n'

const { t, locale } = useI18n()
const { theme, toggleTheme } = useTheme()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { key: 'features', href: '#features' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'pricing', href: '#pricing' },
]

// 语言选项
const languages = [
  { value: 'zh-CN', label: '中文' },
  { value: 'en-US', label: 'EN' },
  { value: 'ja-JP', label: '日本語' }
]

// 切换语言
const handleLanguageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  setLocale(target.value as Locale)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-container">
      <!-- Logo -->
      <a href="#" class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="url(#logoGrad)" />
            <path d="M14 28V12h3l8 10.5V12h3v16h-3L17 17.5V28h-3z" fill="white" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
                <stop stop-color="#ff6b35" />
                <stop offset="1" stop-color="#f72585" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span class="logo-text">Nexus</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-links hide-mobile">
        <a 
          v-for="link in navLinks" 
          :key="link.key" 
          :href="link.href"
          class="nav-link"
        >
          {{ t(`nav.${link.key}`) }}
        </a>
      </nav>

      <!-- CTA Buttons & Theme Toggle & Language -->
      <div class="nav-actions hide-mobile">
        <!-- 工具按钮组 -->
        <div class="action-group">
          <!-- 主题切换按钮 -->
          <button 
            class="action-btn" 
            @click="toggleTheme"
            :title="t('theme.toggle')"
            :aria-label="t('theme.toggle')"
          >
            <svg v-if="theme === 'dark'" class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg v-else class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <!-- 语言选择器 -->
          <div class="action-btn lang-btn">
            <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <select :value="locale" @change="handleLanguageChange">
              <option v-for="lang in languages" :key="lang.value" :value="lang.value">
                {{ lang.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- 分隔线 -->
        <div class="nav-divider"></div>

        <!-- 用户操作 -->
        <a href="#" class="nav-link login-link">{{ t('nav.login') }}</a>
        <a href="#pricing" class="btn btn-primary btn-nav">{{ t('nav.getStarted') }}</a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button 
        class="mobile-menu-toggle hide-desktop" 
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="mobile-menu hide-desktop">
        <nav class="mobile-nav">
          <a 
            v-for="link in navLinks" 
            :key="link.key" 
            :href="link.href"
            class="mobile-nav-link"
            @click="isMobileMenuOpen = false"
          >
            {{ t(`nav.${link.key}`) }}
          </a>
          
          <!-- 移动端主题切换 -->
          <div class="mobile-theme-toggle">
            <span>{{ theme === 'dark' ? t('theme.dark') : t('theme.light') }}</span>
            <button 
              class="theme-toggle" 
              @click="toggleTheme"
              :aria-label="t('theme.toggle')"
            >
              <svg v-if="theme === 'dark'" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
          </div>

          <!-- 移动端语言切换 -->
          <div class="mobile-language-toggle">
            <span>{{ t('language.zhCN').includes('中') ? '语言' : 'Language' }}</span>
            <div class="language-selector">
              <select :value="locale" @change="handleLanguageChange">
                <option v-for="lang in languages" :key="lang.value" :value="lang.value">
                  {{ lang.label }}
                </option>
              </select>
            </div>
          </div>

          <div class="mobile-nav-actions">
            <a href="#" class="btn btn-secondary">{{ t('nav.login') }}</a>
            <a href="#pricing" class="btn btn-primary">{{ t('nav.getStarted') }}</a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--spacing-md) 0;
  transition: all var(--transition-normal);

  &.scrolled {
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacing-sm) 0;

    [data-theme="light"] & {
      background: rgba(255, 255, 255, 0.9);
    }
  }

  &-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: var(--spacing-lg);
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);

  &:hover { color: var(--color-text-primary); }

  &-icon {
    width: 40px;
    height: 40px;
    svg { width: 100%; height: 100%; }
  }

  &-text {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }
}

// 统一高度变量
$action-height: 36px;

.nav {
  &-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
  }

  &-link {
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--color-text-secondary);
    transition: color var(--transition-fast);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width var(--transition-normal);
    }

    &:hover {
      color: var(--color-text-primary);
      &::after { width: 100%; }
    }
  }

  &-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--spacing-sm);
  }

  &-divider {
    width: 1px;
    height: 20px;
    background: var(--color-border);
    margin: 0 var(--spacing-xs);
  }
}

// 工具按钮组
.action-group {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 30px;
  padding: 0 8px;
  background: transparent;
  border: none;
  border-radius: calc(var(--radius-md) - 4px);
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--color-text-secondary);

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
  }

  &.lang-btn {
    gap: 4px;
    padding-right: 4px;

    select {
      background: transparent;
      border: none;
      color: inherit;
      font-family: inherit;
      font-size: 0.8125rem;
      cursor: pointer;
      outline: none;

      option {
        background: var(--color-bg-secondary);
        color: var(--color-text-primary);
      }
    }
  }
}

.action-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

// 登录链接
.login-link {
  height: $action-height;
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-sm);
  font-size: 0.875rem;

  &::after { display: none; }

  &:hover {
    color: var(--color-primary);
  }
}

// 导航栏按钮
.btn-nav {
  height: $action-height;
  padding: 0 1.25rem;
  font-size: 0.875rem;
}

// 移动端主题切换按钮保持原样
.theme {
  &-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-normal);
    color: var(--color-text-secondary);

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
      background: rgba(255, 107, 53, 0.1);
    }
  }

  &-icon {
    width: 18px;
    height: 18px;
  }
}

// 移动端语言选择器
.language-selector {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.5rem 0.75rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    border-color: var(--color-border-hover);
    color: var(--color-text-primary);
  }

  select {
    background: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    outline: none;

    option {
      background: var(--color-bg-secondary);
      color: var(--color-text-primary);
    }
  }
}

// Mobile
.mobile {
  &-menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--color-text-primary);
      border-radius: var(--radius-full);
      transition: all var(--transition-normal);
      transform-origin: center;
    }

    &.active span {
      &:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
      &:nth-child(2) { opacity: 0; }
      &:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    }
  }

  &-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacing-lg);

    [data-theme="light"] & {
      background: rgba(255, 255, 255, 0.98);
    }
  }

  &-nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);

    &-link {
      font-size: 1.125rem;
      padding: var(--spacing-sm) 0;
      border-bottom: 1px solid var(--color-border);
      color: var(--color-text-secondary);

      &:hover { color: var(--color-text-primary); }
    }

    &-actions {
      display: flex;
      gap: var(--spacing-sm);
      margin-top: var(--spacing-md);

      .btn { flex: 1; }
    }
  }

  &-theme-toggle,
  &-language-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-secondary);
  }

  &-language-toggle .language-selector {
    padding: 0.5rem 0.75rem;
  }
}

// Transitions
.slide-down {
  &-enter-active,
  &-leave-active {
    transition: all var(--transition-normal);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
