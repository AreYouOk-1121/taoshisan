<template>
  <div class="showTainerList">
    <!-- 头部 -->
      <div class="header">
        <p> < < 精选推荐 > > </p>
      </div>
      <!-- 列表 -->
      <div class="List">
        <!-- 每一项    item是数组中的每一个对象           -->
          <div class="ListItem" v-for="(item,index) in byDatas" :key="index" @click="TOGOXQ">
              <a>
                <img v-lazy="item.pic" alt="">
              </a>
              <div class="SKYCAT">
                  <span class="cat">{{item.p_labels.title}}</span></span>
                  <span class="haoping">113万好评！家用2/5卷100只垃圾袋</span>
              </div>
              <div class="YHQ">
                  <div class="QH">
                    <span class="QH1">券后</span>
                    <span class="MONEY">￥5.9</span>
                  </div>
                  <div class="YUAN">
                    <span class="QY">券3元</span>
                  </div>
                  <div class="YS">
                    <span class="YSL">已售1251.万  |  </span>
                    <span class="PJ">评价112.9万</span>
                  </div>
              </div>
          </div>
      
          
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
  export default {
    name:'Home',
    props:{
      index:{
        type:Number,
      }
    },
   
   
    computed: {
      ...mapState({
     
          byDatas: state => state.byDatas.homedata     // byDatas.homedata 取到homedata 的数组 
      })
    },

    methods: {
      TOGOXQ(){
        // this.$router.replace('/peachchdetails')   replace 不能回退 push 可以回退 
        console.log(123)
        this.$router.push('/peachdetails')
      }
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.showTainerList
  width 100%
  .header
    width 100%
    height 50px
    line-height 50px
    display flex
    justify-content center
    background #ffffff
    p                                    
      background-image: -webkit-gradient(linear,left 20,right 0,from(#873CFE),to(#FD295E));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size 15px 
      font-weight 400       
  .List
    width 100%
    height 100%
    display flex
    flex-wrap wrap
    background-color #f5f5f5
    .ListItem
      width 50%
      height 310px
      background #fff
     
      a 
        display block
        img   
          width 180px
          height 180px
          margin 0 auto
          display block
      .SKYCAT
        margin-top 6px
        display flex
        .cat
          background-color red
          color #fff
          height 13px 
          margin 0 5px
        .haoping
          white-space nowrap
          overflow hidden
          text-overflow:ellipsis
          width 130px
          height 13px
      .YHQ
        margin-top 22px
        margin-left 10px
        .QH
          margin 0 0 10px 0px
          .QH1
            color #fds
            margin-right 5px
          .MONEY
            color red 
            font-size 16px
        .YUAN
          margin 0 0 10px 0px
          .QY
            background-color red
            color #fff
        .YS 
          margin 0 0 10px 0px
          .YSL,.PJ
            color #fds

          




        

    
 
</style>
