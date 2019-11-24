<template>
  <div class="DeatailMerchant">
    <div class="merchant">
      <img :src="shangName.shopLogo" alt="tu">
      <span>{{shangName.shopName}}</span>
      <span>店铺所有优惠></span>
    </div>
    <div class="service">
      <div>宝贝描述:{{shangName.dsrScore}}</div>
      <em></em>
      <div>卖家服务:{{shangName.shipScore}}</div>
      <em></em>
      <div>物流服务:{{shangName.serviceScore}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"ShangJia",
    props:{
      shangName:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

 
</style>
