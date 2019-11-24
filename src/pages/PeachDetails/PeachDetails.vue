<template>
  <div id="wn-PeachDeatail">
    <div class="DeatailTitle" v-show="false">
      <div><</div>
      <span>商品</span>
      <span>推荐</span>
      <div>. . .</div>
    </div>
    <div class="DeatailContent">
      <!-- 大图组件 -->
      <BigImage :bigImage="shangDian[0]? shangDian[0].pic :''"/>
      <!-- 商品信息 -->
      <ShangPin :shangMessage="shangDian[0]? shangDian[0]:{}"/>
      <!-- 商家 -->
      <ShangJia :shangName = "shangJia? shangJia : {}"/>
      <!-- 相似推荐 -->
      <TuiJian :shangTuijian="tuiJia"/>
    </div>
    <div class="DeatailCollect">
      <div class="shareCollect">
        <span>
          分享
        </span>
        <span>
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

  import BigImage from '../../components/BigImage/BigImage'
  import ShangPin from '../../components/ShangPin/ShangPin'
  import ShangJia from '../../components/shangJia/ShangJia'
  import TuiJian from '../../components/TuiJian/TuiJian'

  import {mapState} from 'vuex'
  export default {
    name:"PeachDetails",
    components:{
      BigImage,
      ShangPin,
      ShangJia,
      TuiJian
    },
    computed: {
      ...mapState({
        shangDian: state => state.shangDian,
        shangJia: state => state.shangJia,
        tuiJia: state => state.tuiJia,
      })
    },
    mounted() {
      this.$store.dispatch('getShangDian')
      this.$store.dispatch('getShangJia')
      this.$store.dispatch('getTuiJia')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#wn-PeachDeatail
  background-color #eee
  .DeatailContent
    width 100%
    height 2000px

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
