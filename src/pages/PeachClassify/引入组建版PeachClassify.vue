<template>
  <div class="classProduce">
    <div class="classHeader">
      <span class="backwards"> < </span>
      <input class="search" type="text" placeholder="        输入商品名或粘贴宝贝标题搜索">
      <div class="searchIcon">
        <svg t="1574329713586" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4621" width="24" height="24"><path d="M845.31681 804.279033 669.806116 628.768339c39.298021-47.792125 60.686788-107.250849 60.686788-169.984409 0-71.637018-27.938437-138.975815-78.493704-189.63342-50.657605-50.657605-117.996402-78.493704-189.63342-78.493704s-138.975815 27.938437-189.63342 78.493704c-50.657605 50.657605-78.493704 117.996402-78.493704 189.63342s27.938437 138.975815 78.493704 189.63342c50.657605 50.657605 117.996402 78.493704 189.63342 78.493704 65.394363 0 127.206876-23.230861 176.022387-65.906056l174.999001 174.999001c4.40056 4.40056 10.131521 6.54967 15.964821 6.54967s11.564261-2.149111 15.964821-6.54967C854.117929 827.305217 854.117929 813.080152 845.31681 804.279033zM239.267639 458.78393c0-123.010993 100.087148-223.098141 223.098141-223.098141s223.098141 100.087148 223.098141 223.098141-100.087148 223.098141-223.098141 223.098141S239.267639 581.794923 239.267639 458.78393z" p-id="4622" fill="#bfbfbf"></path></svg>
      </div>
    </div>
    <div class="nav">
      <div class="nav-left">
        <div class="blank-top">
        </div>
        <div class="scrollbar">
          <div ref="scroller" class="scrollbar-bswrapper">
            <ul class="scrollbar-list">
              <li v-for="i of 2" :key="i" class="scrollbar-list-item active">
                {{ `为你推荐`}}
              </li>
              <div class="blank-bottom"></div>
            </ul>
          </div>
        </div>
      </div>

<!-- 

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
      </div> -->
      <CassNavyRight/>


    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  // 分类
  import BScroll from '@better-scroll/core'
  import ScrollBar from '@better-scroll/scroll-bar'
  import CassNavyRight from './CassNavyRight/CassNavyRight'

  BScroll.use(ScrollBar)
  
  export default {
    name:"PeachClassify",
    components:{
      CassNavyRight
    },

    created() {
      this.bscroll = null
    },
    mounted() {
      this.initBscroll()
      
    },
    methods: {
      initBscroll() {
        this.bscroll = new BScroll(this.$refs.scroller, {
          scrollY: true,
          scrollbar: true
        })
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.classProduce
  width 100%
  height 100%
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
    .search
      width 325px
      height 28px
      line-height 28px
      border-radius 5px
      color #333
    .searchIcon
      position fixed
      left 38px
  .nav
    width 100%
    height calc(100% - 44px)
    display flex
    .nav-left
      width 68px
      // background red 
      height 100%
      .blank-top
        height 44px  
      .scrollbar
        height: 100%
        width 100%
        .scrollbar-bswrapper
          position: relative
          height: 100%
          border: 1px solid #ccc
          overflow: hidden
        ul
          width 100%
          .blank-bottom
            height 50px          
          li
            width 100%
            height 45px
            line-height 45px
            list-style: none
            &.active
              border-left: 2px solid red
            .scrollbar-wrapper
              text-align: center
              color: #999  
    // .nav-right
    //   width calc(100% - 68px)
    //   height 100%
    //   // background green
    //   .blank-top
    //     height 44px 
    //   .scrollbar
    //     height: 100%
    //     width 100%-68px
    //     .scrollbar-bswrapper
    //       position: relative
    //       height: 100%
    //       border: 1px solid #ccc
    //       overflow: hidden
    //     ul
    //       width 100%
    //       .blank-bottom
    //         height 50px 
    //       .scrollbar-list-item
    //         // background red
    //         height auto !important
    //       li
    //         width 100%
    //         // height 45px
    //         // line-height 45px
    //         list-style: none
    //         &.active
    //           border-left: 2px solid red
    //         .scrollbar-wrapper
    //           text-align: center
    //           color: #999
    //         .brandClass
    //           display flex
    //           flex-wrap wrap
    //           width 306px
    //           .brandClassItem
    //             display flex
    //             flex-direction column
    //             width 101px
    //             height 106px
    //             text-align center
    //             img 
    //               width 61px
    //               height 61px
    //               padding-left 20px
    //         .brandStyle
    //           height 40px
    //           line-height 40px
    //           width 100%
    //           padding-left 20px
            

</style>
