import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/apiList' // 引入api列表文件
import '@/router/router' // 导航守卫
process.env.NODE_ENV === 'development' && require('./mock/index.js') // 虚拟接口请求，开发时可用
Vue.prototype.$api = api // 修改原型链方法全局引入$api
Vue.use(ElementUI)

Vue.config.productionTip = false
console.log('written by roaming')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
