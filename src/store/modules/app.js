import router, { asyncRouterMap } from '@/router'
import { filterRouters } from '@/utils/permission'
import api from '@/api/apiList' // 引入api列表文件
const app = {
  state: {
    asyncRouter: [],
    isOpen: false,
    roles: []
  },
  mutations: {
    SET_ROUTER: (state, routerList) => {
      state.asyncRouter = routerList
    },
    SET_OPENSTATE: (state, status) => {
      state.isOpen = !state.isOpen
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    setRouter ({ commit }) {
      return new Promise((resolve, reject) => {
        api.user.getAuth().then(({ state, list }) => {
          if (state === 100) {
            const filterRoutes = filterRouters(asyncRouterMap, list)
            router.addRoutes(filterRouters(asyncRouterMap, list))
            commit('SET_ROLES', list)
            commit('SET_ROUTER', filterRoutes)
          }
          resolve()
        })
          .catch(err => { reject(err) })
      })
    },
    toggleOpen ({ commit }) {
      commit('SET_OPENSTATE')
    }
  }
}

export default app
