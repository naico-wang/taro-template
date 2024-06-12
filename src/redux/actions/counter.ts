import { ADD, MINUS } from '@/constants/counter'
import { AppDispatch } from '@/types/common'

export const add = () => (dispatch: AppDispatch) => {
  dispatch({ type: ADD })
}
export const minus = () => (dispatch: AppDispatch) => {
  dispatch({ type: MINUS })
}
