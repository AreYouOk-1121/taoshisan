
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
  SAVE_SHANGTUIJIAN
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
  [SAVE_SHANGDIAN](state,{shangDian}){
    state.shangDian = shangDian
  },
  [SAVE_SHANGJIA](state,{shangJia}){
    state.shangJia = shangJia
  },
  [SAVE_SHANGTUIJIAN](state,{tuiJia}){
    state.tuiJia = tuiJia
  },
}
