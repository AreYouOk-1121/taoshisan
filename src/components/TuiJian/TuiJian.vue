<template>
  <div class="DeatailRecommend">
    <div class="RecommendTitle">
      相似推荐
    </div>
    <!-- 推荐组件 -->
    <div class="RecommendMerchant">
      <ul>
        <li v-for="(tuijian, index) in shangTuijian" :key="index">
          <img :src="tuijian.pic" alt="tu">
          <div>{{tuijian.dtitle}}</div>
          <div>{{tuijian.quanJine}}}元劵</div>
          <div>
            劵后价<em>￥{{tuijian.jiage}}</em>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"TuiJian",
    props:{
      shangTuijian:{
        type:Array,
        required:true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
 
</style>
