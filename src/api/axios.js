import axios from 'axios'
import { Loading, Message } from 'element-ui'// 引入加载效果组件
const service = axios.create({
  // headers:{'Content-Type': 'application/json'},
  timeout: 60000
})
const options = {
  lock: true,
  text: '正在加载中。。。',
  background: 'rgba(255, 255, 255, 0.2)'
}
let loadingInstance = null
let loadingCount = 0// 全局加载效果计数器
let showTips = false// 消息提示开关
// 如果设置传输头为application/json则传送序列化的参数数据，否则传输fromData数据
// service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.put['Content-Type'] = 'application/json'
// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    if (loadingCount === 0) {
      loadingInstance = Loading.service(options)// 全局添加请求时的加载效果
    }
    loadingCount++
    if (config.showTips) {
      showTips = true
    }
    return config
  },
  (error) => {
    // 请求错误处理
    loadingInstance.close()// 去除加载效果
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    loadingCount--
    if (loadingCount === 0) {
      loadingInstance.close()// 收到回复后隐藏加载效果
    }
    const { data } = response// 对象解构，直接获取回复消息中的data
    if (showTips) { // 是否需要弹出消息提示
      if (data.state === 100) {
        Message.success(data.message)
        showTips = false
        return data
      }
      Message.warning(data.message)
      showTips = false
    }
    return data
  },
  (error) => {
    loadingCount--
    if (loadingCount === 0) {
      loadingInstance.close()// 收到回复后隐藏加载效果
    }
    Message.warning('网络错误，请稍后重试！')
    let info = {}
    const { status, statusText, data } = error.response

    if (!error.response) {
      info = {
        code: 5000,
        msg: 'Network Error'
      }
    } else {
      // 此处整理错误信息格式
      info = {
        code: status,
        data: data,
        msg: statusText
      }
    }
    return info
  }
)

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function () {
  return service
}
