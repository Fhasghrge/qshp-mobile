import { FC } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Home(): FC {
  return (
    <View className='index'>
      <Text>home???</Text>
      {[...Array(100)].map((item,index) => {
        return <View key={index}>{index}</View>
      })}
    </View>
  );
}
