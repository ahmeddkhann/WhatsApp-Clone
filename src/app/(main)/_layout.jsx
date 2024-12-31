import { Stack } from "expo-router";

export default function Layout() {

    return (
        <Stack>
            <Stack.Screen name="index"  
             options={{headerShown: false}}
            />
            <Stack.Screen name="callPage" 
             options={{headerShown: false}}
            />
            <Stack.Screen name="chattingPage"
             options={{headerShown: false}}
            />
            <Stack.Screen name="statusPage"
             options={{headerShown: false}}
            />
        </Stack>
    )
}