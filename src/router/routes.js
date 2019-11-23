
// 管理路由的模块

import PeachClassify from '../pages/PeachClassify/PeachClassify.vue';
import PeachCollect from '../pages/PeachCollect/PeachCollect.vue';
import PeachHome from '../pages/PeachHome/PeachHome.vue';
import PeachLogin from '../pages/PeachLogin/PeachLogin.vue';
import PeachPersonal from '../pages/PeachPersonal/PeachPersonal.vue';
import PeachPostage from '../pages/PeachPostage/PeachPostage.vue';
import PeachSet from '../pages/PeachSet/PeachSet.vue'

export default [
  {
    path:'/Peachclassify',
    component:PeachClassify
  },
  {
    path:'/Peachcollect',
    component:PeachCollect
  },
  {
    path:'/Peachhome',
    component:PeachHome
  },
  {
    path:'/Peachlogin',
    component:PeachLogin
  },
  {
    path:'/Peachpersonal',
    component: PeachPersonal,
    
  },

  {
    path:'/Peachpostage',
    component:PeachPostage
  },
  
  
  {
    path:'/',
    redirect:'/home'
  },
]