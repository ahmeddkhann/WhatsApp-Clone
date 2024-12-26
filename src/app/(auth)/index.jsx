import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import images from '@/src/constants/ImagePath'

const HomePage = () => {
  return (
  <SafeAreaView style={styles.container}>
    <View ></View>
    <View style={styles.body}>
      <Image  
       source={images.logo}
       style={styles.logo}
      />
      <Text style={styles.whatsappText}> Whatsapp</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.fromText}>From</Text>
      <Text style={styles.facebookText}>Facebook</Text>
    </View>
  </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 25
  },

  body: {
   alignItems: "center",
   gap: 8
  },
  footer: {
   alignItems: "center"
},
  fromText: {
    fontSize: 15
  },
  facebookText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  logo: {
    height: 70,
    width: 70,
    borderRadius: 10
  },
  whatsappText: {
    fontSize: 30,
    fontWeight: "bold"
  }

})