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
    path: '/mainHome',
    name: 'mainHome',
    meta: {
      title: '主菜单',
      icon: 'el-icon-s-home',
      roles: ['admin']
    },
    redirect: '/mainHome/index',
    isCollapse: false,
    component: mainHome,
    children: [
      {
        path: 'index',
        component: () => import('@/views/mainHome'), // Parent router-view
        meta: {
          title: '主菜单',
          roles: ['admin']
        },
        name: 'mainHomeChild'
      }
    ]
  },
  {
    path: '/menu1',
    name: 'menu1',
    meta: {
      title: '菜单一',
      icon: 'el-icon-location',
      roles: ['admin']
    },
    redirect: '/menu1/index',
    isCollapse: false,
    component: mainHome,
    children: [
      {
        path: 'index',
        component: () => import('@/views/menu1'), // Parent router-view
        meta: {
          title: '菜单一子菜单1',
          roles: ['admin']
        },
        name: 'child1'
      }
    ]
  },
  {
    path: '/menu2',
    name: 'menu2',
    redirect: '/menu2/index',
    meta: {
      title: '菜单二',
      icon: 'el-icon-user',
      roles: ['admin']
    },
    isCollapse: false,
    component: mainHome,
    children: [
      {
        path: 'index',
        component: () => import('@/views/menu2'), // Parent router-view
        meta: {
          title: '菜单二子菜单2',
          roles: ['admin']
        },
        name: 'child2'
      }
    ]
  },
  {
    path: '/menu3',
    name: 'menu3',
    redirect: '/menu3/index',
    meta: {
      title: '菜单三',
      icon: 'el-icon-phone',
      roles: ['admin']
    },
    isCollapse: true,
    component: mainHome,
    children: [
      {
        path: '/menu3/index',
        component: () => import('@/views/menu3'),
        meta: {
          title: '菜单三子菜单1',
          roles: ['admin']
        },
        name: 'child3-1'
      },
      {
        path: '/menu3/child1',
        component: () => import('@/views/menu3/child'),
        meta: {
          title: '菜单三子菜单2',
          roles: ['admin']
        },
        name: 'child3-2'
      }
    ]
  },
  {
    path: '/menu4',
    name: 'menu4',
    meta: {
      title: '菜单四',
      icon: 'el-icon-picture-outline-round',
      roles: ['admin']
    },
    redirect: '/menu4/index',
    isCollapse: false,
    component: mainHome,
    children: [
      {
        path: '/menu4/index',
        component: () => import('@/views/menu4'), // Parent router-view
        meta: {
          title: '菜单四子菜单1',
          roles: ['admin']
        },
        name: 'child4'
      }
    ]
  },
  {
    path: '/menu5',
    name: 'menu5',
    meta: {
      title: '菜单五',
      icon: 'el-icon-s-ticket',
      roles: ['admin']
    },
    redirect: '/menu5/index',
    isCollapse: true,
    component: mainHome,
    children: [
      {
        path: '/menu5/index',
        component: () => import('@/views/menu5'),
        meta: {
          title: '菜单五子菜单1',
          roles: ['admin']
        },
        name: 'child5-1'
      },
      {
        path: '/menu5/child1',
        component: () => import('@/views/menu5/child1'),
        meta: {
          title: '菜单五子菜单2',
          roles: ['admin']
        },
        name: 'child5-2'
      },
      {
        path: '/menu5/child3',
        component: () => import('@/views/menu5/child3'),
        meta: {
          title: '菜单五子菜单3',
          roles: ['admin1']
        },
        name: 'child5-3'
      }
    ]
  },
  {
    path: '/menu6',
    name: 'menu6',
    meta: {
      title: '菜单六',
      icon: 'el-icon-s-ticket',
      roles: ['admin']
    },
    isCollapse: true,
    redirect: '/menu6/index',
    component: mainHome,
    children: [
      {
        path: '/menu6/index',
        meta: {
          title: '菜单六子菜单1',
          roles: ['admin']
        },
        isCollapse: true,
        component: () => import('@/views/menu6/child1/index'),
        name: 'child6-1',
        children: [
          {
            path: '/menu6/index',
            component: () => import('@/views/menu6/child1/child1'),
            meta: {
              title: '菜单六第三级菜单1',
              roles: ['admin']
            },
            name: 'child6-1-1'
          },
          {
            path: '/menu6/child2',
            component: () => import('@/views/menu6/child1/child2'),
            meta: {
              title: '菜单六第三级菜单2',
              roles: ['admin']
            },
            name: 'child6-1-2'
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    meta: {
      title: 'NoFound',
      roles: ['any']
    },
    hide: true,
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({
  routes: constantRouterMap
})

export default router
