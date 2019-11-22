<template>
  <div id="y_homeMoreBrand">
    <!-- 头部 -->
    <header class="header">
      <div>
        <span class="tubiao" @click="goPeachHome"><</span>
        <p>品牌特卖</p>
      </div>
    </header>
    <!-- 滑动 -->
    <div class="MoreBrandContent">
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
        </ul>
      </div>
    </div>
    <div class="tuijian">
      <p class="tuijian-today">今日推荐</p>
      <p>严选口碑好货，触底品牌低价</p>
    </div>
    <!-- 商家item -->
    <div class="shopItem">  
      <!-- 上部 -->
      <div class="shop-top">
        <img class="logo" src="https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1FxgBmKOSBuNjy0FdXXbDnVXa" alt="">
        <div class="shop-caopai">
          <p>马克华菲</p>
          <a href=""><i>中国潮流品牌</i></a>
        </div>
      </div>
      <!-- 中部 -->
      <div class="list1_info">
        <div class="info">
          <div class="title">抢爆款限量半件 </div>
          <p class="msg">
            <i style="font-style:normal;">实付满19元包邮   点击查看&gt;&gt;</i>
          </p>
          <span class="out">已售42.5万件&gt;</span>
        </div>
        <div class="focus">2734w人关注</div>
      </div>
      <!-- 下部 -->
      <div class="shops">
        <ul class="shopList">
          <li class="shopItemDetails">
            <div class="DetailsItem">
              <div class="ItemImg">
                <img src="https://img.alicdn.com/imgextra/i3/619123122/O1CN0190dXu81Yvv5IZ5Z7y_!!619123122.jpg_310x310.jpg_.webp" alt="" class="shopImg">
                <div class="shopDiscount">9.7折</div>
              </div>
              <!-- 价格上部 -->
              <div class="shopPrice">
                <div class="shopPriceTop">
                  <div class="priceTag">¥</div>
                  <span class="priceNew">34.9</span>
                  <del class="pricePre">¥35.9</del>
                </div>
              </div>
              <!-- 价格中部 -->
              <div class="tag">
                <img class="jiaobiao"  src="//cmsstatic.ffquan.cn//wap_new/brand/images/ju.png" alt="">
                <div class="merchatTag">旗舰店</div>
                <div class="merchatTag">爆款</div>
              </div>
              <!-- 价格中下部 -->
              <div class="sold">已售41.5w件</div>
              <div class="Second">第二件1元</div>
            </div>
          </li>
          <li class="shopItemDetails">
            <div class="DetailsItem">
              <div class="ItemImg">
                <img src="https://img.alicdn.com/imgextra/i3/619123122/O1CN0190dXu81Yvv5IZ5Z7y_!!619123122.jpg_310x310.jpg_.webp" alt="" class="shopImg">
                <div class="shopDiscount">9.7折</div>
              </div>
              <!-- 价格上部 -->
              <div class="shopPrice">
                <div class="shopPriceTop">
                  <div class="priceTag">¥</div>
                  <span class="priceNew">34.9</span>
                  <del class="pricePre">¥35.9</del>
                </div>
              </div>
              <!-- 价格中部 -->
              <div class="tag">
                <img class="jiaobiao"  src="//cmsstatic.ffquan.cn//wap_new/brand/images/ju.png" alt="">
                <div class="merchatTag">旗舰店</div>
                <div class="merchatTag">爆款</div>
              </div>
              <!-- 价格中下部 -->
              <div class="sold">已售41.5w件</div>
              <div class="Second">第二件1元</div>
            </div>
          </li>
          <li class="shopItemDetails">
            <div class="DetailsItem">
              <div class="ItemImg">
                <img src="https://img.alicdn.com/imgextra/i3/619123122/O1CN0190dXu81Yvv5IZ5Z7y_!!619123122.jpg_310x310.jpg_.webp" alt="" class="shopImg">
                <div class="shopDiscount">9.7折</div>
              </div>
              <!-- 价格上部 -->
              <div class="shopPrice">
                <div class="shopPriceTop">
                  <div class="priceTag">¥</div>
                  <span class="priceNew">34.9</span>
                  <del class="pricePre">¥35.9</del>
                </div>
              </div>
              <!-- 价格中部 -->
              <div class="tag">
                <img class="jiaobiao"  src="//cmsstatic.ffquan.cn//wap_new/brand/images/ju.png" alt="">
                <div class="merchatTag">旗舰店</div>
                <div class="merchatTag">爆款</div>
              </div>
              <!-- 价格中下部 -->
              <div class="sold">已售41.5w件</div>
              <div class="Second">第二件1元</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
