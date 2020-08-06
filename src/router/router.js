import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'

const whiteList = ['/', '/login', '/404']
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    next()
  } else {
    store.getters.isLogin ? next() : Message.warning('未登录！') && next({ path: '/' })
  }
})
