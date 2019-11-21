<template>
  <div class="baceContainer">
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
.baceContainer
  height 100%
 
</style>
