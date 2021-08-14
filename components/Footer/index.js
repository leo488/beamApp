import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// import images
import home from "./../../assets/img/homeIcon.png";
import budget from "./../../assets/img/budgetIcon.png";
import notify from "./../../assets/img/notificationsIcon.png";
import tickets from "./../../assets/img/ticketIcon.png";
import settings from "./../../assets/img/settings.png";

const Footer = ({navigation}) => {
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
        paddingVertical: 5
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/1ff25eec2abdf002b4504b18cb096f1ba7f6ac4598cb99a24d7a48b6e6af7c98",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/e82093dc8b24e7df5a37e10eb8bfc15ed7e521e3095ceb8f1e1fecb82fcc2e64",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Budget</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/be4696f3ee49266a2eccaadbddcfe8de1fefb1e7a768c984d80f5d9d88ee851e",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Notification</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/f354b61636d1012229bb67a274671eb0814eaf1faf08cad2d3b5c3d779568821",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Tickets</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: 5,
              borderBottomRightRadius: 1,
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/d40bb02fa534376b192f1a1c0830eaf1061c65ad87db5245695b851815cb4789",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
