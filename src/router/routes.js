
// 管理路由的模块

import PeachClassify from '../pages/PeachClassify/PeachClassify.vue';
import PeachCollect from '../pages/PeachCollect/PeachCollect.vue';
import PeachHome from '../pages/PeachHome/PeachHome.vue';
import PeachLogin from '../pages/PeachLogin/PeachLogin.vue';
import PeachPersonal from '../pages/PeachPersonal/PeachPersonal.vue';
import PeachPostage from '../pages/PeachPostage/PeachPostage.vue';

export default [
  {
    path:'/classify',
    component:PeachClassify
  },
  {
    path:'/collect',
    component:PeachCollect
  },
  {
    path:'/home',
    component:PeachHome
  },
  {
    path:'/login',
    component:PeachLogin
  },
  {
    path:'/personal',
    component:PeachPersonal
  },
  {
    path:'/postage',
    component:PeachPostage
  },
  {
    path:'/',
    redirect:'/home'
  },
]