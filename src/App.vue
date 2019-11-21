<template>
  <div class="baseContainer">
    <router-view />
    <PeachFooter/>
  </div>
</template>

<script type="text/ecmascript-6">
  import PeachFooter from './components/PeachFooter/PeachFooter'
  export default {
    name:"app",
    components: {PeachFooter}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.baseContainer
  width 100%
  height 100%
 
</style>