/* 更多品牌 */
  export default {
    name:"HomeMoreBrand",
    methods:{
      goPeachHome(){
        this.$router.back('/goPeachHome')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#y_homeMoreBrand
  background-image: url('https://img.alicdn.com/imgextra/i3/2053469401/O1CN01p3C4Lj2JJhz3YaJEa_!!2053469401.png')
/* 头部 */
  .header
    width 100%
    height 45px
    padding 5px 10px
    box-sizing border-box
    text-align center
    line-height 35px
    .tubiao
      font-size 20px
      float left
      color #fff
    p
      font-size 18px
      color #fff
  /* 滑动 */
  .MoreBrandContent
    width 100%
    height 45px 
    .wrapper
        width 100%
        height 30px
        overflow: hidden
        .content 
          display flex
          white-space nowrap
          margin-top 9px
          li
            height 30px
            line-height 30px
            a
              font-size 14px
              padding 0 8px
              height 30px
              line-height 30px
              color #fff
  /* 今日推荐 */
  .tuijian
    width 100%
    height 64px
    text-align center
    margin 0 0 13px
    .tuijian-today
      font-size 20px
      width 80px
      height 27px
      margin 0 auto
      padding 20px 0 0 0
      font-size bild
      color #fff
    p
      font-size 12px
      margin 2px
      color #fff
  /* 商家shop */
  .shopItem
    width 355px
    margin 0 auto
    background #fff
    padding 0 0 5px
  /* 上部 */
    .shop-top
      height 55px
      display flex
      text-align center
      .logo   
        width 40px
        height 40px
        margin 8px 8px 0 8px    
      .shop-caopai
        display flex
        text-align center
        line-height 55px
        width 143px
        height 22px
        p
          font-size 16px
        a
          padding 0 6px 0 2px
          width 68px
          height 16px
          font-size 10px
          i 
            background #f44
            border-radius 4px
            padding 0 6px 0 2px
            color #fff
    /* 中部 */
    .list1_info 
      height 100px
      margin 0 auto   
      border-radius 10px
      position relative
      background-image url('https://img.alicdn.com/imgextra/i3/2053469401/O1CN01kfJu242JJhzFmPpzx_!!2053469401.jpg')
      background-size 335px 100px
      .info
        padding 10px 16px 18px
        .title
          font-size 16px
          margin 0 0 8px
          width 303px
          height 27px
        .msg
          width 156px
          height 16px
          font-size 12px
          color #fff
        .out
          width 86px
          height 16px
          color #ffffff
          font-size 12px

      .focus
        position absolute
        bottom 0
        right 0
        width 76px
        height 19px
        color #ffffff
        padding 0 8px
        border-radius 5px 5px 5px 0
        background linear-gradient(276deg,#ff1e2f 0,#e51698 100%);
    /* shops商品信息 */
    .shops
      height 220px
      .shopList
        width 100%
        height 100%
        box-sizing border-box
        padding 10px 10px 5px
        display flex
        justify-content space-around
        .shopItemDetails
          width 112px 
          height 189px
          padding 0 2.5px
          .DetailsItem
            width 112px
            height 190px
            .ItemImg
              position relative
              .shopImg
                width 106px
                height 106px
                background pink
              .shopDiscount
                background linear-gradient(153deg,#fad961 0,#f76b1c 100%)
                border-radius 7px 7px 7px 0
                width 31px
                height 14px
                color #fff
                font-size 8px
                position absolute
                bottom 3px
                right 3px
                text-align center
                line-height 14px
            .shopPrice
              width 102px
              height 17px
              margin 0 0 4px
              .shopPriceTop
                display flex
                text-align center
                width 102px
                height 16px
                margin 0 0 4px
                line-height 16px
                .priceTag
                  margin 0 2.5px 0 0
                  color #ff3b32
                  width 8px
                  height 14px
                .priceNew
                  width 32px
                  height 17px
                  font-size 16px
                  color #ff3b32
                  margin 0 9px 0 0
                .pricePre
                  width 33px
                  height 12px
                  color #aaaaaa
                  font-size 11px
            .tag
              width 102px
              height 13px
              display flex
              justify-content center
              align-items center
              .jiaobiao
                width 18px
                height 13px
                margin 0 4px 0 0
              .merchatTag
                font-size 10px
                padding 0 5px
                color #fe3a33
            .sold
              width 102px
              height 14px
              margin 4px 0 0
              color #666666
            .Second
              font-size 11px
              background rgba(245,166,35,0.2)
              margin 5px 0 0
              padding 0 6px
              color #f57523
              width 55px
              border-radius 3px
              height 15px
              line-height 15px




</style>
