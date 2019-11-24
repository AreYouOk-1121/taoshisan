<template>
  <div id="wn-PeachDeatail">
    <div class="DeatailTitle" v-show="false">
      <div><</div>
      <span>商品</span>
      <span>推荐</span>
      <div>. . .</div>
    </div>
    <div class="DeatailContent">
      <ul class="productImage">
        <li>
          <img :src="ImageArr[0]" alt="tu">
        </li>
      </ul>
      <div class="DeatailDescribe">
        <div class="DescribeName">
          <span>天猫</span>
          <span>【马克华菲】巨火！真皮加绒弹力针织马丁靴</span>
        </div>
        <div class="DescribeCoupon1">
          <span>
            劵后价￥<em>159</em>
          </span>
          <span>
            已售<em>270</em>件
          </span>
        </div>
        <div class="DescribeCoupon2">
          <span>
            天猫价￥359
          </span>
          <div>
            <span>
              包邮
            </span>
            <span>
              运费险
            </span>
          </div>
        </div>
        <div class="specialOffer">
          <div class="offer">
            <div>
              <span>
                <em>200</em>元优惠券
              </span>
              <span>
                使用期限:2019.11.19-2019.11.25 
              </span>
            </div>
            <div>
              立即领劵
            </div>
          </div>
          <img src="https://cmsstatic.ffquan.cn//wap_new/main/images/goods_quan.png?v=201908292038" alt="tu">
        </div>
        <p>
          线下半价也买不到！想感受踏步流星？买它！外真皮，里加绒，鞋口弹力针织，不磨脚，潮爆天际！如此大牌，价格如此放纵！我的建议：两色全入！【赠运费险】
        </p>
      </div>
      <div class="DeatailMerchant">
        <div class="merchant">
          <img src="https://img.alicdn.com/imgextra//a9/1b/TB1GDkFR4naK1RjSZFBSuwW7VXa.jpg_310x310.jpg" alt="tu">
          <span>马克华菲女鞋旗舰店</span>
          <span>店铺所有优惠></span>
        </div>
        <div class="service">
          <div>宝贝描述:4.8</div>
          <em></em>
          <div>卖家服务:4.8</div>
          <em></em>
          <div>物流服务:4.8</div>
        </div>
      </div>
      <div class="DeatailRecommend">
        <div class="RecommendTitle">
          相似推荐
        </div>
        <div class="RecommendMerchant">
          <ul>
            <li>
              <img src="//img.alicdn.com/imgextra/i3/4118947871/O1CN012fdNAE280xzJsedWH_!!4118947871.jpg_310x310.jpg_.webp" alt="tu">
              <div>冬季防滑加绒中年雪地靴</div>
              <div>60元劵</div>
              <div>
                劵后价<em>￥49.9</em>
              </div>
            </li>
            <li>
              <img src="//img.alicdn.com/imgextra/i3/4118947871/O1CN012fdNAE280xzJsedWH_!!4118947871.jpg_310x310.jpg_.webp" alt="tu">
              <div>冬季防滑加绒中年雪地靴</div>
              <div>60元劵</div>
              <div>
                劵后价<em>￥49.9</em>
              </div>
            </li>
            <li>
              <img src="//img.alicdn.com/imgextra/i3/4118947871/O1CN012fdNAE280xzJsedWH_!!4118947871.jpg_310x310.jpg_.webp" alt="tu">
              <div>冬季防滑加绒中年雪地靴</div>
              <div>60元劵</div>
              <div>
                劵后价<em>￥49.9</em>
              </div>
            </li>
            <li>
              <img src="//img.alicdn.com/imgextra/i3/4118947871/O1CN012fdNAE280xzJsedWH_!!4118947871.jpg_310x310.jpg_.webp" alt="tu">
              <div>冬季防滑加绒中年雪地靴</div>
              <div>60元劵</div>
              <div>
                劵后价<em>￥49.9</em>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="DeatailCollect">
      <div class="shareCollect">
        <span>
          分享
        </span>
        <span :class="{collect:ShopCollect}" @click="goShopCollect">
          收藏
        </span>
      </div>
      <div class="noNeckPower" v-show="false">
        <p>
          ￥<em>37.9</em>
        </p>
        <p>
          不领劵
        </p>
      </div>
      <div class="loseEfficacy">
        活动已结束
      </div>
      <div class="neckPower" v-show="false">
        <span>
          ￥<em>12.9</em>
        </span>
        <span>
          领劵购买
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ShopCollects from "../../../Peach_server/xiangqing/shangdian.json";
import { SAVE_GESHOPCOLLECTS } from "../../store/mutations-type";
  // 分类
  import DetailImage from './img.json'
  export default {
    name:"PeachDetails",
    data() {
      return {
        ImageArr:[],
        ShopCollect:false//初始化收藏默认不高亮 
      }
    },
    created() {
      this.ImageArr = DetailImage
    },
    methods:{
      goShopCollect(){
        this.ShopCollect = !this.ShopCollect
        this.$store.commit(SAVE_GESHOPCOLLECTS,{ShopCollects})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#wn-PeachDeatail
  background-color #eee
  .DeatailContent
    width 100%
    height 700px
    .productImage
      li
        img
          width 100%
          height 375px
    .DeatailRecommend
      overflow hidden
      background-color #fff
      height 240px
      width 100%
      .RecommendTitle
        height 50px
        line-height 50px
        text-align center
        font-size 18px
        color #333
      .RecommendMerchant
        padding-left 10px
        ul
          display flex
          flex-wrap nowrap
          li
            margin-right 10px
            img
              width 100px
              height 100px
            div:first-of-type
              width 100px
              font-size 14px
              margin 8px 0
              color #666
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            div:nth-of-type(2)
              display inline-block
              border 1px solid #FC4D52
              color #FC4D52
              padding 2px 4px
              margin 2px 0 10px
            div:last-of-type
              color #FC4D52
              font-size 14px
              em
                font-size 16px


    .DeatailMerchant
      background-color #ffffff
      margin 8px 0
      height 132px
      width 100%
      box-sizing border-box
      .merchant
        margin 0 14px
        height 60px
        padding 10px 0
        display flex
        justify-content space-between
        line-height 60px
        font-size 16px
        color: #333
        span:last-child
          color: #888
        img
          width 60px
          height 60px
          vertical-align middle
      .service
        display flex
        justify-content space-around
        border-top 1px solid #bbb
        em
          height 14px
          border 1px solid #888
          margin-top 18px
        div
          height 50px
          line-height 50px
          font-size 15px
          color #333

    .DeatailDescribe
      background-color #fff
      width 100%
      height 272px
      .DescribeName
        height 44px
        padding 0 14px
        font-size 16px
        line-height 44px
        display flex
        span:first-child
          border 1px solid #FEC8D9
          color #FEC8D9
          padding 0 4px
          height 20px
          margin auto 0
          line-height 20px
          font-size 14px
        span:last-child 
          width 300px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
      .DescribeCoupon1
        padding 0 14px
        display flex
        justify-content space-between
        height 28px
        span:first-child
          color #FD898D
          font-size 14px
          em
            font-size 24px
        span:last-child 
          font-size 14px
          em
            color #FD898D
            padding 2px
      .DescribeCoupon2
        padding 0 14px
        display flex
        justify-content space-between
        height 28px
        line-height 28px
        span
          font-size 13px
          color #C3C3C3
        div
          span
            margin-left 14px 
      .specialOffer
        position relative
        width 100%
        height 90px
        img
          height 90px
          width 100%
        .offer
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          display flex
          color #fff
          div:first-child
            display flex
            flex-direction column
            border-right 3px dotted  #fff
            width 220px
            text-align center
            padding-right 10px
            span:first-child
              font-size 14px
              padding 4px
              em
                font-size 20px
                margin-right 4px  
            span:last-child 
              color #ddd
          div:last-child
            font-size 14px
            margin-left 20px
            width 70px
            line-height 40px
      p
        font-size 14px
        line-height 1.5em
        padding 5px 8px
        margin-left 6px
        color #888


  .DeatailTitle
    background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
    width 100%
    height 45px
    background-color #eee
    display flex
    justify-content space-between
    line-height 45px
    text-align center
    color white
    position fixed
    top 0
    left 0
    div
      width 45px
      font-size 16px
    span
      font-size 17px

  .DeatailCollect
    width 100%
    height 56px
    line-height 56px
    display flex
    justify-content space-around
    position fixed
    left 0
    bottom 0
    z-index 99
    background-color #ffffff
    .shareCollect
      display flex
      justify-content space-around
      width 40%
      font-size 20px
      padding 0 15px
      box-sizing border-box
      color: #333
      .collect
        color red
    .noNeckPower
      width 30%
      height 56px
      display flex
      flex-direction column
      p
        text-align center
        color #FE9E6B
        &:first-child
          height 50%
          line-height 2.2em
          font-size 14px
          color #FE9E6B
          em
            font-size 16px
        &:last-child
          height 50%
          line-height 1.5em
    .neckPower
      background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
      width 40%
      text-align center
      font-size 14px
      height 44px
      line-height 44px
      margin auto 0
      border-radius 10px
      margin-right 7px
      display flex
      flex-direction column
      span
        text-align center
        color #fff
        &:first-child
          height 50%
          line-height 2.2em
          font-size 14px
          em
            font-size 18px
        &:last-child
          height 50%
          line-height 1.5em

    .loseEfficacy
      width 60%
      text-align center
      font-size 14px
      height 44px
      line-height 44px
      margin auto 0
      border-radius 10px
      margin-right 7px
      background-color #eee
      color #666
 
</style>
