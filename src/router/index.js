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
          component: () => import('@/components/SvgIcon.vue')
        },
        // {
        //   path:'/components/tablecom',
        //   name:'tableCom',
        //   component: () => import('@/views/components/TableView.vue')
        // },
        // {
        //   path:'/auth/user',
        //   name:'user',
        //   component: () => import('@/views/auth/UserView.vue')
        // },
      ]
    },
  ]
})

export default router
