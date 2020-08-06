import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
// import login from '@/views/login/index'
Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/MainHome',
    name: 'mainHome',
    component: () => import('@/views/main')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  routes: constantRouterMap
})

export default router
