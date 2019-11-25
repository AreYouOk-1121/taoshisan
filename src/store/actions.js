
import {
  SAVE_ADDRESS,
  SAVE_CLASSIFY,
  SAVE_COLLECT,
  SAVE_HOME,
  SAVE_LOGIN,
  SAVE_PERSONAL,
  SAVE_POSTAGE,
  SAVE_BRANDS,
  SAVE_JINGXUAN
} from './mutations-type';

import { getbrands, getpeachCollect,getby, } from "../api";

export default {
  async getpeachCollectAction({
    commit
  }) {
    let result = await getpeachCollect()
    if (result.code === 0) {
      commit(SAVE_COLLECT, {
        collect:result.data
      })
    }
  },
  async getBrandsAction({commit}){
    /* 发送请求,得到更多品牌数据 */
    let result = await getbrands()
    console.log(result)
    if(result.code === 0){
      //调用commit,将数据给mutation
      commit(SAVE_BRANDS,{brands:result.brandsData})
    }  
  },

  // 发请求 获取9.9包邮数据
  async getBYAction({commit}){
     let result = await getby()    //发请求获取到的数据
     console.log(result)
     if(result.code === 0){
      //  调用commit 把数据传给mutation
      commit(SAVE_POSTAGE,{byDatas:result.byDatas.data})     //此时返回来的bystats是个对象： 有两个数组对象；
     }
  },

 








}

