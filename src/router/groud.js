import router from './index.js'
import { useUserStore } from '@/stores'
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
router.beforeEach(async (to, from) => {
  // 设置页面标题
  document.title = `${to.meta.title} | vue-admin`
  // 处理登录验证
  const userStore = useUserStore()
  
  if(!userStore.token) {
    if(to.name !== 'login') {
      return {name: 'login'}
    } else {
      return true
    }
  } else {
    // 处理权限验证
    // 
    if(!userStore.user) {
      // 请求用户信息,获取身份
      try {
        const res = await getUserInfo()
        userStore.setUser(res.data)
      } catch (error) {
        console.log(error)
      }
      // 获取身份, 然后通过身份去获取能访问的菜单
      getPermissionRoutes()

    }
    
    if(to.name === 'login'){
      return {name: 'home'}
    }
    return true
  }
  
  
})

export default router