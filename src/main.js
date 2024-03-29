// 引入全局样式
import './styles/index.scss'
// 引入雪碧图
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/groud.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
