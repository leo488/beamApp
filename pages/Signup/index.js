import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";

// import files
import Form from "./../../components/Form";

// import libraries
import { Ionicons } from "@expo/vector-icons";
import SubmitBtn from "../../components/SubmitBtn";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.icon}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={40} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.headTextBlue}>Create account!😊</Text>
          <Text style={styles.subHead}>Sign up to get started</Text>
        </View>
        <View style={styles.formDIv}>
          <Form question={"Full Name"} />
          <Form
            question={"Email"}
            icon={
              <Ionicons
                name="checkmark-done-circle"
                size={20}
                color="black"
                style={{ position: "absolute", right: 30, top: 45 }}
              />
            }
          />
          <Form question={"Phone number"} />
          <Form
            question={"password"}
            icon={
              <Ionicons
                name="ios-eye"
                size={20}
                color="black"
                style={{ position: "absolute", right: 30, top: 45 }}
              />
            }
          />
          <Form
            question={"Password"}
            icon={
              <Ionicons
                name="ios-eye"
                size={20}
                color="black"
                style={{ position: "absolute", right: 30, top: 45 }}
              />
            }
          />
          <SubmitBtn
            btnText={"Sign up"}
            footnote={"I have an account"}
            linkText={"signin"}
            link={"Home"}
            navigation={navigation}
            g
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 70,
  },
  icon: {
    padding: 20,
    paddingLeft: 10,
  },
  header: {
    paddingLeft: 25,
  },
  headTextBlue: {
    color: "#1F64FF",
    fontSize: 39,
    paddingTop: 20,
    fontWeight: "bold",
  },
  subHead: {
    color: "#555",
    marginTop: -5,
    fontSize: 20,
  },
  formDIv: {
    paddingTop: 20,
  },
});
