import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import { Cell } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui';

import 'mint-ui/lib/style.css'

Vue.prototype.$EventBus = new Vue()//在Vue原型上定义全局事件总线方法
import VueLazyload from "vue-lazyload";//图片懒加载
import App from './App.vue'
import 'lib-flexible/flexible';
import router from './router'
import './veevalidare'
import * as API from './api'
Vue.prototype.$API = API
import store from "./store";
import loading from "./assets/1.jpg";//引入要本地要加载的懒加载图片


/* 按需引入elment Ui组件库 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
import { Tab, Tabs,Row, Col } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(Row).use(Col)


Vue.config.productionTip = false

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

Vue.use(InfiniteScroll);
Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading
})


new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})










