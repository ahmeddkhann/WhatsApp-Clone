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
import { chatData } from "../usersData";
import { router } from "expo-router";

const WhatsAppClone = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatContainer}>
      <Image source={ item.profilePic } style={styles.profilePic} />
      <View style={styles.chatDetails}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <View style={styles.chatMessageRow}>
          {item.unreadMessages === 0 && (
            <Ionicons
              name={item.statusIcon}
              size={16}
              color={item.statusColor}
              style={styles.statusIcon}
            />
          )}
          <Text style={styles.chatMessage}>{item.message}</Text>
          {item.unreadMessages > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadMessages}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

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

      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
  chatContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
    justifyContent: "center",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  chatTime: {
    color: "#888",
    fontSize: 12,
  },
  chatMessageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  statusIcon: {
    marginRight: 5,
  },
  chatMessage: {
    color: "#555",
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: "#25D366",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
