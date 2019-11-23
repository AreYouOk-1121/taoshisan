import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import { Cell } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui';

import 'mint-ui/lib/style.css'


import App from './App.vue'
import 'lib-flexible/flexible';
import router from './router'


Vue.config.productionTip = false

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
  router
})










