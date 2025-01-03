
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import OTPInput from "@codsod/react-native-otp-input";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const OTPPage = () => {
    const [otp, setOTP] = useState("");

    const verifyOTP = async () => {
        if (otp.length < 4){
            Alert.alert("Please enter all OTP digits");
            return;
        }
        if (otp.length === 4){
           try {
            await AsyncStorage.setItem("accessToken", "abcdefghijklmnopqrstuvwxyz")
            Alert.alert("OTP Verified Successfuly")
            router.push("/(main)")

           } catch (error) {
              console.log("error while verifying OTP: ",error );
              Alert.alert("OTP Vrification failed !!!")   
           }
        }
    }

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <View style={styles.codeTextView}>
        <Text style={styles.codeText}>
        Code has been send to +92 34******64
        </Text>
    </View>
    <View>
      <OTPInput length={4} onOtpComplete={(txt) => setOTP(txt)} 
      style={styles.componentStyle} inputStyle={styles.boxStyle}
      />
    </View>
    <View >
        <Text style={styles.timerText}>
        Resend Code in <Text style={styles.timeText}>48</Text> s
        </Text>
    </View>
    </View>

    <View>
        <TouchableOpacity style={styles.button} onPress={verifyOTP}>
            <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default OTPPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
     },
    header:{
        height: "75%",
    },
    button: {
        backgroundColor: "#008069",
        width: 300,
        borderRadius: 25,
        marginLeft: "8%",
        paddingVertical: 10
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    codeTextView: {
        marginTop: "35%"
    },
    codeText: {
        fontSize: 14,
        textAlign:"center"
    },
    componentStyle: {
        justifyContent: "center",
        gap: 8,
        marginTop: 42
    },
    boxStyle: {
        borderRadius: 15,
        width: 65,
        height: 65,
    },
    timerText:{
        marginTop: 30,
        textAlign: "center"
    },
    timeText: {
        color: "#00A884"
    }
})
