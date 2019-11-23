
// 管理路由的模块

import PeachClassify from '../pages/PeachClassify/PeachClassify.vue';
import PeachCollect from '../pages/PeachCollect/PeachCollect.vue';
import PeachHome from '../pages/PeachHome/PeachHome.vue';
import PeachLogin from '../pages/PeachLogin/PeachLogin.vue';
import PeachPersonal from '../pages/PeachPersonal/PeachPersonal.vue';
import PeachPostage from '../pages/PeachPostage/PeachPostage.vue';
import Home from "../pages/PeachPostage/Home/Home.vue";
import Jingxuan from "../pages/PeachPostage/Jingxuan/Jingxuan.vue";

export default [
  {
    path:'/peachclassify',
    component:PeachClassify
  },
  {
    path:'/peachcollect',
    component:PeachCollect
  },
  {
    path:'/peachhome',
    component:PeachHome
  },
  {
    path:'/peachlogin',
    component:PeachLogin
  },
  {
    path:'/peachpersonal',
    component:PeachPersonal
  },
  {
    path:'/peachpostage',
<<<<<<< HEAD
    component:PeachPostage,
    children: [
      {
        path: '/peachpostage/home',
        component:Home
      },
      {
        path: '/peachpostage/jingxuan',
        component:Jingxuan
      }
    ]
=======
    component:PeachPostage
>>>>>>> master
  },

  {
    path:'/',
    redirect:'/peachhome'
  },
]