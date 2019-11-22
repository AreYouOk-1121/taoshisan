<template>
  <div id="wn-PeachCollect">
    <div class="CollectTitle">
      <div @click="goHome('/peachlogin')"><</div>
      <span>我的收藏</span>
      <div @click="isShowComelete = !isShowComelete">{{isShowComelete?'完成':'编辑'}}</div>
    </div>
    <div class="CollectCourrent">
      <ul class="CollectContent">
        <li class="CollectItem">
          
        </li>
        <li class="CollectCenter" v-show="false">
          <img src="https://img.alicdn.com/imgextra/i2/2204175008243/O1CN01OTr6Hk2AlLL6RgOtR_!!2204175008243.jpg_310x310.jpg_.webp" alt="无">
          <span>暂无收藏</span>
          <button>去首页逛逛吧</button>
        </li>
      </ul>
      <div class="CollectCall">
        <div>
            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01arPhOl2JJhy5zM5nh_!!2053469401.png" alt="xin">
            <span>为你精选</span>
        </div>
      </div>
      <ul class="CollectOmnibus">
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
      </ul>
    </div>
    <transition name="delete">
      <div class="deleteCollect"  v-show="isShowComelete">
        <span>
          全选0
        </span>
        <div>删除</div>
      </div>
    </transition>
    
  </div>
</template>

<script type="text/ecmascript-6">
  // 收藏
  export default {
    name:"PeachCollect",
    data() {
      return {
        isShowComelete:false
      }
    },
    methods: {
      goHome(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  #wn-PeachCollect
    width 100%
    height 1000px
    background-color #eee
    .deleteCollect
      &.delete-enter-active,&.delete-leave-active
        transition all .4s cubic-bezier(1.0, 1.0, 1.0, 1.0)
      &.delete-enter,&.delete-leave-to
        transform: translateY(50px);
        opacity: 0.9;
      width 100%
      height 50px
      line-height 50px
      display flex
      justify-content space-between
      position fixed
      left 0
      bottom 0
      z-index 99
      background-color #ffffff
      div
        width 127px
        height 100%
        color #ffffff
        background-color #FC3F78
        text-align center
        font-size 16px
      span
        font-size 14px
        margin-left 20px
    .CollectTitle
      background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
      width 100%
      height 45px
      background-color #eee
      display flex
      justify-content space-between
      line-height 45px
      text-align center
      color white
      div
        width 45px
        font-size 16px
      span
        font-size 17px
    .CollectCourrent
      height 1000px
      overflow hidden
      .CollectContent
        height 334px
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

        


 
</style>
