
import {
  SAVE_ADDRESS,
  SAVE_CLASSIFY,
  SAVE_COLLECT,
  SAVE_HOME,
  SAVE_LOGIN,
  SAVE_PERSONAL,
  SAVE_POSTAGE,
  SAVE_BRANDS,
  SAVE_SHANGDIAN,
  SAVE_SHANGJIA,
  SAVE_SHANGTUIJIAN,
  SAVE_GOODS,
  SAVE_GETNAVS
} from './mutations-type';

import { 
  getbrands, 
  getpeachCollect,
  reqShangDian,
  getGoods,
  getnavs
} from "../api";

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
  },

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
  async getShangDian({
    commit
  }) {
    let result = await reqShangDian('shangdian')
    if (result.code === 0) {
      commit(SAVE_SHANGDIAN, {
        shangDian:result.data
      })
    }
  },
  async getShangJia({
    commit
  }) {
    let result = await reqShangDian('shangjia')
    if (result.code === 0) {
      commit(SAVE_SHANGJIA, {
        shangJia:result.data
      })
    }
  },
  async getTuiJia({
    commit
  }) {
    let result = await reqShangDian('tuijiayi')
    if (result.code === 0) {
      commit(SAVE_SHANGTUIJIAN, {
        tuiJia:result.data
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
  }
}
