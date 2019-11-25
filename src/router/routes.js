
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
import Reshtobuy from '../pages/Rushtobuy/Rushtobuy.vue'

export default [
  {
    path:'/peachclassify',
    component: PeachClassify,
    meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
      isShowFooterGuide: true
  }
  },
  {
    path:'/peachcollect',
    component:PeachCollect,
    meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
      isShowFooterGuide: true
  }
  },
  {
    path:'/peachhome',
    component: PeachHome,
    meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
      isShowFooterGuide: true
  }
   
  },
  {
    path:'/peachlogin',
    component: PeachLogin,
   
  },
  {
    path:'/peachpersonal',
    component: PeachPersonal,
    meta: { // 传多个键值对，隐式传参，缺点： 不能动态传参
      isShowFooterGuide: true
  }
   
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
    path:'/peachreshtobuy',
    component:Reshtobuy
  },

  {
    path:'/',
    redirect:'/peachhome'
  },
]