import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Number = () => {
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
        <View>
          <View/>
          <Text> Pakistan </Text>
          <TouchableOpacity>
          <Icon name="arrow-drop-down" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.lineOne} />
       </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text> Next</Text>
        </TouchableOpacity>
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
    width: "100%",
    height: 2,
    backgroundColor: "#00A884"
  }
})