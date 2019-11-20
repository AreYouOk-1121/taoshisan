<template>
  <div id="footerGuideContainer">
    <div class="guideItem" :class="{active:$route.path === '/msite'}" @click="goPath('/peachhome')">
      <span>
        <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01IDoKYf2JJhy7Pld17_!!2053469401.png" alt="图片">  
      </span>
      <span>
        首页
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/order'}" @click="goPath('/peachpostage')">
      <span>
        <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01IoDVRW2JJhy7uYnhS_!!2053469401.png" alt="图片">
      </span>
      <span>
        9.9包邮
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/profile'}" @click="goPath('/peachclassify')">
      <span>
        <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Ts9O8t2JJhy5zKLZn_!!2053469401.png" alt="图片">
      </span>
      <span>
        分类
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/profile'}" @click="goPath('/peachcollect')">
      <span>
        <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01090Eiz2JJhy5zJoLf_!!2053469401.png" alt="图片">
      </span>
      <span>
        收藏
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/search'}" @click="goPath('/peachpersonal')">
      <span>
        <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN015lCWYO2JJhy8Mlr01_!!2053469401.png" alt="图片">
      </span>
      <span>
        我的
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"PeachFooter",
    methods: {
      goPath(path){
        this.$route.path !== path && this.$router.replace(path);
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footerGuideContainer
    background-color #fff
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    border-top 1px solid #cccccc
    box-sizing border-box
    display flex
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      span
        img
          width 24px
          height 24px
        &:first-child
          margin 5px 0 4px 0
 
</style>
