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
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
          <li><a href="javascript:;">精品</a></li>
        </ul>
      </div>
    </header>
    <!-- 每隔20分钟排名一次 -->
    <div class="activity">
      <p>距离下次排名更新还有06分18秒</p>
    </div>
    <div class="content">
      <div class="contentItem">
        <div class="itemLeft"><img class="lazy" src="https://img.alicdn.com/imgextra/i1/3034588402/O1CN01H5Nec32BwAI4do3lF_!!3034588402.jpg_310x310.jpg" alt="">
        </div>
        <div class="itemRight">
          <h3>老先生 雪媚娘海鸭蛋一盒*6枚</h3>
          <a class="item-price">
            <p>近2小时疯抢<span>3.5万</span>件</p>
            <div>天猫价: ¥4.8</div>
          </a>
          <div class="price">
            <div class="new-price">劵后价¥1.8</div>
            <a href="javascript:;">立即抢购</a>
          </div>
        </div>
      </div>
       <div class="contentItem">
        <div class="itemLeft"><img class="lazy" src="https://img.alicdn.com/imgextra/i1/3034588402/O1CN01H5Nec32BwAI4do3lF_!!3034588402.jpg_310x310.jpg" alt="">
        </div>
        <div class="itemRight">
          <h3>老先生 雪媚娘海鸭蛋一盒*6枚</h3>
          <a class="item-price">
            <p>近2小时疯抢<span>3.5万</span>件</p>
            <div>天猫价: ¥4.8</div>
          </a>
          <div class="price">
            <div class="new-price">劵后价¥1.8</div>
            <a href="javascript:;">立即抢购</a>
          </div>
        </div>
      </div>
       <div class="contentItem">
        <div class="itemLeft"><img class="lazy" src="https://img.alicdn.com/imgextra/i1/3034588402/O1CN01H5Nec32BwAI4do3lF_!!3034588402.jpg_310x310.jpg" alt="">
        </div>
        <div class="itemRight">
          <h3>老先生 雪媚娘海鸭蛋一盒*6枚</h3>
          <a class="item-price">
            <p>近2小时疯抢<span>3.5万</span>件</p>
            <div>天猫价: ¥4.8</div>
          </a>
          <div class="price">
            <div class="new-price">劵后价¥1.8</div>
            <a href="javascript:;">立即抢购</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import 'swiper/css/swiper.min.css'

export default {
  name:'homeShops',
  methods:{
    goPeachHome(){
      this.$router.back('/goPeachHome')
    }
  },
   mounted(){
    this.$nextTick(() => {
      this.BScroll = new BScroll(".wrapper",{
        scrollX: true,
      })
    })
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
    background pink
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
      height 33px
      overflow hidden
      .content
        display flex
        white-space nowrap
        margin-top 9px
        li
          width 30px
          height 30px
          line-height 30px
          padding 0 8px
          a
            font-size 14px
            
            height 30px
            line-height 30px
  /* 活动内容 */
  .activity
    width 100%
    height 35px
    background #ffebe1
    text-align center
    line-height 35px
  /* item每一项 */
  .content
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
        