import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/LayoutView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path:'/',
      name:'layout',
      component: Layout,
      children: [
        {
          path:'/',
          name:'home',
          component: () => import('@/views/HomeView.vue'),
          meta:{
            title: '首页'
          }
        },
        {
          path:'/components/icon',
          name:'icon',
          component: () => import('@/views/components/IconView.vue'),
          meta:{
            title: '图标组件'
          }
        },
        {
          path:'/components/tablecom',
          name:'tableCom',
          component: () => import('@/views/components/TableView.vue'),
          meta:{
            title: '表格组件'
          }
        },
        {
          path:'/auth/user',
          name:'user',
          component: () => import('@/views/auth/UserView.vue'),
          meta:{
            title: '用户管理'
          }
        },
        {
          path:'/auth/role',
          name:'role',
          component: () => import('@/views/auth/RoleView.vue'),
          meta:{
            title: '角色管理'
          }
        },
        {
          path:'/auth/menu',
          name:'menu',
          component: () => import('@/views/auth/MenuView.vue'),
          meta: {
            title: '菜单管理',
          }
        },
      ]
    },
  ]
})



export default router
