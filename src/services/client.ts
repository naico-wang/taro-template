import Taro from '@tarojs/taro'
import { SdkConfig, ReqObj, HttpMethod } from '@/types/common'

export default (config?: SdkConfig) => {
  if (!config) {
    throw new Error('Invalid config')
  }

  // Test if baseUrl is valid
  if (!config.baseUrl) {
    throw new Error('Invalid baseUrl')
  }

  if (config.fulfilled && typeof config.fulfilled !== 'function') {
    throw new Error('Invalid fulfill')
  }

  const request = {}
  // Wraps request to deal with API errors and to send only data object
  const methods = [
    'get',
    'options',
    'head',
    'post',
    'put',
    'delete',
    'trace',
    'connect',
    'patch'
  ]

  methods.forEach(method => {
    request[method] = (url: string, data = {}) => {
      // Sanitize
      url = encodeURI(`${config.baseUrl}${url}`)

      const obj: ReqObj = Object.assign({}, config, {
        url,
        method: method.toUpperCase() as HttpMethod,
        data
      })

      return config.fulfilled
        ? Taro.request(obj).then((...args) => config.fulfilled(...args, obj))
        : Taro.request(obj)
    }
  })

  return request
}
