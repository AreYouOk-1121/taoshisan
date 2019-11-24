<template>
  <div class="swiper-container">
    <ul class="swiper-wrapper">
      <li v-for="item in 5" class="swiper-slide">
        <img :src="bigImage" alt="tu">
      </li>
    </ul>
     <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    name:"BigImage",
    data() {
      return {
        ImageData:[]
      }
    },
    props:{
      bigImage:{
        type:String
      }
    },
    watch: {
      bigImage(){
        this.$nextTick(()=>{
          var mySwiper = new Swiper ('.swiper-container', {
            loop:{
              loop:true,
              loopAdditionalSlides:1
            } ,
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-container
  display flex
  width 100%
  overflow hidden
  .swiper-wrapper
    display flex
    li
      img
        width 100vw
        height 375px

</style>
