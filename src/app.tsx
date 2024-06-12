import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { interceptor } from '@/utils/service'
import { Provider } from 'react-redux'
import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component<{children: React.ReactNode}> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    // add request interceptor
    Taro.addInterceptor(interceptor)
  }

  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        { this.props.children }
      </Provider>
    )
  }
}

export default App
