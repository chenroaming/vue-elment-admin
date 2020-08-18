import Mock from 'mockjs'
import visualApi from './visualApi'

Mock.mock('/api/main/login', 'post', (params) => {
  return visualApi.login(params)
})

Mock.mock('/api/main/signOut', 'post', () => {
  return visualApi.signOut()
})

Mock.mock('/api/main/getAuth', 'post', () => {
  return visualApi.getAuth()
})
