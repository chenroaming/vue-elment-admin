const getters = {
  isLogin: state => state.user.isLogin, // 用户是否登录
  getUserInfo: state => state.user.userInfo, // 获取用户信息
  getEditStatus: state => state.user.canEdit // 获取编辑状态
}

export default getters
