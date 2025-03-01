import { createSSRApp } from 'vue'
// 导入 pinia 实例
import pinia from './stores'

import App from './App.vue'
export function createApp() {
  // 创建 vue 实例
  const app = createSSRApp(App)

  // 使用 pinia
  app.use(pinia)
  return {
    app,
  }
}
