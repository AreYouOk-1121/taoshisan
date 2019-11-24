<template>
  <ul class="CollectContent" >
    <li class="CollectItem" v-for="(item, index) in [...shouCangBiao].slice(0,4)" :key="index">
      <transition name="ItemTrans">
        <div class="ItemChild">
          <div class="ItemLeft">
            <div class="ItemImage">
              <img :src="item.pic" alt="tu">
            </div>
            <div class="Itemcontent">
              <span class="ItemName">
                {{item.dtitle}}
              </span>
              <div class="ItemOther">
                <span>劵后价<em>￥{{item.jiage}}</em></span>
                <span>找相似</span>
              </div>
            </div>
          </div>
          <div class="ItemDelete">
            删除
          </div>
        </div>
      </transition>
    </li>
    <li class="CollectCenter" v-show="false">
      <img src="https://img.alicdn.com/imgextra/i2/2204175008243/O1CN01OTr6Hk2AlLL6RgOtR_!!2204175008243.jpg_310x310.jpg_.webp" alt="无">
      <span>暂无收藏</span>
      <button>去首页逛逛吧</button>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"ShouLieBiao",
    props:{
      shouCangBiao:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.CollectContent
  .CollectItem
    padding 10px 0 0 10px
    background-color #fff
    height 136px
    display flex
    .ItemChild
      display flex
      .ItemDelete
        width 86px
        height 146px
        background-color #FC3F78
        margin-top -10px
        font-size 20px
        color #fff
        text-align center
        line-height 146px
      .ItemLeft
        display flex
        justify-content space-between
      .ItemImage
        img
          width 126px         
          height 126px 
      .Itemcontent      
        width 220px
        height 136px
        margin 0 9px 0 10px
        padding 0 0 10px 10px
        box-sizing border-box
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        .ItemName
          font-size 16px
          font-weight 700
          line-height 1.2em
        .ItemOther
          width 100%
          display flex
          justify-content space-between
          font-size 14px 
          span:first-child
            color #888
            line-height 2.2em
            em
              font-size 16px              
          span:last-child
            background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
            width 35%
            height 30px
            color #fff
            font-size 14px
            line-height 30px
            margin-right 4px
            text-align center
            border-radius 20px

  .CollectCenter
    display flex
    flex-direction column
    align-items center
    img
      margin-top 5px
      width 188px
      height 188px
      border-radius 50%
    span
      margin-top 14px
      font-size 16px
    button
      background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
      width 136px
      height 35px
      margin-top 14px
      border-radius 50px
      font-size 16px
      outline none 
      border none 
 
</style>
