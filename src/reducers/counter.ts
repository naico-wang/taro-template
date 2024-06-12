import { ADD, MINUS } from '@/constants/counter'

type CounterState = {
  num: number
}

const initialState = {
  num: 0
}

const reducer = {
  [ADD](state: CounterState) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [MINUS](state: CounterState) {
    return {
      ...state,
      num: state.num - 1
    }
  }
}

export default {
  initialState,
  reducer
}
