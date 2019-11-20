<template>
  <div id="footerGuideContainer">
    <div class="guideItem" :class="{active:$route.path === '/msite'}" @click="goPath('/peachhome')">
      <span>
        <i class="iconfont icon-shouye2"></i>
      </span>
      <span>
        首页
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/order'}" @click="goPath('/peachpostage')">
      <span>
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>
        9.9包邮
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/profile'}" @click="goPath('/peachclassify')">
      <span>
        <i class="iconfont icon-nav-order"></i>
      </span>
      <span>
        分类
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/profile'}" @click="goPath('/peachcollect')">
      <span>
        <i class="iconfont icon-nav-order"></i>
      </span>
      <span>
        收藏
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/search'}" @click="goPath('/peachpersonal')">
      <span>
        <i class="iconfont icon-wode"></i>
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

 
</style>
