import axios, { AxiosRequestHeaders } from 'axios'
import { ElMessage } from 'element-plus';
import {store} from '@/store';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})


// 请求拦截器
request.interceptors.request.use(function (config) {
  //统一设置用户身份  token
  const user = store.state.user_info
  if(user&& user.token){
    // config.headers.Authorization =  `Bearer ${user.token}`
  }
  // config.headers['token'] = Action.getStorage('token') // 请求头带上token
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//响应拦截器
request.interceptors.response.use(function (response) {
  //统一处理接口响应错误，token过期等
  if (response.data.status && response.data.status != 200) {
    ElMessage.error(response.data.msg || '请求失败，请稍后重试')
    // 手动返回一个异常
    return Promise.reject(response.data)
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});
// export default request
export default <T =any>(config:AxiosRequestHeaders)=>{
 return request(config).then(res=>{
   res.data as T
 })
}