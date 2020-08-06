import axios from './axios'
// import baseUrl from './baseUrl.js'
const instance = axios()

export default {
  get (url, params, headers, showTips) { // 最后的参数指示该方式接口是否需要弹窗提示
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    if (showTips) {
      options.showTips = showTips
    }
    return instance.get(url, options)
  },
  post (url, params, headers, data, showTips) { // 最后的参数指示该方式接口是否需要弹窗提示
    const options = {}
    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    if (showTips) {
      options.showTips = showTips
    }
    return instance.post(url, data, options)
  },
  put (url, params, headers) {
    const options = {}

    if (headers) {
      options.headers = headers
    }
    return instance.put(url, params, options)
  },
  delete (url, params, headers) {
    const options = {}

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.delete(url, options)
  }
}
