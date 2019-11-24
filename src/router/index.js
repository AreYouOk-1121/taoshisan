import Vue from 'vue';
import VueRouter from 'vue-router'

import routes from './routes'

// 声明使用路由器
Vue.use(VueRouter);

// 生成路由器管理路由
const router = new VueRouter({
  mode:'history',
  routes
})

export default router