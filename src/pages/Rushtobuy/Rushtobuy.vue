<template>
  <div id="content-body">
      <header class="header-top">
        <i class="iconfont iconfanhui"></i>
             <a>咚咚抢</a>
              <i class="iconfont iconfenleishouye"></i>
      </header>
      <div class="content-top">
          <img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01iGGS0k2JJhtBDpTGy-2053469401.jpg?v=20191021516399">
        <div class="tab">
            <div class="tab-left">
                  <router-link to="/peachreshtobuy/Abouttorush"><a>开抢</a></router-link>
            </div>
            <div class="tab-Central">
                  <router-link to="/peachreshtobuy/Openandgrab"><a>开抢</a></router-link>
            </div>
            <div class="tab-right">
                  <router-link to="/peachreshtobuy/Openrobbing"><a>开抢</a></router-link>
            </div>
    </div>
  <router-view></router-view>  
  </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
      
      }
    },
    mounted() {
     
    },
    methods: {
      goBottom(index){
      
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
    i 
      font-size 30px 
    a
      font-size 20px
      font-weight bold  
      color black
  .content-top
    position relative
    width 375px
    height 200px
    img 
      width 375px
      height 200px
    .tab
      position absolute
      top 140px
      display flex
      justify-content:space-around
      .tab-left
        width 50px
        height 50px
        background red
        font-size 20px
        margin 0px 40px 0px 40px
        a
          color black
          font-weight bold
      .tab-Central
        width 50px
        height 50px
        background red
        margin 0px 40px 0px 40px
        font-size 20px
        a
          color black
          font-weight bold
      .tab-right
        width 50px
        height 50px
        background red
        margin 0px 20px 0px 40px
        font-size 20px
        a
          color black
          font-weight bold



    
   
      
    

     
 



 
</style>
