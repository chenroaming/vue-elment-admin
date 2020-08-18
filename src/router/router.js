import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 加载进度条
import 'nprogress/nprogress.css' // 加载进度条样式

const whiteList = ['/', '/login', '/404']
router.beforeEach((to, from, next) => {
  NProgress.start()
  const isLogin = store.getters.isLogin
  if (isLogin) {
    next()
    // NProgress.done()
    // if (to.path === '/login') {
    //   next({
    //     path: '/menu1'
    //   })
    // } else {
    //   next()
    // }
  }
  if (!isLogin) {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      Message.warning('未登录！') && next({ path: '/' })
    }
    // NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})
