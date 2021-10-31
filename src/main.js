import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://adl.seafishery.com/' 



Vue.use(ElementUI)

Vue.prototype.openLoading = function() {
  const loading = this.$loading({           // 声明一个loading对象
    lock: true,                             // 是否锁屏
    text: '正在识别...',                     // 加载动画的文字
    spinner: 'el-icon-loading',             // 引入的loading图标
    background: 'rgba(0, 0, 0, 0.7)',       // 背景颜色
    target: '.sub-main',                    // 需要遮罩的区域
    body: true,                              
    customClass: 'mask'                     // 遮罩层新增类名
  })
  setTimeout(function () {                  // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
    loading.close();                        // 关闭遮罩层
  },10000)
  return loading;
}
Vue.prototype.closeLoading = function() {
  const loading = this.$loading({  })
  loading.close(); 
  return loading;

}


router.beforeEach((to, from, next) => { // 路由守卫
  // console.log(store.state, 'store.state')
  // 用户信息为空跳login页
  if (store.state.userInfo || to.path === '/login') {
    next()
  }
  if (store.state.userInfo || to.path === '/Register'){
    next()
  }
  else {
    next({
      path: '/login'
    })
  }
})


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

