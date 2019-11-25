<template>
  <div>
    <div class="CollectCall">
      <div>
          <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01arPhOl2JJhy5zM5nh_!!2053469401.png" alt="xin">
          <span>为你精选</span>
      </div>
    </div>
    <ul class="CollectOmnibus">
      <li @click="goDeatail(index)" class="CollectOmnibusItem" v-for="(item, index) in jingXuanBiao" :key="index">
        <img :src="item.pic" alt="tu"/>
        <div class="tradeName">{{item.dtitle}}</div>
        <div>劵后￥{{item.jiage}}</div>
        <div>
          <span>已售{{item.xiaoliang}}万</span>
          <span>|</span>
          <span>评论{{item.quanJine}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"JingXuan",
    props:{
      jingXuanBiao:{
        type:Array,
        required:true
      }
    },
    methods: {
      goDeatail(index){
        console.log(index)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.CollectCall
  width 100%
  height 50px
  box-sizing border-box
  padding 14px 0
  div
    text-align center
    img
      width 20px
      height 20px
      vertical-align:middle;
    span
      font-size 15px
.CollectOmnibus
  display flex
  justify-content space-around
  flex-wrap wrap
  .CollectOmnibusItem
    width 180px
    height 180px
    background-color #fff
    display flex
    flex-direction column
    height 290px
    margin-bottom 4px
    img
      margin 0 auto
      width 180px
      height 180px
    div
      font-size 14px
      margin-left 9px
      &.tradeName
        margin 15px 0 30px 9px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis

 
</style>
