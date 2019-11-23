import Vue from 'vue'

import App from './App.vue'
import 'lib-flexible/flexible';
import router from './router'
import './veevalidare'
import * as API from '../api'

import store from './store'
Vue.prototype.$API = API



Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store,
})
