import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/LayoutView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'layout',
      component: Layout,
      children: [
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

router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title} | vue-admin`
  next()
})

export default router
