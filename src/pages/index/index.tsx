import { FC, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import getMe from '@src/service/me'
import './index.scss'

const Index: FC =() => {
  useEffect(() => {
    getMe().then(console.log)
  }, [])
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default Index;
