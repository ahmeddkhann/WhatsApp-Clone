import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

const WhatsAppClone = () => {

  const turnToChattingPage = () => {
    router.push("/(main)/chattingPage");
  };
  const turnToStatusPage = () => {
    router.push("/(main)/statusPage");
  };
  const turnToCallPage = () => {
    router.push("/(main)/callPage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>WhatsApp</Text>
          <View style={styles.icons}>
            <Ionicons name="search" size={24} color="white" />
            <MaterialIcons name="more-vert" size={24} color="white" />
          </View>
        </View>

        <View style={styles.tabBar}>
          <Ionicons
            name="camera-outline"
            size={24}
            color="white"
            style={styles.cameraIcon}
          />
          <TouchableOpacity style={styles.tab} onPress={turnToChattingPage}>
            <Text style={styles.tabText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={turnToStatusPage}>
            <Text style={styles.tabText}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={turnToCallPage}>
            <Text style={styles.tabText}>Calls</Text>
          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  );
};

export default WhatsAppClone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    backgroundColor: "#075E54",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 4,
  },
  cameraIcon: {
    flex: 0.5,
    textAlign: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
} ) 