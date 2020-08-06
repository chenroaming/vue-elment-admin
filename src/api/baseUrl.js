let baseUrl = '' // 这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  // => 根据NODE_ENV来判断当前环境
  case 'production':
    baseUrl = '/api' // 生产环境url
    break
  case 'development':
    baseUrl = '/api' // 开发环境url
    break
  default:
    baseUrl = '/api' // '/api'为vue.config.js配置
}

export default baseUrl
