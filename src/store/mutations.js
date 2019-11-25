
import {
  SAVE_ADDRESS,
  SAVE_CLASSIFY,
  SAVE_COLLECT,
  SAVE_LOGIN,
  SAVE_PERSONAL,
  SAVE_POSTAGE,
  SAVE_BRANDS,
} from './mutations-type'
export default {
  [SAVE_COLLECT](state,{
    collect
  }) {
    state.collect = collect
  },
  [SAVE_BRANDS](state,{brands}){
    state.brands = brands
  },
  // mutations 是个对象，直接更新状态数据的对象：参数1 state ,参数2 要传的数据(也就是初始话数据)/ 传多个数据的对象
  [SAVE_POSTAGE](state,{
    byDatas         
  }){
    state.byDatas = byDatas
  }
}
  
