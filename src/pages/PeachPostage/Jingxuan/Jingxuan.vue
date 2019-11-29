<template>
  

 <div class="JXContainer">
   <!-- 遍历box  v-for="(box,index) in boxdatas" :key="index"  -->
    <div class="box">
      <span class="title"> || 近一小时抢购 || </span>
      <div class="wrapper" ref="wrapperUl1">
        <ul class="content">
          <!-- items是返回的总数据 -->
          <li class="list" @click="goPeachDetails" v-for="(item,index) in byDatas">
            <img :src="item.pic" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">{{item.dtitle}}</span>
            <span class="Money">${{item.yuanjia}}</span>
          </li>
        </ul>
   
   
      </div>
      
      <div class="wrapper" ref="wrapperUl2">
        <ul class="content">
          <li class="list" v-for="(item,index) in byDatas">
            <img :src="item.pic" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">{{item.dtitle}}</span>
            <span class="Money">${{item.yuanjia}}</span>
          </li>
        </ul>
      </div>
      
      <div class="wrapper" ref="wrapperUl3">
        <ul class="content">
          <li class="list" v-for="(item,index) in byDatas">
            <img :src="item.pic" alt="">
            <span class="FQ">疯抢6216种</span>
            <span class="Green">{{item.dtitle}}</span>
            <span class="Money">${{item.yuanjia}}</span>
          </li>
        </ul>
      </div>

    </div> 
</div>

</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapState } from "vuex"
  export default {
    name:"Jingxuan",
    data() {
      return {
         imageList: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg'
         ]
      }
    },
    methods: {
      goRscroll(){
        this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.wrapperUl1,{
            scrollX:true
          }),
          this.scroll = new BScroll(this.$refs.wrapperUl2,{
            scrollX:true
          }),
          this.scroll = new BScroll(this.$refs.wrapperUl3,{
            scrollX:true
          })
        })
      },
      goPeachDetails(){ //跳转详情页,通过query传参,params要提要:id站位    
        this.$router.push({
          path:'/peachdetails',
          query:{
            id:23502561
          }
        })
      }  
    },

    
    mounted() {
      this.goRscroll()
   
       this.$route.query.index
       console.log(this)
    },
    computed: {
      ...mapState({   //mapstate 是vuex的语法， 可以将返回的总数据进行解构，这样做的好处就是不能直接修改原数据；
        // =》 后面的 bydatas 是包含两个数组的对象， 因为现在要用jxdata,所以从bydatas.jxdata 获取到jxdata 的值赋值给了bydats

           byDatas: state => state.byDatas.jxdata 
      })
    }
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
    height 100%
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
          color red
        .Green
          display block
          font-size 11px 
          margin 6px 0
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          font-weight 400
        .Money
          width 100px
          font-size 14px
          display block 
          color red 
          font-weight 700
 
</style>
