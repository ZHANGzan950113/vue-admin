import { createApi } from '@/api/utils.js'

// 获取权限路由
export const getPermissionRoutes = createApi({
  method: 'get',
  url: '/routes'
})