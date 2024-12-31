import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomePage = () => {
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
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Calls</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.emptyState}>
        <View style={styles.tickIconView}>
        <Ionicons name="checkmark-circle-outline" size={64} color="white" 
         style={styles.tickIcon}
        />
        </View>
        <Text style={styles.emptyText}>You haven’t chat yet</Text>
        <TouchableOpacity style={styles.startChatButton}>
          <Text style={styles.startChatText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

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
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  emptyText: {
    fontSize: 22,
    color: "#666",
    marginTop: 35,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  startChatButton: {
    backgroundColor: "#0CCC83",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  startChatText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  tickIconView: {
    backgroundColor: "#0CCC83",
    borderRadius: 20
  },
  tickIcon: {
    padding: 6
  }
});
