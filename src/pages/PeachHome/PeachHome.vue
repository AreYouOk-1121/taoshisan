<template>
  <div id="y_peachHomen">
    <!-- 头部 -->
    <header class="header">
      <div class="header_top">
        <input type="text" placeholder="输入商品名或粘贴宝贝标题搜索">
        <div class="header_right">
          <span class="header_right_icon">
            <i class="el-icon-chat-dot-round icon-tb"></i>
          </span>
          <span class="news">消息</span>
        </div>
      </div>
      <!-- better-scroll滑动 -->
      <div class="wrapper">
        <ul class="content">
          <li v-for="(nav,index) in navs" :key="index"><a href="javascript:;">{{nav}}</a></li>
        </ul>
      </div>
    </header>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN011zFY822JJhzEFMiIE_!!2053469401.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN011zFY822JJhzEFMiIE_!!2053469401.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN011zFY822JJhzEFMiIE_!!2053469401.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN011zFY822JJhzEFMiIE_!!2053469401.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN011zFY822JJhzEFMiIE_!!2053469401.jpg" alt=""></div>
        <div class="swiper-slide"><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN011zFY822JJhzEFMiIE_!!2053469401.jpg" alt=""></div> 
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 图标导航 -->
    <div class="contents">
      <div class="contentList">
        <div class="contentItem" @click="goDetails">
          <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011npPe82JJhy3KUj5q_!!2053469401.png" alt="">
          <p>疯抢排行</p>
        </div>
        <div class="contentItem">
          <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011npPe82JJhy3KUj5q_!!2053469401.png" alt="">
          <p>疯抢排行</p>
        </div>
        <div class="contentItem">
          <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011npPe82JJhy3KUj5q_!!2053469401.png" alt="">
          <p>疯抢排行</p>
        </div>
        <div class="contentItem">
          <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011npPe82JJhy3KUj5q_!!2053469401.png" alt="">
          <p>疯抢排行</p>
        </div>
        <div class="contentItem">
          <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011npPe82JJhy3KUj5q_!!2053469401.png" alt="">
          <p>疯抢排行</p>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="advertising">
      <div class="top-line-logo"><img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN011wdOkj2JJhy7TkPFo_!!2053469401.png" alt="">
      </div>
      <div class="top-line-right">
        <div class="text-ellipsis">
          <span>品牌特卖</span>
          <p>马克华菲断码清仓，曼秀雷敦买一送二</p>
        </div>
        <i class="iconfont icon-youjiantou">></i>
      </div>
    </div>
    <!-- 品牌特卖 -->
    <div class="main_products">
      <div class="main_product_content">
        <div class="title_group">
          <div class="group-left">
            <p>品牌特卖</p>
            <span>470+品牌</span>
          </div>
          <div class="group-right">
            <p @click="goMoreBrand">更多品牌</p>
            <span>></span>
          </div>
        </div>
        <ul class="product-List">
          <li class="product-Item" v-for="(good,index) in 8" :key="index">
            <a href=""><img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01KExbIH2JJhzFmNEMp_!!2053469401.png" alt=""></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Swiper from "swiper"; 
import 'swiper/css/swiper.min.css' 
import { mapState } from "vuex";
  // 首页
  export default {
    name:"PeachHome",
    mounted(){
     this.$nextTick(() => {
        this.BScroll = new BScroll(".wrapper",{
          scrollX: true,
        }),
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            loop: true,
          })         
      }),
      this.$store.dispatch('getGoodsAction')
      this.$store.dispatch('getNavsAction')
    },
    methods:{
      goDetails(){
       this.$router.push('/homeshops') 
      },
      goMoreBrand(){
        this.$router.push('/homemorebrand')
      }
    },
    computed:{
      ...mapState({
        goods(state){
          return state.goods
        },
        navs(state){
          return state.navs
        }
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #y_peachHomen
    position relative
    background #eee
    /* 头部 */
    .header
      width 100%
      height 159px
      background rgb(207, 109, 119)
      border-radius 0 0 20px 20px
      .header_top
        width 100%
        height 44px
        display flex
        border-bottom 1px solid #000
        input
          width 320px
          height 32px
          background #fff
          margin 6px 0 6px 10px
          border-radius: 20px
          outline none
        .header_right
          display flex
          width 36px
          height 35px
          margin 4px 4px 4px 6px
          display flex
          flex-direction column
          .header_right_icon
            margin-left 2px
            .icon-tb
              font-size 20px
          .news
            width 36px
      .wrapper
        width 100%
        height 30px
        display flex
        overflow: hidden
        .content
          display flex
          margin-top 9px
          li
            height 20px
            width 80px
            a
              font-size 14px
              padding 0 8px
              height 30px
              line-height 30px
              color #fff
    /* 轮播图 */
    .swiper-container
      position absolute
      top 85px
      width 355px
      height 140px
      margin 0 10px
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          height 100%
          img 
            width 100%
            height 100%
   /* 图标导航 */   
    .contents
      width 355px
      height 94px
      background #fff
      margin 58px 10px 0 10px
      .contentList
        padding 5px 7px 8px 6px
        display flex
        justify-content space-around
        .contentItem
          margin 10px 0 0 
          img   
            width 50px
          p
            font-size 14px
/*  <!-- 广告 --> */     
    .advertising
      width 355px
      height 40px
      margin 1px 10px 3px 10px
      background #fff
      text-align center
      line-height 40px
      display flex
      justify-content space-around
      .top-line-logo
        width 58px
        height 14px
        img   
          width 58px
          height 14px
      .top-line-right
        width 274px
        display flex
        .text-ellipsis
          width 240px
          display flex
          span
            height 14px
            width 58px
            font-size 10px
            padding 15px 5px
            line-height 14px
          p
            width 184px
            font-size 14px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
    /* 品牌特卖 */
    .main_products
      width 355px
      height 315px
      margin 0 auto
      padding 12px 12px 0 12px
      box-sizing border-box
      background #fff
      .main_product_content
        width 100%
        height 100%
        .title_group
          background #fff
          width 331px
          height 21px
          display flex
          justify-content space-between
          text-align center
          line-height 21px
          .group-left
            display flex
          .group-right
            display flex
        .product-List
          width 331px
          height 260px
          display flex
          justify-content space-around
          flex-wrap wrap
          .product-Item
            width 79px
            height 120px
            margin 5px 0
            img 
              width 79px
              height 120px
        
          
            
          
            
          
        
</style>
