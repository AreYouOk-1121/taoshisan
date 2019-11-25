import ajax from "./ajax";

/* 定义发请求的方法 */
export const getGoods = ()=>ajax({
  url:'/goods'
})

/* 定义发更多品牌的方法 */
export const getbrands = ()=>ajax({
  url:'/brands'
})

/* 定义获取导航信息 */
export const getnavs = ()=>ajax({
  url:'/navs'
})
export const getpeachCollect = () => ajax({
  url:'/Peachcollect'
})
/* 定义包邮的方法返回数据 */
export const baoyou = ()=>ajax({
  url:'/brands'  //地址看接口文档
})


// 详情页请求数据
export const reqShangDian = (shangData)=>ajax({
  url: '/peachdetails',
  params:{
    shangData
  }
})
export const reqTest = ()=>ajax({
  url: '/test'
})


// 定义9.9包邮请求的方法静
export const getby = ()=> ajax({
  url:'/peachpostage'  

})


export const getpeachClassify = () => ajax({
  url:'/peachclassify'

})


//请求手机验证码
export const sendCode = phone => ajax({
  url: '/sendcode',

  params: {
    phone
  }
})


export const getpeachPassword = (name,pwd,captcha) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data :{
    name,
    pwd,
    captcha

  },

})



export const loginWithPhone = (phone, code) => ajax({
  
  url: 'login_sms',
  method: 'POST_sms',
  data() {
    return {
      phone,
      code
    }
  },

}) 


export const autoLogin = () => ajax({

  url: '/auto_login',
  headers: {
    needToken: true
  }
})
