import { FC, useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import T from "@tarojs/taro";
import getMe from "@src/service/me";
import Loading from "@src/components/Loading";
import "./index.scss";

const computeUserAvatarUrl = (userid: string): string => {
  if (!userid)
    return "https://bbs.uestc.edu.cn/uc_server/images/noavatar_middle.gif";

  const complete = userid.padStart(9, "0");
  const path =
    "" +
    complete.slice(0, 3) +
    "/" +
    complete.slice(3, 5) +
    "/" +
    complete.slice(5, 7) +
    "/" +
    complete.slice(7, 9);
  return `https://bbs.uestc.edu.cn/uc_server/data/avatar/${path}_avatar_middle.jpg`;
};
const Index: FC = () => {
  const [loading, setLoading] = useState(false);
  const [userinfo, setUserinfo] = useState<Object>({});
  useEffect(() => {
    setLoading(true);
    getMe()
      .then((res) => {
        if (res.errcode === 0) {
          setUserinfo(res.data);
          setTimeout(() => {
            T.redirectTo({
              url: "/pages/home/index",
            });
          }, 1000);
        } else {
          T.redirectTo({
            url: "/pages/login/index",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <View className='flex justify-center h-screen items-center bg-gradient-to-tr from-slate-400 to-sky-300'>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View className='w-10 h-10 border-2 border-sky-500 rounded-full overflow-hidden'>
            <img
              src={computeUserAvatarUrl(String(userinfo.ID))}
              className='w-10 h-10'
              alt={userinfo?.Username || "none"}
            />
          </View>
          <Text className='text-xs'>{userinfo?.Username || "none"}</Text>
        </View>
      )}
    </View>
  );
};

export default Index;
