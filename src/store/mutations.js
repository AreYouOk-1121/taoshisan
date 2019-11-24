
import {
  SAVE_ADDRESS,
  SAVE_CLASSIFY,
  SAVE_COLLECT,
  SAVE_HOME,
  SAVE_LOGIN,
  SAVE_PERSONAL,
  SAVE_POSTAGE,
  SAVE_BRANDS,
  SAVE_USER,
  SAVE_TOKEN
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

  [SAVE_CLASSIFY](state,{
    classify
  }) {
    state.classify = classify
  },

  [SAVE_USER](state, {
    user
  }) {
    state.user = user
  },
  [SAVE_TOKEN](state, {
    token
  }) {
    
    localStorage.setItem('token_key', token)
    state.token = token
  }
  
}
