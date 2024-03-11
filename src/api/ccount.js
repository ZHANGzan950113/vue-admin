import axios from '@/http'
/**
 * 
 * @param {Object} data 
 * @returns axios
 */


// 登录
export function login(data) {
  return axios({
    url: 'mock/login',
    method: 'post',
    data
  })
}