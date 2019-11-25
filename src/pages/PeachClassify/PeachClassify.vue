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
            <ul ref="navUl" class="scrollbar-list">
              <li @click="getNavIndex(index,item.id)" v-for="(item,index) in ClassImgs" :key="item.id" class="scrollbar-list-item" :class="{active:navIndex===index}">
              
                <router-link :to="{name:'detail',params:{id:item.id}}">{{item.categoryClassName}}</router-link>


              </li>
              <div class="blank-bottom"></div>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav-right">
        <div class="blank-top">
        </div>
        <div class="scrollbar">
          <div ref="scrollerRight" class="scrollbar-bswrapper">
            <ul class="scrollbar-list">

              <li  class="scrollbar-list-item" style="height:100px">
                <div class="brandClass">
                  <div v-for="(item,index) in ClassImgs[navIndex].categoryClassData" :key="index">
                    <h4>{{item.subclassName}}</h4>
                    <ul class="ul">
                      <li
                      @click="$router.push('/classdetail')"
                        v-for="(dataLi, index) in item.subclassData"
                        :key="index"
                        class="brandClassItem"
                        style="height:100px"
                      >
                        <img :src="dataLi.categoryItemData" alt />
                        <p class="brandName">{{dataLi.categoryItemName}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <div class="blank-bottom"></div>
            </ul>
          </div>
        </div>
            <router-view></router-view>
      </div>
    </div>

  </div>
</template> 

<script type="text/ecmascript-6">
  // 分类
  import BScroll from '@better-scroll/core'
  import ScrollBar from '@better-scroll/scroll-bar'
  import router from 'vue-router' 
  import ClassImgs from './classImg.json'
  import MouseWheel from '@better-scroll/mouse-wheel'   //11

  BScroll.use(ScrollBar)

  
  BScroll.use(MouseWheel)    //11
  
  export default {
    name:"PeachClassify",
    data(){
      return {
        ClassImgs:{},     
        navIndex:1
      }
    },                                        
    created() {
      this.bscroll = null
      this.bscrollRight = null
      this.ClassImgs = ClassImgs
    },
    mounted() {
      this.initBscroll()
    },
    methods: {
      initBscroll() {
        this.bscroll = new BScroll(this.$refs.scroller, {
          scrollY: true,
          scrollbar: false,
          click:true,
          interactive: false,
          bounce:{
            top:false,
            bottom:false
          },
          //滚轮
          mouseWheel: {
            speed: 200,
            invert: false,
            easeTime: 0
          }
        })
        this.bscrollRight = new BScroll(this.$refs.scrollerRight, {
          scrollY: true,
          scrollbar: false,
          click:true,
          interactive: true,
          bounce:{
          top:false,
          bottom:false
        },
          //滚轮
          mouseWheel: {
            speed: 200,
            invert: false,
            easeTime: 0
              }
        })
      },
      getNavIndex(index,id){
        let navIndex = index
        this.navIndex = navIndex
        console.log(navIndex)
        this.$router.push({name:'detail',params:{id}})
        // console.log(this.$router.push({name:'subclass',params:{index}}))
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
            text-align center
            background #F4F4F4
            &.active
              border-left: 2px solid red
              background #fff
            .scrollbar-wrapper
              text-align: center
              color: #999  
              
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
            // .brandClass
            //   display flex
            //   flex-wrap wrap
            //   width 306px
            //   .brandClassItem
            //     display flex
            //     flex-direction column
            //     width 101px
            //     height 106px
            //     text-align center
            //     img 
            //       width 61px
            //       height 61px
            //       padding-left 20px

            .brandClass 
              display: flex;
              flex-direction column
              flex-wrap: wrap;
              width: 306px;
              h4 
                height 46px
                line-height 46px
                padding-left 20px
                font-size 14px
                color #333
              ul
                display flex
                flex-wrap: wrap;

                .brandClassItem {
                  display: flex;
                  flex-direction: column;
                  width: 101px;
                  height: 106px;
                  text-align: center;
                  padding  0 0 20px
                }
                img {
                  width: 61px;
                  height: 61px;
                  padding-left: 20px;
                }














            .brandStyle
              height 40px
              line-height 40px
              width 100%
              padding-left 20px
            

</style>
