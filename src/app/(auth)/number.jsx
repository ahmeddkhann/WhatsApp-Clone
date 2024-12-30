import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CountryPicker} from "react-native-country-codes-picker";
import { router } from 'expo-router';

const Number = () => {

  const [countryName, setCountryName] = useState("Pakistan");
  const [countryCode, setCountryCode] = useState("+92");
  const [countryFlag, setCountryFlag] = useState ("🇵🇰")
  const [show, setShow] = useState(false)

  const turnToOTPPage = () => {
    router.push("/(auth)/otpPage")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
       <View >
        <Text style={styles.headerText}>Enter your phone number</Text>
       </View>

       <View>
        <Text style={styles.paragraphText}>Whatsapp will need to verify your phone number.  
          <Text style={styles.linkText}> What's my number?</Text> </Text>
       </View>

       <View>
        
        <View style={styles.selectCountryView}>
          <View/>
          <View>
            <Text style={styles.countryText}> {countryName} </Text>
            </View>
         <View>
         <TouchableOpacity style={styles.dropdownIcon} 
         onPress={() => setShow (true)}
         >
          <Icon name="arrow-drop-down" size={30} color="#000" style={styles.icon} />
          </TouchableOpacity>
         </View>
        </View>

        <View style={styles.lineOne} />
        <View style={styles.numberFields}>
          <View>
            <Text style={styles.codeText}>
            {countryCode} {" "}
              {countryFlag}
            </Text>
            <View style={styles.lineTwo} />
          </View>

          <View>
          <TextInput
            style={styles.phoneInput}
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            placeholderTextColor="#aaa"
            
          />
          <View style={styles.lineThree} />
          </View>
          <View>
            
          </View>
        </View>
       </View>
      </View>
       <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={turnToOTPPage}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View>
     {
      show && 
      <CountryPicker  
      show = {show}
      pickerButtonOnPress={(item) => {
        if (item && typeof item.dial_code === 'string') {
          const countryName = item.name?.en || "Unknown"; // Use English name or fallback
          const countryFlag = item.flag || "🏳️"; // Use the flag or fallback to a neutral flag
          setCountryCode(item.dial_code);
          setCountryName(countryName);
          setCountryFlag(countryFlag);
        } else {
          console.error("Invalid country item:", item);
        }
        setShow(false);
      }}
      

      />
     }

      </View>
    </SafeAreaView>
  )
}

export default Number

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginTop: 60,
  },
  headerText: {
    marginLeft: "18%",
    fontWeight: "bold",
    fontSize: 20,
  },
  paragraphText: {
    textAlign: "center",
    marginTop: 20,
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 15
  },
  linkText: {
    color: "blue"
  },
  lineOne: {
    width: "85%",
    height: 2,
    backgroundColor: "#00A884",
    marginLeft: "8%"
  },
  selectCountryView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginLeft: "13%",
    width: "85%"
  },
  countryText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  dropdownIcon: {
    paddingRight: 8
  },
  lineTwo: {
    width: "85%",
    height: 2,
    backgroundColor: "#00A884",
    marginLeft: "8%",
    marginTop: "15%"
  },
  codeText: {
    marginLeft: "15%",
    marginTop: "20%"
  },
  lineThree: {
    width: "130%",
    height: 2,
    backgroundColor: "#00A884",
    marginLeft: "8%"
  },
  numberFields: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "6%"
  },
  phoneInput: {
    marginLeft: "6%",
    marginTop: "9%"
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
  },
  nextButton: {
    backgroundColor: '#00A884',
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
})