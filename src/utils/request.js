import axios from 'axios'
// import qs from 'qs'
// import { MessageBox, Message } from 'element-ui'



const baseUrl = 'https://e83228320.at.baijiayun.com'
// create an axios instance
const service = axios.create({  
  baseURL: baseUrl, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 160000 // 请求超时时间
})

// request(请求)拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做的事情
    // config.method === 'post' ? (config.data = qs.stringify({ ...config.data })) : (config.params = { ...config.params })
    return config
  },
  error => {
    // 处理请求错误
    console.log('errorerrorerror', error);
    return Promise.reject(error)
  }
)

// respone（响应）拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
      return res
  },
  error => {
    return Promise.reject(error);
  }
)

export default service
