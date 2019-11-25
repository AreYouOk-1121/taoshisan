<template>

      <div class="nav-right">
        <div class="blank-top">
        </div>
        <div class="scrollbar">
          <div ref="scrollerRight" class="scrollbar-bswrapper">
            <ul class="scrollbar-list">
              <li v-for="i of 3" :key="i" class="scrollbar-list-item active" style="height:100px">
                <p class="brandStyle">秋冬流行</p>
                <div class="brandClass">
                  <div v-for="i of 9" :key="i" class="brandClassItem" style="height:100px">
                    <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Y3loxV2JJhvJsPrnm-2053469401.jpg_310x310.jpg_.webp" alt="">
                    <p class="brandName">韩都衣舍</p>
                  </div>
                </div>
              </li>
              <div class="blank-bottom"></div>
            </ul>
          </div>
        </div>
      </div>
    

</template>

<script type="text/ecmascript-6">

  import BScroll from '@better-scroll/core'
  import ScrollBar from '@better-scroll/scroll-bar'

  BScroll.use(ScrollBar)
  
  export default {
    name:"CassNavyRight",


    created() {
      this.bscrollRight = null
    },
    mounted() {
      this.initBscroll()
      
    },
    methods: {
      initBscroll() {
        this.bscrollRight = new BScroll(this.$refs.scrollerRight, {
          scrollY: true,
          scrollbar: true
        })
      }
    }
  }






</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .nav-right
      width calc(100% - 68px)
      height 100%
      // background green
      .blank-top
        height 44px 
      .scrollbar
        height: 100%
        width 100%-68px
        .scrollbar-bswrapper
          position: relative
          height: 100%
          border: 1px solid #ccc
          overflow: hidden
        ul
          width 100%
          .blank-bottom
            height 50px 
          .scrollbar-list-item
            // background red
            height auto !important
          li
            width 100%
            // height 45px
            // line-height 45px
            list-style: none
            &.active
              border-left: 2px solid red
            .scrollbar-wrapper
              text-align: center
              color: #999
            .brandClass
              display flex
              flex-wrap wrap
              width 306px
              .brandClassItem
                display flex
                flex-direction column
                width 101px
                height 106px
                text-align center
                img 
                  width 61px
                  height 61px
                  padding-left 20px
            .brandStyle
              height 40px
              line-height 40px
              width 100%
              padding-left 20px
            
 
</style>
