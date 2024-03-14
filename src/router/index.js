import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/LayoutView.vue'


const whiteList = ['/login', '/404']

// 页面
const pages = import.meta.glob('@/views/**/index.js', {
  eager: true,
  import: 'default'
})

// 组件模块
const components = import.meta.glob('@/views/**/index.vue')

const routes = Object.entries(pages).map(([path, page]) => {
  const comPath = path.replace('.js', '.vue')
  path = path.replace('/src/views', '').replace('/index.js', '')
  const name = path.split('/').filter(Boolean).join('-')
  return {
    path:page.path? path+page.path: path,
    name: name,
    component: components[comPath],
    meta:page.meta
  }
}).filter(route => !whiteList.includes(route.path))

const contantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: contantRoutes
})


export default router
