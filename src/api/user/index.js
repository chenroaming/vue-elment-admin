import api from '../index'
import urls from './urls'
import Qs from 'qs'
let header = {}

export default {
  login (params) { // 登录接口
    header = {}
    return api.post(urls.login, '', header, Qs.stringify({ ...params }), true)
  },
  signOut () { // 登录接口
    header = {}
    return api.post(urls.signOut, '', header, '', true)
  }
}
