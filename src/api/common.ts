/**
 * 公共基础
 */
import request from '@/utils/request'

//定义返回数据的类型接口
interface ResponseData<T = any>{
 status:number,
 msg:string,
 data:T
}
// get params   post data
export const getLoginInfo =(params:{}) =>{
 return request({
  method:'get',
  url:'/login/info',
  params
 })



 // return request({
 //  method:'GET',
 //  url:'/login/info'
 // })
 // return request.get<
 // {
 //  status:number,
 //  msg:string,
 //  data:{

 //  }
 // }>('/login/info')

 // return request.get<ResponseData>('/login/info')
}