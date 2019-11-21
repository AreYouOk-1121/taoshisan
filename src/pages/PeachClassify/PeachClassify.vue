<template>
  <div class="classProduce">
    <div class="classHeader">
      <span class="backwards"> < </span>
      <input class="search" type="text" placeholder="        输入商品名或粘贴宝贝标题搜索">
      <div class="searchIcon">
        <svg t="1574329713586" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4621" width="24" height="24"><path d="M845.31681 804.279033 669.806116 628.768339c39.298021-47.792125 60.686788-107.250849 60.686788-169.984409 0-71.637018-27.938437-138.975815-78.493704-189.63342-50.657605-50.657605-117.996402-78.493704-189.63342-78.493704s-138.975815 27.938437-189.63342 78.493704c-50.657605 50.657605-78.493704 117.996402-78.493704 189.63342s27.938437 138.975815 78.493704 189.63342c50.657605 50.657605 117.996402 78.493704 189.63342 78.493704 65.394363 0 127.206876-23.230861 176.022387-65.906056l174.999001 174.999001c4.40056 4.40056 10.131521 6.54967 15.964821 6.54967s11.564261-2.149111 15.964821-6.54967C854.117929 827.305217 854.117929 813.080152 845.31681 804.279033zM239.267639 458.78393c0-123.010993 100.087148-223.098141 223.098141-223.098141s223.098141 100.087148 223.098141 223.098141-100.087148 223.098141-223.098141 223.098141S239.267639 581.794923 239.267639 458.78393z" p-id="4622" fill="#bfbfbf"></path></svg>
      </div>
    </div>
    <div class="nav">
      <div class="nav-left">
        <ul>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>
          <li>为你推荐</li>

        </ul>
      </div>
      <div class="nav-right">right</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 分类
  export default {
    name:"PeachClassify"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.classProduce
  width 100%
  height 100%
  .classHeader
    background-image linear-gradient(to right,#FBAA58 0,#FA4DBE 100%)
    width 100%
    height 28px
    position fixed
    z-index 9
    line-height 44px
    text-align center
    display flex
    padding 8px 10px
    .backwards
      width 28px
      height 28px
      line-height 28px
      color white
      font-size 24px
    .search
      width 325px
      height 28px
      line-height 28px
      border-radius 5px
      color #333
    .searchIcon
      position fixed
      left 38px
  .nav
    background pink
    width 100%
    height calc(100% - 44px)
    display flex
    .nav-left
      width 4.8em
      background red 
      height 100%
    .nav-right
      width 100%
      height 100%


</style>
