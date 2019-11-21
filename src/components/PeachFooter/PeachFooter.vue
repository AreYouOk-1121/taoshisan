<template>
  <div id="footerGuideContainer">
    <div class="guideItem" :class="{active:$route.path === '/peachhome'}" @click="goPath('/peachhome')">
      <span style="margin:0;">
        <img :src="$route.path === '/peachhome'? footerImages.home.lightImage:footerImages.home.greyImge" alt="icon"/>
      </span>
      <span>
        首页
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/peachpostage'}" @click="goPath('/peachpostage')">
      <span class="guideIcon" style="margin:0;">
        <img :src="$route.path === '/peachpostage'? footerImages.postage.lightImage:footerImages.postage.greyImge" alt="icon"/>
      </span>
      <span>
        9.9包邮
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/peachclassify'}" @click="goPath('/peachclassify')">
      <span style="margin:0;">
        <img :src="$route.path === '/peachclassify'? footerImages.classify.lightImage:footerImages.classify.greyImge" alt="icon"/>
      </span>
      <span>
        分类
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/peachcollect'}" @click="goPath('/peachcollect')">
      <span style="margin:0;">
        <img :src="$route.path === '/peachcollect'? footerImages.collect.lightImage:footerImages.collect.greyImge" alt="icon"/>
      </span>
      <span>
        收藏
      </span>
    </div>
    <div class="guideItem" :class="{active:$route.path === '/peachpersonal'}" @click="goPath('/peachpersonal')">
      <span style="margin:0;">
        <img :src="$route.path === '/peachpersonal'? footerImages.personal.lightImage:footerImages.personal.greyImge" alt="icon"/>
      </span>
      <span>
        我的
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import footerImage from '../../assets/footerData'
  export default {
    name:"PeachFooter",
    data(){
      return {
        footerImages:{},
        isShow:false
      }
    },
    created() {
      console.log(footerImage)
      this.footerImages && (this.footerImages = footerImage)
    },
    methods: {
      goPath(path){
        this.$route.path !== path && this.$router.replace(path);
        this.isShow = !this.isShow
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footerGuideContainer
    color: rgb(102, 102, 102)
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
      .guideIcon
        margin 0
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      padding: 3px 0 2px;
      box-sizing border-box
      line-height 20px
      &.active
        color rgb(253, 87, 92)
      span
        display black
        height 24px
        img
          width 24px
          height 24px
        &:first-child
          margin 5px 0 4px 0
</style>
