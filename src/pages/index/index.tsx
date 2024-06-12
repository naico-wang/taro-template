import { useSelector, useDispatch } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus } from '@/actions/counter'

import './index.less'

const Index = () => {
  const dispatch = useDispatch()
  const { num } = useSelector((state: any) => state.counter)
  const onAddButtonClick = () => {
    add()(dispatch)
  }
  const onDeleteButtonClick = () => {
    minus()(dispatch)
  }

  return (
    <View className='index'>
      <Button className='add_btn' onClick={onAddButtonClick}>+</Button>
      <Button className='dec_btn' onClick={onDeleteButtonClick}>-</Button>
      <View><Text>{ num }</Text></View>
      <View><Text>Hello, World</Text></View>
    </View>
  )
}

export default Index
