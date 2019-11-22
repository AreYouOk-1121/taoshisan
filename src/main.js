import Vue from 'vue'

import App from './App.vue'
import 'lib-flexible/flexible';
import router from './router'

/* 按需引入elment Ui组件库 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
