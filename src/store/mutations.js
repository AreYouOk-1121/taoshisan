import { SAVE_BRANDS } from "./mutation-type";

export default {
  [SAVE_BRANDS](state,{brands}){
    state.brands = brands
  }
}