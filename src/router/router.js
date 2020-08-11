import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'

const whiteList = ['/', '/login', '/404']
router.beforeEach((to, from, next) => {
  const isLogin = store.getters.isLogin
  if (isLogin) {
    if (to.path === '/login') {
      next({ path: '/menu1/index' })
    } else {
      next()
    }
  }
  if (!isLogin) {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      Message.warning('未登录！') && next({ path: '/' })
    }
  }
})
