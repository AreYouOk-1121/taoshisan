import {SAVE_BRANDS,SAVE_GOODS,SAVE_GETNAVS} from "./mutation-type";

import { getbrands,getGoods,getnavs} from "../api";
export default {
  async getBrandsAction({commit}){
    /* 发送请求,得到更多品牌数据 */
    let result = await getbrands()
    console.log(result)
    if(result.code === 0){
      //调用commit,将数据给mutation
      commit(SAVE_BRANDS,{brands:result.brandsData})
    }  
  },

  async getGoodsAction({commit}){
    /* 发送请求,得到商家详情 */
    let result = await getGoods()
    if(result.code === 0){
      //调用commit,将数据给mutation
      commit(SAVE_GOODS,{goods:result.goodsData})
    }  
  },

  async getNavsAction({commit}){
    /* 发送请求,得到导航详情 */
    let result = await getnavs()
    if(result.code === 0){
      //调用commit,将数据给mutation
      commit(SAVE_GETNAVS,{navs:result.navigationData})
    }  
  }

}