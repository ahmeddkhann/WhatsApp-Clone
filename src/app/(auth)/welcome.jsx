import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/src/constants/ImagePath'

const Welcome = () => {
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}> Welcome to WhatsApp</Text>
      <Image  
       source={images.termsAgree}
       style={styles.termsAgree}
      />
      <Text style={styles.paragraphText}> Read our <Text style={styles.betweenText}> Privacy Policy</Text> Tap "Agree and Continue" to accept the 
       <Text style={styles.betweenText}> Terms of Services</Text>
      </Text>
      <TouchableOpacity style={styles.agreeButton}>
        <Text style={styles.agreeButtonText}> Agree and Continue</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}></View>

    <View style={styles.footer}>
       <Text style={styles.fromText}>From</Text>
        <Text style={styles.facebookText}>FACEBOOK</Text>
    </View>
   </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  
  termsAgree: {
    height: 220,
    width: 220,
    marginTop: 30,
  },
  betweenText: {
    color: "blue",
  },
  agreeButton: {
    backgroundColor: "#1E9B50",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    marginTop: 20,
  },
  agreeButtonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
  headerText: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginTop: 54,
  },
  paragraphText: {
    fontSize: 15,
    color: "black",
    marginTop: 30,
    width: "80%",
    textAlign: "center",
  },
  fromText: {
    fontSize: 12,
    color: "gray",
  },
  facebookText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});
