
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
  SAVE_GESHOPCOLLECTS, 
  SAVE_GETNAVS,
  SAVE_SHOPCOLLECT
} from './mutations-type'

export default {
  [SAVE_BRANDS](state,{brands}){
    state.brands = brands
  },
  [SAVE_GOODS](state,{goods}){
    state.goods = goods
    sessionStorage.setItem('goods',JSON.stringify(goods))
  },
  [SAVE_GETNAVS](state,{navs}){
    state.navs = navs
  },
  //同步修改ShopCollects收藏夹状态
  [SAVE_GESHOPCOLLECTS](state,{ShopCollects}){
    state.ShopCollects = ShopCollects
  },
  [SAVE_COLLECT](state,{
    collect
  }) {
    state.collect = collect
  },
  [SAVE_BRANDS](state,{brands}){
    state.brands = brands
  },
  [SAVE_SHANGDIAN](state,{shangDian}){
    state.shangDian = shangDian
  },
  [SAVE_SHANGJIA](state,{shangJia}){
    state.shangJia = shangJia
  },
  [SAVE_SHANGTUIJIAN](state,{tuiJia}){
    state.tuiJia = tuiJia
  },
   // mutations 是个对象，直接更新状态数据的对象：参数1 state ,参数2 要传的数据(也就是初始话数据)/ 传多个数据的对象
   [SAVE_POSTAGE](state,{ byDatas}){
    state.byDatas = byDatas
  }
}
