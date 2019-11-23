<template>
  <div id="wn-PeachDetails">
    <div class="CollectTitle">
      <div><</div>
      <span>商品</span>
      <span>推荐</span>
      <div>. . .</div>
    </div>
    <div>
      <img src="https://img.alicdn.com/imgextra/i2/2200827548914/O1CN01yRR0qc2Fif6CPM9jD_!!2200827548914.jpg_480x480.jpg" alt="大图">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 分类
  export default {
    name:"PeachDetails"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#wn-PeachDetails
  .CollectTitle
    background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
    width 100%
    height 45px
    background-color #eee
    display flex
    justify-content space-between
    line-height 45px
    text-align center
    color white
    div
      width 45px
      font-size 16px
      
    span
      font-size 17px
 
</style>
