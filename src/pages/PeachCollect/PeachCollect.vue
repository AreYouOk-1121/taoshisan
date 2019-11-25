<template>
  <div id="wn-PeachCollect">
    <div class="CollectTitle">
      <div @click="goHome('/peachlogin')"><</div>
      <span @click="gohan">我的收藏</span>
      <div @click="isShowComelete = !isShowComelete">{{isShowComelete?'完成':'编辑'}}</div>
    </div>
    <div class="CollectCourrent" ref="ShouCang">
      <div>
        <!-- 收藏列表 -->
        <ShouLieBiao :shouCangBiao="shangDian"/>
        <!-- 精选 -->
        <JingXuan :jingXuanBiao="tuiJia"/>
      </div>
    </div>
    <transition name="delete">
      <div class="deleteCollect"  v-show="isShowComelete">
        <span>
          全选0
        </span>
        <div>删除</div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
// import datas from '../../../Peach_server/data/classification.json'
  import JingXuan from '../../components/JingXuan/JingXuan'
  import ShouLieBiao from '../../components/ShouLieBiao/ShouLieBiao'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

// import {getpeaCollect} from '../../../api'
  // 分类
  export default {
    name:"PeachCollect",
    components:{
      JingXuan,
      ShouLieBiao
    },
    computed: {
      ...mapState({
        shangDian: state => state.shangDian,
        tuiJia: state => state.tuiJia,
      })
    },
    mounted() {
      this.$store.dispatch('getShangDian')
      this.$store.dispatch('getTuiJia')

    },
    data() {
      return {
        isShowComelete:false,
      }
    },
    methods: {
      async gohan(){
        // this.$store.dispatch('getShangDian')
        let results =  await this.$API.reqShangDian("shangdian")
        // let results =  await this.$API.reqTest()
        console.log(results)
      },
      goHome(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    },
    watch: {
      tuiJia(){
        this.$nextTick(()=>{
          this.tuiScroll = new BScroll(this.$refs.ShouCang,{
            scrollY:true
          })
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wn-PeachCollect
    width 100%
    height 100%
    background-color #eee
    .deleteCollect
      &.delete-enter-active,&.delete-leave-active
        transition all .4s linear 
      &.delete-enter,&.delete-leave-to
        transform: translateY(50px);
        opacity: 0.9;
      width 100%
      height 50px
      line-height 50px
      display flex
      justify-content space-between
      position fixed
      left 0
      bottom 0
      z-index 99
      background-color #ffffff
      div
        width 127px
        height 100%
        color #ffffff
        background-color #FC3F78
        text-align center
        font-size 16px
      span
        font-size 14px
        margin-left 20px
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
    .CollectCourrent
      height calc(100vh - 95px)
      overflow hidden

      
 
</style>
