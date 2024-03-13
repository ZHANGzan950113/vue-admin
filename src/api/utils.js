import axios from '@/http'

/**
 * 
 * @param {Object} config 一个url和方法的对象
 * 
 * 一个用来创建公共api请求的函数
 * @returns promise函数
 */
export function createApi(config, isFetching = false){
  return async function api(body) {
    if(isFetching) {
      return 1
    }
    isFetching = true;
    let data = await axios({
      url:config.url,
      method:config.method,
      [config.method.toLowerCase() === 'get' ? 'params' : 'data']: body
    })
    isFetching = false;
    return data
  }
}