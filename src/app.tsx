import { install } from 'offline-plugin/runtime'
import Switch from "@src/components/Switch";
import { View } from '@tarojs/components';
import { FC } from 'react'

import 'windi.css';
import './app.scss'

if (process.env.TARO_ENV === 'h5') {
  install()
}

function App(props): FC {
  return (
    <View>
      {props.children}
      <Switch />
    </View>
  )
}

export default App
