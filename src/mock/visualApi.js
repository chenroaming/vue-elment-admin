// import Mock from 'mockjs'
const login = ({ body }) => {
  const [userName] = body.split('&')
  return {
    message: '登录成功！',
    name: userName.split('=')[1],
    state: 100
  }
}

const signOut = () => {
  return {
    message: '退出成功！',
    state: 100
  }
}

const getAuth = () => {
  return {
    message: '获取成功！',
    state: 100,
    list: ['admin', 'user', 'manager']
  }
}

const visualApi = {
  login,
  signOut,
  getAuth
}
export default visualApi
