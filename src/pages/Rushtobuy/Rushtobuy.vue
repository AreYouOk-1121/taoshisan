<template>
  <div id="content-body">
      <header class="header-top">
          <span><</span>
             <a>咚咚抢</a>
              <span>:</span>
      </header>
      <div class="content-top">
          <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01iGGS0k2JJhtBDpTGy-2053469401.jpg?v=20191021516399">
        <div class="conent-Nav">
          <ul class="ulTop">
            <li v-for="(arr,index) in Arr" :key="index" :class="{active:index === indexNew}" @click="goBottom(index)">
              {{arr}}
            </li>
          </ul>
       </div>
       
      <div class="content-shop">
        
        <ul class="ulBotttom">
          <li v-if="indexNew === index" v-for="(Arr,index) in Arrconent " :key="index">{{Arr}}</li>
        </ul>
        <!-- <ul class="ulBotttom" style="height:10px;background-color:#aaa;display:flex;">
          <li v-if="indexNew === index" v-for="(arr, index) in Arrconent" :key="index" style="height:66px;font-size:25px;padding: 0 5px">{{arr}}</li>
        </ul> -->

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

 
  let items = ['08:00已开抢','9:00已开抢','12:00已开抢','01:23即将开抢','05:02正在开抢','08:30即将开抢']
  let Arrconent = ['已开抢','已开抢','已开抢','即将开抢','正在开抢','即将开抢']

  export default {
    data() {
      return {
      //  active: 2,
       indexNew:0,
       Arr:[],
       Arrconent:[]
      }
    },
    mounted() {
      this.Arr = items;
      this.Arrconent = Arrconent
    },
    methods: {
      goBottom(index){
        let 
        this.indexNew  = index
        console.log(this.indexNew)
      }
      
    },  

    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#content-body
  width 100%
  height 100%
  background pink
  .header-top
    display flex
    justify-content:space-between
    width 375px
    height 44px
    background red
    line-height 44px
    a
      font-size 5px
  .content-top
    position relative
    width 375px
    height 200px
    img 
      width 375px
      height 200px
    .conent-Nav
      position absolute
      top 150px
      .ulTop
        display flex
        justify-content:space-between
        li
          margin 0px 10px 0px 10px
          width 40px
          height 49px
          &.active{
            background $green
          }          

        

  .content-shop
    height 30px
    .ulBotttom
      display flex



        
        


  
     
      
    
            
    
    
   
      
    

     
 



 
</style>
