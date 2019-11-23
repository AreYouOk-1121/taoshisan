<template>
  <div id="wn-PeachCollect">
    <div class="CollectTitle">
      <div @click="goHome('/peachlogin')"><</div>
      <span>我的收藏</span>
      <div @click="isShowComelete = !isShowComelete">{{isShowComelete?'完成':'编辑'}}</div>
    </div>
    <div class="CollectCourrent">
      <ul class="CollectContent" >
        <li class="CollectItem" ref="li">
          <transition name="ItemTrans">
            <div class="ItemChild" v-if="isDeleteCollect">
              <div class="ItemLeft">
                <div class="ItemImage">
                  <img src="https://img.alicdn.com/imgextra/i3/2794538083/O1CN01zsUX7U29a3whvdszb_!!2794538083.jpg_310x310.jpg_.webp" alt="tu">
                </div>
                <div class="Itemcontent">
                  <span class="ItemName">
                    【拍3件】烟酰胺焕颜宫廷贵妇膏
                  </span>
                  <div class="ItemOther">
                    <span>劵后价<em>￥38</em></span>
                    <span>找相似</span>
                  </div>
                </div>
              </div>
              <div class="ItemDelete">
                删除
              </div>
            </div>
          </transition>
        </li>
        <li class="CollectItem">
          <transition name="ItemTrans">
            <div class="ItemChild">
              <div class="ItemLeft">
                <div class="ItemImage">
                  <img src="https://img.alicdn.com/imgextra/i3/2794538083/O1CN01zsUX7U29a3whvdszb_!!2794538083.jpg_310x310.jpg_.webp" alt="tu">
                </div>
                <div class="Itemcontent">
                  <span class="ItemName">
                    【拍3件】烟酰胺焕颜宫廷贵妇膏
                  </span>
                  <div class="ItemOther">
                    <span>劵后价<em>￥38</em></span>
                    <span>找相似</span>
                  </div>
                </div>
              </div>
              <div class="ItemDelete">
                删除
              </div>
            </div>
          </transition>
        </li>
        <li class="CollectCenter" v-show="false">
          <img src="https://img.alicdn.com/imgextra/i2/2204175008243/O1CN01OTr6Hk2AlLL6RgOtR_!!2204175008243.jpg_310x310.jpg_.webp" alt="无">
          <span>暂无收藏</span>
          <button>去首页逛逛吧</button>
        </li>
      </ul>
      <div class="CollectCall">
        <div>
            <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01arPhOl2JJhy5zM5nh_!!2053469401.png" alt="xin">
            <span>为你精选</span>
        </div>
      </div>
      <ul class="CollectOmnibus">
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
        <li class="CollectOmnibusItem">
          <img src="https://img.alicdn.com/imgextra/i1/678275524/O1CN01TCGiDZ1qg2RPCnOCV_!!678275524.jpg_310x310.jpg_.webp" alt="tu"/>
          <div class="tradeName">【拍】金圣莱绒</div>
          <div>劵后￥6.6</div>
          <div>
            <span>已售45万</span>
            <span>|</span>
            <span>评论0</span>
          </div>
        </li>
      </ul>
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
import datas from '../../../Peach_server/data/classification.json'
// import {getpeaCollect} from '../../../api'
import {mapState} from 'vuex'
  // 分类
  export default {
    name:"PeachCollect",
    data() {
      return {
        isShowComelete:false,
        isDeleteCollect:true
      }
    },
    methods: {
      goHome(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wn-PeachCollect
    width 100%
    height 1000px
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
      height 1000px
      overflow hidden
      .CollectContent
        .CollectItem
          padding 10px 0 0 10px
          background-color #fff
          height 136px
          display flex
          .ItemChild
            display flex
            .ItemDelete
              width 86px
              height 146px
              background-color #FC3F78
              margin-top -10px
              font-size 20px
              color #fff
              text-align center
              line-height 146px
            .ItemLeft
              display flex
              justify-content space-between
            .ItemImage
              img
                width 126px         
                height 126px 
            .Itemcontent      
              width 220px
              height 136px
              margin 0 9px 0 10px
              padding 0 0 10px 10px
              box-sizing border-box
              display flex
              flex-direction column
              justify-content space-between
              align-items center
              .ItemName
                font-size 16px
                font-weight 700
                line-height 1.2em
              .ItemOther
                width 100%
                display flex
                justify-content space-between
                font-size 14px 
                span:first-child
                  color #888
                  line-height 2.2em
                  em
                    font-size 16px              
                span:last-child
                  background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
                  width 35%
                  height 30px
                  color #fff
                  font-size 14px
                  line-height 30px
                  margin-right 4px
                  text-align center
                  border-radius 20px

        .CollectCenter
          display flex
          flex-direction column
          align-items center
          img
            margin-top 5px
            width 188px
            height 188px
            border-radius 50%
          span
            margin-top 14px
            font-size 16px
          button
            background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
            width 136px
            height 35px
            margin-top 14px
            border-radius 50px
            font-size 16px
            outline none 
            border none 
      .CollectCall
        width 100%
        height 50px
        box-sizing border-box
        padding 14px 0
        div
          text-align center
          img
            width 20px
            height 20px
            vertical-align:middle;
          span
            font-size 15px
      .CollectOmnibus
        display flex
        justify-content space-around
        flex-wrap wrap
        .CollectOmnibusItem
          width 180px
          height 180px
          background-color #fff
          display flex
          flex-direction column
          height 290px
          margin-bottom 4px
          img
            margin 0 auto
            width 180px
            height 180px
          div
            font-size 14px
            margin-left 9px
            &.tradeName
              margin 15px 0 30px 9px

        


  #wn-PeachCollect
    width 100%
    height 1000px
    background-color #eee
    .deleteCollect
      &.delete-enter-active,&.delete-leave-active
        transition all .4s cubic-bezier(1.0, 1.0, 1.0, 1.0)
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
      height 1000px
      overflow hidden
      .CollectItem
        height 334px
        .CollectCenter
          display flex
          flex-direction column
          align-items center
          img
            margin-top 5px
            width 188px
            height 188px
            border-radius 50%
          span
            margin-top 14px
            font-size 16px
          button
            background-image linear-gradient(to right, #FBA859 0, #FA4DBD 100%)
            width 136px
            height 35px
            margin-top 14px
            border-radius 50px
            font-size 16px
            outline none 
            border none 
      .CollectCall
        width 100%
        height 50px
        box-sizing border-box
        padding 14px 0
        div
          text-align center
          img
            width 20px
            height 20px
            vertical-align:middle;
          span
            font-size 15px
      .CollectOmnibus
        display flex
        justify-content space-around
        flex-wrap wrap
        .CollectOmnibusItem
          width 180px
          height 180px
          background-color #fff
          display flex
          flex-direction column
          height 290px
          margin-bottom 4px
          img
            margin 0 auto
            width 180px
            height 180px
          div
            font-size 14px
            margin-left 9px
            &.tradeName
              margin 15px 0 30px 9px

        


 
</style>
