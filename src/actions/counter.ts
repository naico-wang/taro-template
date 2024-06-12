import { ADD, MINUS } from '@/constants/counter'

export const add = () => dispatch => {
  dispatch({ type: ADD })
}
export const minus = () => dispatch => {
  dispatch({ type: MINUS })
}
