import { Stack } from "expo-router";

export default function Layout() {

    return (
        <Stack>
            <Stack.Screen name="index"  
             options={{headerShown: false}}
            />
            <Stack.Screen name="welcome" 
            options={{headerShown: false}}
            />
            <Stack.Screen name="number" 
            options={{headerShown: false}}
            />
            <Stack.Screen name="otpPage"  
            options={{headerShown: "false"}}
            />
        </Stack>
    )
}