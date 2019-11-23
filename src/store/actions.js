import {
  SAVE_ADDRESS,
  SAVE_CLASSIFY,
  SAVE_COLLECT,
  SAVE_HOME,
  SAVE_LOGIN,
  SAVE_PERSONAL,
  SAVE_POSTAGE
} from './mutations-type'
import {
  getpeachCollect
} from '../../api'


export default {
  async getpeachCollectAction({
commit
  }) {
    let result = await getpeachCollect()
    if (result.code === 0) {
      commit(SAVE_COLLECT, {
        collect:result.data
      })
    }
  }
  

}