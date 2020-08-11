import router, { asyncRouterMap } from '@/router'
const app = {
  state: {
    asyncRouter: [],
    isOpen: false
  },
  mutations: {
    SET_ROUTER: (state, routerList) => {
      state.asyncRouter = routerList
    },
    SET_OPENSTATE: (state, status) => {
      state.isOpen = !state.isOpen
    }
  },
  actions: {
    setRouter ({ commit }) {
      return new Promise((resolve, reject) => {
        router.addRoutes(asyncRouterMap)
        commit('SET_ROUTER', asyncRouterMap)
        resolve()
      })
    },
    toggleOpen ({ commit }) {
      commit('SET_OPENSTATE')
    }
  }
}

export default app
