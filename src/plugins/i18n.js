import { createI18n } from 'vue-i18n'
import en from '../locales/en/index.json'
import zh from '../locales/zh/index.json'

const i18n = createI18n({
  legacy: false, // Composition API 模式
  locale: 'zh', // 默認語言
  fallbackLocale: 'en', // 備用語言
  globalInjection: true, // 全局註冊 $t 函數
  messages: {
    en,
    zh
  }
})

export default i18n