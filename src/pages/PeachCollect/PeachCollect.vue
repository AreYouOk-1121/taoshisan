<template>
  <div id="main-title">
    <div class="title">
     <div class="ListItem" v-for="(items, index) in item" :key="index">
              <a>
                <img :src="item[0].Datas[0].Data[0].categoryItemData" alt="">
              </a>
              <div class="SKYCAT">
                  <span class="cat">{{item[0].Datas[0].Data[0].categoryItemName}}</span>
                  <span class="haoping">113万好评！家用2/5卷100只垃圾袋</span>
              </div>
              <div class="YHQ">
                  <div class="QH">
                    <span class="QH1">{{}}</span>
                    <span class="MONEY">￥5.9</span>
                  </div>
                  <div class="YUAN">
                    <span class="QY">券3元</span>
                  </div>
                  <div class="YS">
                    <span class="YSL">已售1251.万  |  </span>
                    <span class="PJ">评价112.9万</span>
                  </div>
              </div>
          </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import datas from '../../../data/classification.json'
// import {getpeaCollect} from '../../../api'
import {mapState} from 'vuex'
  // 分类
  export default {
    name:"PeachClassify",

    data() {
      return {
        item:[]
      }
    },

  async mounted() {
      // console.log(datas)
      // this.item = datas
      this.$store.dispatch("getpeachCollectAction");
      
    },

   



    computed: {
      ...mapState({
         collect:state => state.collect

      })

    },






  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#main-title
  width 100%
  height 100%
  .title
    width 375px
    height 600px
   
    .ListItem
      width 500px
      height 170px
      img
        width 100px
        height 100px
      .SKYCAT
        width 250px
        height 20px




  
   

        



  




 
</style>
