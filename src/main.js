import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import { Cell } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui';

import 'mint-ui/lib/style.css'


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
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

Vue.use(InfiniteScroll);


new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store,
})










