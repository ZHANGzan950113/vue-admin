import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
  // baseURL 需要进行开发环境判断
  baseURL: import.meta.env.DEV? '': '127.0.0.1:3001', // 设置基础URL
  timeout: 5000 // 设置超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做一些处理，比如添加请求头等
    // config.headers.Authorization = 'Bearer token'; // 示例：添加认证头
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
  request => {
    console.log(request)
    return request
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做一些处理，比如统一处理成功状态等
    console.log()
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

export default instance;