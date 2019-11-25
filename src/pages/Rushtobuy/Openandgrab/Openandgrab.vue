<template>
<section id="list-nav">
  <div class="ListItem" v-for="(item,index) in 2" :key="index">
              <a>
                <img src="https://img.alicdn.com/imgextra/i2/3927942803/O1CN01DxYrAF1WZoilUHION_!!3927942803.jpg_310x310.jpg_.webp" alt="">
              </a>
              <div class="SKYCAT">
                  <span class="cat">天猫</span>
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
  
          </section>
</template>




<script>
export default {



}
</script>




<style lang="stylus">
#list-nav
  display flex
  width 375px
  .ListItem
      width 50%
      height 280px
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
        margin-top 10px
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