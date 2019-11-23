import { SAVE_BRANDS,SAVE_GOODS,SAVE_GETNAVS } from "./mutation-type";

export default {
  [SAVE_BRANDS](state,{brands}){
    state.brands = brands
  },
  [SAVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [SAVE_GETNAVS](state,{navs}){
    state.navs = navs
  }

}