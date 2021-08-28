import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// import images
import home from "./../../assets/img/homeIcon.png";
import budget from "./../../assets/img/budgetIcon.png";
import notify from "./../../assets/img/notificationsIcon.png";
import tickets from "./../../assets/img/ticketIcon.png";
import settings from "./../../assets/img/settings.png";

import { Foundation, AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const Footer = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#fff",
        paddingVertical: 5,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Foundation name="home" size={27} color="#1F64FF" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Budget")}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <AntDesign name="piechart" size={27} color="#1F64FF" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Budget</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Entypo name="wallet" size={27} color="#1F64FF" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Wallet</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Tickets")}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Entypo name="ticket" size={27} color="#1F64FF" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Tickets</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Ionicons name="settings" size={27} color="#1F64FF" />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
