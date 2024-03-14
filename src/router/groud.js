import router from './index.js'
import { useUserStore, useAppStore } from '@/stores'
import { getUserInfo } from '@/api/account.js'
import { getPermissionRoutes } from '@/api/menu.js'
/**
 * 路由守卫
 * 1. 设置页面标题
 * 2. 处理登录验证
 * 3. 处理权限验证
 * 4. 处理其他逻辑
 * @param {Object} to - 目标路由对象
 * @param {Object} from - 来源路由对象
 * @param {Function} next - 下一个处理函数
 */

const whiteList = ['login', '404']

router.beforeEach(async (to, from) => {
  // 设置页面标题
  document.title = `${to.meta.title} | vue-admin`
  // 处理登录验证
  const userStore = useUserStore()
  const userApp = useAppStore()
  // 无token返回登录页
  if (!userStore.token) {
    if (to.name !== 'login') {
      return { name: 'login' }
    } else {
      return true
    }
  } else {
    // 处理权限验证
    //
    if (!userStore.user) {
      // 请求用户信息,获取身份
      try {
        const InfoRes = await getUserInfo()
        userStore.setUser(InfoRes.data)
        // 请求数据,返回的是一个树形数据菜单
        const menuRes = await getPermissionRoutes()
        userApp.setMenu(menuRes.data)
      } catch (error) {
        console.log(error)
      }
      // 获取身份, 然后通过身份去获取能访问的菜单,动态加入

      // 组件模块
      const components = import.meta.glob('@/views/**/index.vue')
      // 页面
      const pages = import.meta.glob('@/views/**/index.js', {
        eager: true,
        import: 'default'
      })
      const routes = Object.entries(pages)
        .map(([path, page]) => {
          const comPath = path.replace('.js', '.vue')
          path = path.replace('/src/views', '').replace('/index.js', '')
          const name = path.split('/').filter(Boolean).join('-')
          return {
            path: page.path ? path + page.path : path,
            name: name,
            component: components[comPath],
            meta: page.meta
          }
        })
        .filter((route) => !whiteList.includes(route.path))
        routes.forEach((route) => {
          router.addRoute('layout',route)
        })
        console.log('router=>',router.getRoutes())
        return to.fullPath
        // 获取能访问的菜单,动态加入
    }

    if (to.name === 'login') {
      return { name: 'home' }
    }
    return true
  }
})

export default router
