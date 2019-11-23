import {SAVE_BRANDS} from "./mutation-type";

import { getbrands } from "../api";
export default {
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