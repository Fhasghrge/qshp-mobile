import { install } from 'offline-plugin/runtime'
import { Component } from 'react'
import 'windi.css';
import './app.scss'

if (process.env.TARO_ENV === 'h5') {
  install()
}

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
