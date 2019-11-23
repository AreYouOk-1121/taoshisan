
// 管理路由的模块

import PeachClassify from '../pages/PeachClassify/PeachClassify.vue';
import PeachCollect from '../pages/PeachCollect/PeachCollect.vue';
import PeachHome from '../pages/PeachHome/PeachHome.vue';
import PeachLogin from '../pages/PeachLogin/PeachLogin.vue';
import PeachPersonal from '../pages/PeachPersonal/PeachPersonal.vue';
import PeachPostage from '../pages/PeachPostage/PeachPostage.vue';
import PeachDetails from '../pages/PeachDetails/PeachDetails.vue';
import HomeShops from "../pages/homeShops/homeShops.vue";
import HomeMoreBrand from "../pages/HomeMoreBrand/HomeMoreBrand.vue";
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
  },

  {
    path:'/peachdetails',
    component:PeachDetails
  },
  {
    path:'/homeshops',
    component:HomeShops
  },
  {
    path:'/homemorebrand',
    component:HomeMoreBrand
  },
  {
    path:'/peachdetails',
    component:PeachDetails
  },
  {
    path:'/',
    redirect:'/peachhome'
  },
]