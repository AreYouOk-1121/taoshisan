<template>
  <div class="brandStore">
    <div class="backwardsWithminiNav">
      <div class="classHeader">
        <span class="backwards"> < </span>
        <span class="miniNav">...</span>
      </div>
    </div>


      <mt-navbar class="mt-navbar" v-model="selected" fixed>
        <mt-tab-item class="mt-tab-item" id="1">人气</mt-tab-item>
        <mt-tab-item class="mt-tab-item" id="2">最新</mt-tab-item>
        <mt-tab-item class="mt-tab-item" id="3">销量</mt-tab-item>
        <mt-tab-item class="mt-tab-item" id="4">价格</mt-tab-item>
      </mt-navbar>


      <mt-tab-container class="mt-tab-container" v-model="selected">
        <mt-tab-container-item class="mt-tab-container-item" id="1">
          <!-- <mt-cell v-for="n in 18" :title="'content ' + n" :key="n">例子 -->
          <mt-cell class="mt-cell" v-for="n in 1" :key="n">
            <img src="https://gd4.alicdn.com/imgextra/i4/1782609620/O1CN01XHGVKC2Kw0eqxZ3dB_!!1782609620.jpg_310x310.jpg_.webp" alt="">
            <div class="rightWord">
              <h3>
                <span class="taoBao">淘宝</span>
                <span>【韩都衣舍】2019新款真皮马丁靴女</span>
              </h3>
              <div class="price">
                <div>
                  <span>券后￥</span>
                  <span>139</span>
                </div>
                <div>
                  <span class="ticket">券180元</span>
                </div>
                <div>
                  <span>已售2.5万|</span>
                  <span>评价1542</span>
                </div>
              </div>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'content ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'content ' + n" :key="n"/>
        </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Navbar, TabItem } from 'mint-ui'
  import { TabContainer, TabContainerItem } from 'mint-ui'
  import 'mint-ui/lib/style.css'
  export default {
    data(){
      return {
        selected:''
      }
    },
    components:{
      
    },
    props: {
      fixed: {
        type: Boolean,
        default: true
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.brandStore
  width 100%
  height 100%
  .backwardsWithminiNav
    height 50px
    .classHeader
      background-image linear-gradient(to right,#FBAA58 0,#FA4DBE 100%)
      width 100%
      height 28px
      position fixed
      z-index 9
      line-height 44px
      text-align center
      display flex
      padding 8px 10px
      .backwards
        width 28px
        height 28px
        line-height 28px
        color white
        font-size 24px
  .mt-navbar
    top 44px
    .mt-tab-item
      font-size 15px
  .mt-tab-container
    top 44px 
    .mt-cell
      display flex
      width 375px
      height 146px
      img 
        width 126px
        height 126px
      .rightWord
        padding-left 10px
        height 126px
        display flex
        flex-direction column
        h3 
          font-size 14px
          height 40px
          .taoBao
            color white
            background red
            font-size 10px
            height 20px
            line-height 20px
        .price
          padding-top 20px
          height 60px
          div
            height 21px 
            font-size 10px
            .ticket
              color white
              background orange





      

 
</style>
