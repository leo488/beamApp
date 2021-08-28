import { CardStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import Footer from "../../components/Footer";

import { AntDesign } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 30,
        }}
      >
        <Image
          source={{
            uri: "https://compai.pub/v1/png/3d8730f631de30dbe09887d1ff4e83493d6f341269eb7cba08afeccb0050069b",
          }}
          style={{ width: 45, height: 45 }}
        />

        <Text style={{ fontSize: 45, color: "#1F64FF", fontWeight: "bold" }}>
          Settings
        </Text>
      </View>
      <View style={styles.list}>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/3e0adbded71159c188b11af0383a1830511bce67a87093278755073ca1061fbc",
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 18, paddingLeft: 10 }}>Account</Text>
          </View>
          <View>
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/f90c2d6e6769d9f3eaed3aef7fddc009a11197f6db1d851462d15eec3f77c5cb",
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 18, paddingLeft: 10 }}>Support</Text>
          </View>
          <View>
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/a662d8bc2de5870dee7840a551b6f700b2a3293c0da05bbd1f73a0d3abdfe59d",
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 18, paddingLeft: 10 }}>
              Terms and Condition
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/5a09a4efd6b4e3bbc08499d658adb6d6d88cea6e1aab85587cf1fc70c78bb6bb",
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 18, paddingLeft: 10 }}>Contact Us</Text>
          </View>
          <View>
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://compai.pub/v1/png/1e4d19e30f562e11968c12b9aaeea78a446c3f5a6b310edac6d66d2c52bdca85",
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 18, paddingLeft: 10 }}>Log Out</Text>
          </View>
          <View>
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingRight: 20,
  },
  list: {},
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
});
