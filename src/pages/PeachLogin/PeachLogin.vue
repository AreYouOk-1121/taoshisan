<template>
<div class="loginContainer">
  <div class="loginInner">
   <div class="login_header">
      <h2 class="login_logo">用户登录</h2>
      <div class="login_header_title">
      <a href="javascript:;"  @click="isPassWordLogin = false">短信登录</a>
      <a href="javascript:;"  @click="isPassWordLogin = true">密码登录</a>
     </div>
</div>
<div class="login_content">
<form>
    <div :class="{on: !isPassWordLogin}">
     
            <section class="login_message">
              
              <input v-model="phone" name="phone" v-validate="'required|phone'" type="tel" maxlength="11" placeholder="手机号">
              
              <span style="color: red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
              <button @click.prevent="sendCode" class="get_verification"> </button>
          </section>

          <section class="login_verification">
              <input v-model="code" v-validate="'required|code'" name="code" type="tel" maxlength="8" placeholder="验证码">
              <span style="color: red;" v-show="errors.has('code')">{{errors.first('code')}}</span>
            </section>

            <section class="login_hint">
              温馨提示：未注册淘十三帐号的，登录时将自动注册，且代表已同意
              <a href="javascript:;">《淘十三用户协议》</a>
            </section>
   </div>
         <div :class="{on: isPassWordLogin}">
            <section>
              <section class="login_message">
                <input v-model="name" name="username" v-validate="'required'" type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                <span style="color: red;" v-show="errors.has('username')">{{errors.first('username')}}</span>
              </section>
              <section class="login_verification">
                <input v-validate="'required'":type="isShowPassword?'tel':'password'"maxlength="8"placeholder="密码"name="pwd"v-model="pwd">
                <span style="color: red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>

                <div @click="isShowPassword=!isShowPassword" class="switch_button " :class="isShowPassword?'on':'off'">
                  <div class="switch_circle" :class="{right: isShowPassword}"></div>
                  <span class="switch_text">{{isShowPassword?'abc':'...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input v-model="captcha" name="captcha" v-validate="'required'" type="text" maxlength="11" placeholder="验证码">
                <span style="color: red;" v-show="errors.has('captcha')">{{errors.first('captcha')}}</span>
                <img ref="captcha" class="get_verification" @click="updata" src="http://localhost:3000/captcha" alt="captcha"/>
            

                
              </section>
            </section>
          </div>
     <button class="login_submit" @click.prevent="login">登录</button>
</form>
</div>



  </div>
</div>
</template>

<script type="text/ecmascript-6">
 //登录
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
       isPassWordLogin: false, // 标识是否是用户名/密码登录
        isShowPassword: false, // 是否显示密码
        name: '',
        pwd: '',
        captcha: '',
        phone: '',
        code: '',
        countDown: 0, // 倒计时
      }
    },


    methods: {
      updata(){

        this.$refs.captcha.src="http://localhost:3000/captcha?time=" + Date.now();
      }

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 20px
          font-weight bold
          color #F15A24
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin 16px 16px 16px 16px
              height 40px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone_number
                  color #333
            .login_verification
              position relative
              margin 16px 16px 16px 16px
              height 40px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform 0.3s
                  &.right
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 60%
            height 40px
            margin 30px 30px 0px 55px
            border-radius 4px
            background #eee
            color #666
            text-align center
            font-size 16px
            line-height 42px
            border 0
            
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999

    .languages
      margin-top 50px
      display flex
      justify-content space-around    
 
</style>
