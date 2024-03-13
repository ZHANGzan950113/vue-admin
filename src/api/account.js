import { createApi } from '@/api/utils.js'

// 登录
export const login = createApi({
  url: '/mock/login',
  method: 'post'
})

// 获取用户信息

export const getUserInfo = createApi({
  url: '/mock/userInfo',
  method: 'get'
})