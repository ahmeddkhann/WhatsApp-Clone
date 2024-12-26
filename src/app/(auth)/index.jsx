import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'


const HomePage = () => {
  return (
  <SafeAreaView style={styles.container}>
    <View ></View>
    <View style={styles.body}></View>
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
    height: 50,
    width: 50,
    backgroundColor: "blue"
  },
  footer: {
   alignItems: "center"
},
  fromText: {
    fontSize: 12
  },
  facebookText: {
    fontSize: 15,
    fontWeight: "bold"
  }
})