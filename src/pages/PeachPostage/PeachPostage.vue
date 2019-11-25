<template>
<!-- APP包裹容器:头部和内容区 -->
 <div class="z-PeachPostage">
    <!-- 头部 -->
    <div class="H" style="width:100%; height:44px">
      <header class="header">
          <div class="headerContainer">
          <span class="left">
              <i class="iconfont iconfanhui" style="font-size:25px" @click="GoPeachHome"></i>
          </span>
          <img src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_title.svg?v=201911181718" alt="">
          <span class="right">
              <i class="iconfont iconcaidan" style="font-size:25px"></i>
          </span>
          </div> 
      </header>
    </div>
    
   
    <div class="wrapper" ref="Wref">
    <!-- 内容区:头部和切换区 -->
      <div class="Container" >
        <!-- 头部区 -->
        <div class="jingxuan">
          <van-row class="row1">
                <van-col span="12" class="col1">
                  <div class="text">
                      <p class="top">9.9精选</p>
                      <p class="bottom">十元封底</p>
                  </div>
                  <img class="img1" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01Lv1PUx2JJhyUmSAok_!!2053469401.jpg" alt="">
                </van-col>
                <van-col span="6" class="col1">
                  <div class="text">
                      <p class="top1">5.9元</p>
                      <p class="bottom">居家用品</p>
                  </div>
                    <img class="img2" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Wvghmy2JJhxmqU2XI_!!2053469401.png" alt="">
                </van-col>
                <van-col span="6" class="col1">
                  <div class="text">
                      <p class="top2">3.9精选</p>
                      <p class="bottom">数码小半</p>
                  </div>
                    <img class="img2" src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01nJXSUt2JJhz96hPNI_!!2053469401.png" alt="">
                </van-col>
                
          </van-row>
          <van-row class="row1">
                <van-col span="12" class="col1">
                  <div class="text">
                      <p class="top">9.9精选</p>
                      <p class="bottom">十元封底</p>
                  </div>
                  <img class="img1" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01Lv1PUx2JJhyUmSAok_!!2053469401.jpg" alt="">
                </van-col>
                <van-col span="6" class="col1">
                  <div class="text">
                      <p class="top1">5.9元</p>
                      <p class="bottom">居家用品</p>
                  </div>
                    <img class="img2" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Wvghmy2JJhxmqU2XI_!!2053469401.png" alt="">
                </van-col>
                <van-col span="6" class="col1">
                  <div class="text">
                      <p class="top2">3.9精选</p>
                      <p class="bottom">数码小半</p>
                  </div>
                    <img class="img2" src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01nJXSUt2JJhz96hPNI_!!2053469401.png" alt="">
                </van-col>   
          </van-row>
          <div class="line"></div>
        </div>
         <!--切换区：home / JIngxuan   -->
        <van-tabs v-model="activeName" sticky color="#FC3F78">
          <van-tab    title="精选" name="a"><Jingxuan></Jingxuan><Home></Home><Home></Home> </van-tab>
          <van-tab title="家具" name="b">家具<Home></Home><Home></Home><Home></Home></van-tab>
          <van-tab title="美食" name="c">美食<Home></Home><Home></Home><Home></Home></van-tab>
          <van-tab title="配饰" name="b">配饰<Home></Home><Home></Home><Home></Home></van-tab>
          <van-tab title="美妆" name="c">美妆<Home></Home><Home></Home><Home></Home></van-tab>
        </van-tabs>

    
 
      </div>
  </div>

</div>  
 
</template>

<script type="text/ecmascript-6">
import Home from "./Home/Home"
import Jingxuan from "./Jingxuan/Jingxuan"
import Vue from 'vue';
import BScroll from 'better-scroll'
import {  } from "../../api/index";

  export default {
    name:"PeachPostage",
    data() {
    return {
      activeName: 'a',
      
    };
  },

    components:{
      Home,
      Jingxuan
    },
      
    // 页面挂载时调用滑动方法
   mounted() {
     this.$nextTick(()=>{
      this.goScroll()
     }) 
   },
   
// 定义内容区滑动方法
    methods: {
      goScroll(){
        this.$nextTick(()=>{
         this.scroll =  new BScroll(this.$refs.Wref,{
              scrollY:true,
              click: true
          })
        })
      },
      // 点击左上角图标跳转首页
      GoPeachHome(){
        this.$router.replace('/peachhome')
      },
    
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.z-PeachPostage
  width 100%
  height 100% 
  background-color #f5f5f5
  
  .wrapper
    height 623px
  .header
    box-sizing border-box
    background  linear-gradient(to left,#FA4DBE 0,#FBAA58 100%); 
    width 100%
    height 44px
    position fixed
    z-index 9
    .headerContainer
      display flex
      justify-content space-between
      align-items center
      padding 10px 12px
  .Container
    .postageNav
      height 44px
      line-height 44px
      text-align center
      width 100%
      background-color #eee
      display flex
      ul
        display flex
        height 100%
        li
          height 100%
          width 40px

          &:nth-child(2n+1)
            background-color #aaa 
    .jingxuan
      .row1 
        border-bottom 1px solid #eee
        position relative
        .col1,.col2
          border-right 1px solid #eee
          .img1  
            width 183px
            height 105px
          .img2
            width 90px
            height 105px
        .text  
          position absolute
          font-size 16px
          padding 10px
          .top
            background-image: -webkit-gradient(linear, left 20, right 0, from(#FF1493), to( #FF1493))
            -webkit-background-clip: text
            -webkit-text-fill-color: transparent
            padding-bottom 5px
          .top1,.top2
            color #7250FD
            padding-bottom 5px
          .bottom
            color #888888
            font-size 12px
          .line
            height 12px
            background #f5f5f5 
        .showContainer
          .line2
            height 4px 
      

        

    
    
      
 
</style>
