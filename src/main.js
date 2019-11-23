import Vue from 'vue'

import App from './App.vue'
import 'lib-flexible/flexible';
import router from './router'
import './veevalidare'
import * as API from './api'
Vue.prototype.$API = API
import store from "./store";

/* 按需引入elment Ui组件库 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store,
})
