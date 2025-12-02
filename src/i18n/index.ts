import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'
import jaJP from './locales/ja-JP'

export type Locale = 'zh-CN' | 'en-US' | 'ja-JP'

const LOCALE_KEY = 'nexus-locale'

// 获取浏览器语言
const getBrowserLocale = (): Locale => {
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language
    if (lang.startsWith('zh')) return 'zh-CN'
    if (lang.startsWith('ja')) return 'ja-JP'
  }
  return 'en-US'
}

// 从 localStorage 获取保存的语言
const getSavedLocale = (): Locale | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LOCALE_KEY) as Locale | null
  }
  return null
}

// 初始语言
const initialLocale = getSavedLocale() || getBrowserLocale()

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
    'ja-JP': jaJP
  }
})

// 切换语言并保存
export const setLocale = (locale: Locale) => {
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCALE_KEY, locale)
    document.documentElement.setAttribute('lang', locale)
  }
}

// 获取当前语言
export const getLocale = (): Locale => {
  return i18n.global.locale.value as Locale
}

export default i18n

