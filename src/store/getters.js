const getters = {
  isLogin: state => state.user.isLogin, // 用户是否登录
  getUserInfo: state => state.user.userInfo, // 获取用户信息
  getEditStatus: state => state.user.canEdit, // 获取编辑状态
  getRouter: state => state.app.asyncRouter, // 获取路由
  getIsOpen: state => state.app.isOpen,
  getRoles: state => state.app.roles // 获取角色数组
}

export default getters
