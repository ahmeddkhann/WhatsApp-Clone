import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import images from '@/src/constants/ImagePath'

const Welcome = () => {
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text> Welcome to Whatsapp</Text>
      <Image  
       source={images.termsAgree}
       style={styles.termsAgree}
      />
      <Text> Read our <Text style={styles.betweenText}> Privacy Policy</Text> Tap "Agree and Continue" to accept the 
       <Text style={styles.betweenText}>Terms of Services</Text>
      </Text>
    </View>
    <View style={styles.footer}></View>
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
    height: "75%",
    width: "100%"
  },
  footer: {
    height: "25%",
    width: "100%"
  },
  termsAgree: {
    height: 100,
    width: 100,
  },
  betweenText: {
    color: "blue"
  }
})