import api from '@/api/apiList'// 引入api列表文件
const user = {
  state: {
    isLogin: false, // 登录状态
    userInfo: {} // 用户信息
  },
  mutations: {
    SET_LOGIN: (state, status) => {
      state.isLogin = status
    },
    SET_USERINFO: (state, info) => {
      state.userInfo = info
    }
  },
  actions: {
    login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        api.user.login(userInfo).then(res => {
          if (res.state === 100) {
            commit('SET_LOGIN', true)
            commit('SET_USERINFO', res)
          } else {
            commit('SET_LOGIN', false)
          }
          resolve(res)
        })
          .catch(err => {
            reject(err)
          })
      })
    },
    signOut ({ commit }) {
      return new Promise((resolve, reject) => {
        api.user.signOut().then(res => {
          if (res.state === 100) {
            commit('SET_LOGIN', false)
            commit('SET_USERINFO', {})
          }
          resolve(res)
        })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default user
