// store对象：把状态全部引入
import Vue from "vue"
import Vuex from "vuex"


import {state} from "./state/state"
import {mutations} from "./mutations/mutations"
import { actions } from "./actions/actions"
import { getter } from "./getter/getter"

Vue.use(Vuex)

// 创建store 对象并向外暴露
export default new Vuesx.Store({
    state,
    mutations,
    actions,
    getters
})