import Taro from '@tarojs/taro'
import { STORAGE_SESSION_KEY } from '@/constants/common'
import { getGUID } from '@/utils/common'

export const interceptor = (chain) => {
  const requestParams = chain.requestParams
  const sessionKey = Taro.getStorageSync(STORAGE_SESSION_KEY)

  // hook http request to add necessary header properties
  requestParams.header = Object.assign({}, requestParams.header, {
    'M-SUMMER-RequestId': getGUID(), // Unique id
    'M-Session-Key': sessionKey
  })

  return chain.proceed(requestParams).then(res => res)
}

export const enhanceReducers = (reducers = {}) =>
  Object.keys(reducers).reduce((enhancedReducers, key) => {
    const { initialState = {}, reducer = {} } = reducers[key]

    enhancedReducers[key] = (state = initialState, action) =>
      reducer[action.type] ? reducer[action.type](state, action) : state

    return enhancedReducers
  }, {})
