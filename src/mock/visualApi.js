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

const visualApi = {
  login,
  signOut
}
export default visualApi
