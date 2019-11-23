
import {
  SAVE_ADDRESS,
  SAVE_CLASSIFY,
  SAVE_COLLECT,
  SAVE_HOME,
  SAVE_LOGIN,
  SAVE_PERSONAL,
  SAVE_POSTAGE,
  SAVE_BRANDS
} from './mutations-type'
export default {
  [SAVE_COLLECT](state,{
    collect
  }) {
    state.collect = collect
  },
  [SAVE_BRANDS](state,{brands}){
    state.brands = brands
  }
}
