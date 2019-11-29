<template>
  <div id="y_homeShops">
    <!-- 头部 --> 
    <header class="header">
      <div class="header-top">
        <div class="icon_header">
          <span @click="goPeachHome"><</span>
        </div>
        <div class="logo">
          <img src="https://cmsstatic.ffquan.cn//wap_new/ranking/images/title.svg?v=201908292038" alt="">
        </div>
        <div class="icon">
          <div>....</div>
        </div>
      </div>
      <!-- better-scroll滑动 -->
      <div class="wrapper">
        <ul class="content">
          <li v-for="(good,index) in goods" :key="index"><a href="javascript:;">精品</a></li>
        </ul>
      </div>
    </header>
    <!-- 每隔20分钟排名一次 -->
    <div class="activity">
      <p>距离下次排名更新还有06分18秒</p>
    </div>
    <div class="contentArea">
      <div class="contentItem" v-for="(good,index) in goods" :key="index">
        <div class="itemLeft">
          <img class="lazy" v-lazy="good.image" alt="">
        </div>
        <div class="itemRight">
          <h3>{{good.summary}}</h3>
          <a class="item-price">
            <p>近2小时疯抢<span>{{good.count}}万</span>件</p>
            <div>天猫价: ¥{{good.prePrice}}</div>
          </a>
          <div class="price">
            <div class="new-price">劵后价¥{{good.newPrice}}</div>
            <a href="javascript:;" @click="goPeachDetails">立即抢购</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import 'swiper/css/swiper.min.css'
import {brands } from "../../api";
import { mapState } from "vuex";

export default {
  name:'homeShops',
  methods:{
    goPeachHome(){
      this.$router.back()  
    },
    goPeachDetails(){ //跳转详情页,通过query传参,params要提要:id站位    
      this.$router.push({
        path:'/peachdetails',
        query:{
          id:23498652
        }
      })
    }
  },

  mounted(){
    this.$nextTick(() => {
      this.BScroll = new BScroll(".wrapper",{
        scrollX: true,
      })
    }),
     this.$store.dispatch('getGoodsAction')
  },
  computed:{
    ...mapState(['goods'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 #y_homeShops
  background #eee
 /* 头部 */
  .header
    width 100%
    height 90px
    background linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    .header-top
      height 45px
      width 100%
      display flex
      justify-content space-between
      text-align center
      line-height 45px
      .icon_header
        width 45px
        height 45px
        font-size 20px
      .logo 
        img 
          width 136px
          height 30px 
          margin-top 10px
      .icon
        width 45px
        height 45px
        font-size 20px
    /* 滑动 */
    .wrapper
      width 100%
      height 30px
      overflow hidden
      display flex
      .content
        display flex
        margin-top 9px
        height 30px
        li
          width 50px
          height 30px
          line-height 30px
          margin-left 10px
          a
            padding 0 8px
            font-size 14px
            height 30px
            line-height 30px
            color #fff
  /* 活动内容 */
  .activity
    width 100%
    height 35px
    background #ffebe1
    text-align center
    line-height 35px
  /* item每一项 */
  .contentArea
    width 100%
    background f5f5f5
    .contentItem
      box-sizing border-box
      width 100%
      height 141px
      padding 10px 10px 10px 0
      margin 0 0 5px
      display flex
      justify-content space-between
      margin 5px 0
      background #fff
      .itemLeft
        img   
          width 120px
          height 120px
      .itemRight
        margin 0 auto
        width 235px
        h3
          width 235px
          height 25px
        .item-price
          width 235px
          height 58px
          padding 5px 0 0
        .price
          margin-top 10px
          width 235px
          height 30px
          display flex
          justify-content space-between 
          .new-price
            width 50px
            height 14px
            padding 5px 0 0
          a
            width 72px
            height 30px
            border-radius 10px
            background rgba(252,77,81,1)
            font-size 14px
            text-align center
            line-height 30px
            color #fff
</style>
        