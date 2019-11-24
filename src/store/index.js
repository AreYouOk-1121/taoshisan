/* vuex最核心的管理数据对象 */
import Vue from "vue"
import Vuex from "vuex";
Vue.use(Vuex)//声明使用Vuex插件

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
//向外暴露一个store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
