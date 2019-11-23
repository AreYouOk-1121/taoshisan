import Vue from 'vue'

import App from './App.vue'
import 'lib-flexible/flexible';
import router from './router'

Vue.config.productionTip = false

import { Button } from 'vant'
import { Tab, Tabs } from 'vant';
import { Row, Col } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(Row).use(Col)






new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})
