import axios, { AxiosRequestHeaders } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus';
import {store} from '@/store';
import router from '@/router/';

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
// 控制登录过期
let isRefresh = false
//响应拦截器
request.interceptors.response.use(function (response) {
 const status  =response.data.status
// 正确情况
 if(!status || status ==200){
  return response;
 }

// token过期
if(status ==410000){
  if(isRefresh)  return Promise.reject(response)
  isRefresh = true
  ElMessageBox.confirm('您的登录已过期，请重新登录',{
    confirmButtonText:'确认',
    cancelButtonText:'取消'
  }).then(()=>{
    //清除本地过期的登录状态
    store.commit('setUserInfo',null)
    // 返回登录页面
    router.push({
      name:'login',
      query:{
        redirect:router.currentRoute.value.fullPath
      }
    })
    // 抛出异常
  }).finally(()=>{
    isRefresh = false
  })
  return Promise.reject(response)
 }
// 其他错误
ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  //   // 手动返回一个异常
return Promise.reject(response)




  //统一处理接口响应错误，token过期等
  // if (response.data.status && response.data.status != 200) {
  //   ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  //   // 手动返回一个异常
  //   return Promise.reject(response.data)
  // }
  // return response;
}, function (error) {
  return Promise.reject(error);
});
// export default request
export default <T =any>(config:AxiosRequestHeaders)=>{
 return request(config).then(res=>{
   res.data as T
 })
}