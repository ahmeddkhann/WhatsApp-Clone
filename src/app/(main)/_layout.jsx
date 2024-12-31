import { Stack } from "expo-router";

export default function Layout() {

    return (
        <Stack>
            <Stack.Screen name="index"  
             options={{headerShown: false}}
            />
            <Stack.Screen name="callPage"/>
            <Stack.Screen name="chattingPage"/>
            <Stack.Screen name="statusPage"/>
        </Stack>
    )
}