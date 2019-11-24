/* axios进行二次封装 */
import axios from "axios";
import qs from "qs";

//设置基础路径
const instance = axios.create({
  baseURL: '/api'
})
//请求拦截器
instance.interceptors.request.use((config)=>{
  if(config.method.toUpperCase()==="POST" && config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  return config
})
//响应拦截器拦截器
instance.interceptors.response.use(
  /* 成功 */
  response => response.data,
  /* 失败 */
  error=>{
    if(error.response.status===404){
      console.log('请求资源未找到');  
    }else{
      console.log('请求失败');  
    }
    alert('请求失败')
    return new Promise(()=>{})
  })
  
  export default instance
