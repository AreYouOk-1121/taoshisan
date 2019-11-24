<template>
  <div class="DeatailDescribe">
    <div class="DescribeName">
      <span>天猫</span>
      <span>{{shangMessage.dtitle}}</span>
    </div>
    <div class="DescribeCoupon1">
      <span>
        劵后价￥<em>{{shangMessage.jiage}}</em>
      </span>
      <span>
        已售<em>{{shangMessage.xiaoliang}}</em>件
      </span>
    </div>
    <div class="DescribeCoupon2">
      <span>
        天猫价￥{{shangMessage.yuanjia}}
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
            <em>{{shangMessage.huodongType}}</em>元优惠券
          </span>
          <span>
            使用期限:{{shangMessage.createTime}}
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
</template>

<script type="text/ecmascript-6">
  export default {
    name:"ShangPin",
    props:{
      shangMessage:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
      margin auto 4px auto 0
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
 
</style>
