import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

const THEME_KEY = 'nexus-theme'

// 获取系统主题偏好
const getSystemTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'dark'
}

// 从 localStorage 获取保存的主题
const getSavedTheme = (): Theme | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(THEME_KEY) as Theme | null
  }
  return null
}

// 初始主题：优先使用保存的主题，否则使用系统主题
const initialTheme = getSavedTheme() || getSystemTheme()

// 全局响应式主题状态
const theme = ref<Theme>(initialTheme)

// 应用主题到 DOM
const applyTheme = (newTheme: Theme) => {
  if (typeof document !== 'undefined') {
    // 添加过渡类
    document.documentElement.classList.add('theme-transition')
    
    // 设置主题属性
    document.documentElement.setAttribute('data-theme', newTheme)
    
    // 移除过渡类（延迟以确保动画完成）
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 300)
    
    // 保存到 localStorage
    localStorage.setItem(THEME_KEY, newTheme)
  }
}

// 初始化时应用主题
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', theme.value)
}

export function useTheme() {
  // 切换主题
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  // 设置特定主题
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
  }

  // 监听主题变化并应用
  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  }, { immediate: true })

  // 监听系统主题变化
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      // 只有在没有手动设置主题时才跟随系统
      if (!getSavedTheme()) {
        theme.value = e.matches ? 'dark' : 'light'
      }
    })
  }

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: () => theme.value === 'dark',
    isLight: () => theme.value === 'light'
  }
}

