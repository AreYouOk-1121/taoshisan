import { SAVE_BRANDS,SAVE_GOODS,SAVE_GESHOPCOLLECTS, SAVE_GETNAVS} from "./mutations-type";

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
  }

}
