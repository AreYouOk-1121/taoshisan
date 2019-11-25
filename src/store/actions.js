
import {
  SAVE_SHANGDIAN,
  SAVE_SHANGJIA,
  SAVE_SHANGTUIJIAN,
  SAVE_GOODS,
  SAVE_GETNAVS,
  SAVE_JINGXUAN,
  SAVE_ADDRESS,
  SAVE_CLASSIFY,
  SAVE_COLLECT,
  SAVE_HOME,
  SAVE_LOGIN,
  SAVE_PERSONAL,
  SAVE_POSTAGE,
  SAVE_BRANDS,
  SAVE_USER,
  SAVE_TOKEN
} from './mutations-type';

import { 
  getbrands, 
  getpeachCollect,
  reqShangDian,
  getGoods,
  getnavs,
  getby,
  getpeachlogin,
  autoLogin
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
        shangDian:result.data.data
      })
    }
  },
  async getShangJia({
    commit
  }) {
    let result = await reqShangDian('shangjia')
    console.log(result.data)
    if (result.code === 0) {
      commit(SAVE_SHANGJIA, {
        shangJia:result.data.data
      })
    }
  },
  async getTuiJia({
    commit
  }) {
    let result = await reqShangDian('tuijiayi')
    if (result.code === 0) {
      commit(SAVE_SHANGTUIJIAN, {
        tuiJia:result.data.data
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
 async getpeachCollectAction({
  commit
}) {
  let result = await getpeachCollect()
  if (result.code === 0) {
    commit(SAVE_COLLECT, {
      collect: result.data
    })
  }
},
async getBrandsAction({ commit }) {
  /* 发送请求,得到更多品牌数据 */
  let result = await getbrands()
  console.log(result)
  if (result.code === 0) {
    //调用commit,将数据给mutation
    commit(SAVE_BRANDS, { brands: result.brandsData })
  }
},

//分类
async getpeachClassifyAction({ commit }) {
  let result = await getpeachClassify()
  console.log(result)
  if (result.code === 0) {
    commit(SAVE_CLASSIFY, {
      classify: result.data
     

    })
  }

},
getUserAction({ commit }, { user }) {
  commit(SAVE_TOKEN, { token: user.token })
  delete user.token
  commit(SAVE_USER, { user })

},


async autoLoginAction({ commit }) {
  let result = await autoLogin()
  if (result.code === 0) {
    commit(SAVE_USER, {
      user: result.data
    })
    
  }


}


  
}
