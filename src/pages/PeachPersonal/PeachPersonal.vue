<template>
  <div id="Cliang">
   <div class="info">
     <div class="top">
    <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/user.png?v=201908292038" alt="">
    <span @click="$router.push('/Peachlogin')">登录/注册</span>
    <i class="iconfont iconshezhi"></i>
      </div>
   

   

    <div class="user_main">
      <div class="user_me">
        <a>
     <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/love.png?v=201908292038">
     <span>我的收藏</span>
      </a>
      <a>
     <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/foot.png?v=201908292038">
      <span>我的足迹</span>
      </a>
      
      </div>
     <div class="common_tools">
       <p class="title">我的工具</p>
       <div class="youhui"> 
         <a>   
     <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools1.png?v=201908292038">
     <span>领券优惠</span>
         </a>
        <a>
     <img src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools4.png?v=201908292038">
      <span>意见反馈</span>
      </a>
       </div>

     </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">

// 我的
  export default {
   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#Cliang
  width 375px
  height 100%  
  background #F5F5F5
  position relative
  .info
    width 375px
    height 205px  
    background red
    border-radius 0px 0px 50px 50px;
    .top
      position relative
      img
        width 65px
        height 65px
        margin 20px 0px 0px 10px; 
      span
        font-size 20px
        position absolute
        color #ffffff
        top 40px
        left 80px
      .iconfont
        position absolute
        top 10px
        right 10px
        font-size 20px


    
  .user_main
    width 355px
    height 236px
    position absolute
    
    top 130px
    left 0
    right 0
    bottom 0
    margin  0 auto 
    .user_me
      width 355px
      height 93px
      background #FAFAFA
      display flex
      align-items:center
      justify-content:space-around
      a
        display: flex;
        align-items: center;
        flex-direction: column;
      img 
        width 34px
        height 34px
    .common_tools
      width 355px
      height 128px
      background #FAFAFA
      margin-top 15px
      
      
      .title
        display block
        width 355px
        height 35px
        margin-left 8px
        line-height 35px
        border-bottom  2px solid #F5F5F5
      .youhui
        display: flex;
        align-items: center;
        
        align-items:center

        width 230px
        height 100px
        a
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-left 10px
          img 
            width 30px
            height 30px
</style>
