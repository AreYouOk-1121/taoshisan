
import {
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
  getpeachCollect, getpeachClassify, getpeachlogin, autoLogin} from "../api";

export default {
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