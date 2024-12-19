import { Stack, Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState} from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {

  const [isLogin, setIsLogin] = useState(false)
  useEffect (() => {
      SplashScreen.hideAsync();
  },[])

  return (
    <Stack screenOptions={{headerShown: false}}>
      {
        isLogin? <Redirect href={"/(main)"}/> : <Redirect href={"/(auth)"}/>
      }
    </Stack>
  );
}
