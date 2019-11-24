import ajax from './ajax'

export const getpeachClassify = () => ajax({
  url:'/peachclassify'

})



export const getpeachCollect = () => ajax({
  url:'/peachcollect1'
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
