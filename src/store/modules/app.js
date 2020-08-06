import router, { asyncRouterMap } from '@/router'
const app = {
  state: {
    asyncRouter: []
  },
  mutations: {
    SET_ROUTER: (state, routerList) => {
      state.asyncRouter = routerList
    }
  },
  actions: {
    setRouter ({ commit }) {
      return new Promise((resolve, reject) => {
        router.addRoutes(asyncRouterMap)
        commit('SET_ROUTER', asyncRouterMap)
        resolve()
      })
    }
  }
}

export default app
