<template>
  <div class="brandClass">
    <div v-for="(item,index) in ClassImgs[index1].categoryClassData" :key="index">
      <h4>{{item.subclassName}}</h4>
      <ul class="ul">
        <li
          v-for="(dataLi, index) in item.subclassData"
          :key="index"
          class="brandClassItem"
          style="height:100px"
        >
          <img :src="dataLi.categoryItemData" alt />
          <p class="brandName">{{dataLi.categoryItemName}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import ClassImgs from "../classImgs.json";
import ClassImgs from '../datas/classImg初代.json'

export default {
  name: "SubClass",
  data() {
    return {
      ClassImgs: {}
    };
  },
  created() {
    this.ClassImgs = ClassImgs;
    this.index1=1
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.brandClass 
  display: flex;
  flex-direction column
  flex-wrap: wrap;
  width: 306px;
  h4 
    height 46px
    line-height 46px
  ul
    display flex
    flex-wrap: wrap;

    .brandClassItem {
      display: flex;
      flex-direction: column;
      width: 101px;
      height: 106px;
      text-align: center;
      padding  0 0 20px
    }
    img {
      width: 61px;
      height: 61px;
      padding-left: 20px;
    }

</style>
