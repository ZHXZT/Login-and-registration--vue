import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/login/Login"
import Register from "@/components/register/Register"
import Homepage from "@/components/webpage/Homepage"
import Identification from "@/components/webpage/Identification"
import Detailpage from "@/components/webpage/Detailpage"


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Login',
      name: '主页',
      meta:{
        index:0,
      },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    },
  {
    path:'/Login',
    component: Login,
    name: 'Login',
    meta:{
      index:1,
    }
  },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
        index:2,
      },
    },

    
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage,
      meta:{
        index:3,
      },
    },
    {
      path: '/Identification',
      name:'Identification',
      component: Identification,
      meta:{
        index:5,
      },
    },
    {
      path: '/Detailpage',
      name:'Detailpage',
      component: Detailpage,
      meta:{
        index:6,
      },
    }





    // {
    //     path: '/Homepage',
    //     name: 'Homepage',
    //     component: Homepage,
    //     meta:{
    //       index:3,
    //     },
    //     children:[
    //       {
    //           path: '/Homepage/Identification',
    //           name:'Identification',
    //           component: Identification,
    //           meta:{
    //             index:5,
    //           },
    //           children:[
    //             {
    //               path: '/Homepage/Identification/Detailpage',
    //               name:'Detailpage',
    //               component: Detailpage,
    //               meta:{
    //                 index:6,
    //               },
    //             }
    //           ]
    //         },
    //     ]
    //   },
  ]

})