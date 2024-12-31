import React, {useState, useEffect} from "react";
import { Redirect, Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";



const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        
        const token = await AsyncStorage.getItem("accessToken")
        setIsLogin(true)
      } catch (error) {
        console.log("error while checking uaer authentication: ", error);
        setIsLogin(false);
        
      }
    }
    checkAuth();
  }, [])

  return (
    <>
      <Stack screenOptions={{ headerShown: false}}/>
      {isLogin? <Redirect href={"/(main)"}/>:  
        <Redirect href={"/(auth)"}/>
      }
    </>
  )
}

export default RootLayout