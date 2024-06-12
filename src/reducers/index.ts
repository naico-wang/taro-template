import { combineReducers } from 'redux'
import { enhanceReducers } from '@/utils/service'

import counter from './counter'

export default combineReducers({
  ...enhanceReducers({
    counter
  })
})
