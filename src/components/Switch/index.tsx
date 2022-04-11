import { FC, useState, useEffect } from "react";
import {
  MdHome,
  MdOutlineGrain,
  MdSearch,
  MdOutlineEmail,
} from "react-icons/md";
import T from "@tarojs/taro";
import { View } from "@tarojs/components";

const enum TabType {
  HOME = "/pages/home/index",
  CLASS = "/pages/classes/index",
  SEARCH = "/pages/search/index",
  MESSAGE = "/pages/notification/index",
}

const Switch: FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>(TabType.HOME);

  const handleSwitchToggle = (tabType: TabType) => {
    setCurrentTab(tabType);
    T.navigateTo({
      url: tabType,
    });
  };
  if (!Object.values(TabType).includes(window.location.hash.slice(1))) {
    return null;
  }
  return (
    <View
      className='fixed bottom-0 bg-sky-600 w-5/6 left-1/2
      transform -translate-x-1/2 rounded-t-xl h-8
      flex justify-around items-center text-gray-400
      shadow-lg
      '
    >
      <View
        className={`${
          currentTab === TabType.HOME ? "text-white transform scale-110" : ""
        }`}
        onClick={() => handleSwitchToggle(TabType.HOME)}
      >
        <MdHome />
      </View>
      <View
        className={`${
          currentTab === TabType.CLASS ? "text-white transform scale-110" : ""
        }`}
        onClick={() => handleSwitchToggle(TabType.CLASS)}
      >
        <MdOutlineGrain />
      </View>
      <View
        className={`${
          currentTab === TabType.SEARCH ? "text-white transform scale-110" : ""
        }`}
        onClick={() => handleSwitchToggle(TabType.SEARCH)}
      >
        <MdSearch />
      </View>
      <View
        className={`${
          currentTab === TabType.MESSAGE ? "text-white transform scale-110" : ""
        }`}
        onClick={() => handleSwitchToggle(TabType.MESSAGE)}
      >
        <MdOutlineEmail />
      </View>
    </View>
  );
};

export default Switch;
