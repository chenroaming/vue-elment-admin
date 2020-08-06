import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
// import login from '@/views/login/index'
Vue.use(VueRouter)
const mainHome = () => import('@/views/main')
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
    path: '/404',
    component: () => import('@/views/404')
  }
]

export const asyncRouterMap = [
  {
    path: '/menu1',
    name: 'menu1',
    redirect: '/menu1/index',
    component: mainHome,
    children: [
      {
        path: 'index',
        component: () => import('@/views/menu1'), // Parent router-view
        name: 'screen-manger'
      }
    ]
  },
  {
    path: '/menu2',
    name: 'menu2',
    redirect: '/menu2/index',
    component: mainHome,
    children: [
      {
        path: 'index',
        component: () => import('@/views/menu2'), // Parent router-view
        name: 'screen-manger'
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  routes: constantRouterMap
})

export default router
