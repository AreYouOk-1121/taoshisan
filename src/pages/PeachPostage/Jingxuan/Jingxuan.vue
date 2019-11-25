<template>
 <div class="JXContainer">
   <!-- 遍历 -->
    <div>
      <span class="title"> || 近一小时疯抢 || </span>
      <div class="wrapper" ref="wrapperUl">
        <ul class="content">
          <!-- items是返回的总数据 -->
          <li class="list"  v-for="(item,index) in items" :key="index" >
            <img :src="item.pic" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">【形象美】商场同款眼霜</span>
            <span class="Money">$ 8.9</span>
          </li>
        </ul>
        
      </div>
    </div> 
    <div>
      <span class="title"> || 近一小时疯抢 || </span>
      <div class="wrapper" ref="wrapperUl2">
        <ul class="content">
          <!-- items是返回的总数据  v-for="(items,index) in item" :key="index"-->
          <li class="list">
            <img src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">【形象美】商场同款眼霜</span>
            <span class="Money">$ 8.9</span>
          </li>
           <li class="list">
            <img src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">【形象美】商场同款眼霜</span>
            <span class="Money">$ 8.9</span>
          </li>
           <li class="list">
            <img src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">【形象美】商场同款眼霜</span>
            <span class="Money">$ 8.9</span>
          </li>
           <li class="list">
            <img src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">【形象美】商场同款眼霜</span>
            <span class="Money">$ 8.9</span>
          </li>
           <li class="list">
            <img src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">【形象美】商场同款眼霜</span>
            <span class="Money">$ 8.9</span>
          </li>
           <li class="list">
            <img src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">【形象美】商场同款眼霜</span>
            <span class="Money">$ 8.9</span>
          </li>
        </ul>
      </div>
    </div> 
</div>
</template>

<script type="text/ecmascript-6">
import datas from "../../../../Peach_server/data/home.json";
import BScroll from 'better-scroll'
  export default {
    name:"Jingxuan",
    data() {
      return {
        items:[],
       
       
      }
    },
    
    
    mounted() {
      this.goRscroll()
      this.goRscroll2()
      this.items = datas.data.data
  
    
     
      
    },
    methods: {
      goRscroll(){
        this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.wrapperUl,{
            scrollX:true
          })
        })
      },
       goRscroll2(){
        this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.wrapperUl2,{
            scrollX:true
          })
        })
      },
      
    },
  
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.JXContainer
  width 100%
  height 100%
  .title
    display block
    text-align center
    font-size 16px
    font-weight 700
    width 100%
    height 40px
    line-height 40px
    color #FC436D
  .wrapper
    width 100%
    background #ffffff
    display flex
    overflow hidden
    .content
      height 166px
      display flex
      flex-wrap nowrap 
      border-bottom  1px solid #ffeeff
      .list
        width 110px
        height 160px
        padding 0 10px
        img 
          width 100px
          height 100px
        .FQ
          display block
          width 100px
          text-align center
          font-weight 700
          font-size 10px
          background-color #FFF3F3
          border 1px solid #ffbdbf
        .Green
          display block
          font-size 11px 
          margin 6px 0
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .Money
          width 100px
          font-size 14px
          display block 
          color red 
          font-weight 700
 
</style>
