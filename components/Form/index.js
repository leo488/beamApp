import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
} from "react-native";

// import libraries
import { Ionicons } from "@expo/vector-icons";

const Form = ({ navigation, question, icon }) => {
  const [text, onChangeInput] = useState("");

  return (
    <View style={styles.form}>
      <Text style={styles.formHead}>{question}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInput}
        value={text}
        placeholder=" placeholder"
      />
      {icon}
    </View>
  );
};

export default Form;



const styles = StyleSheet.create({
  form: {
    padding: 25,
  },
  input: {
    borderWidth: 0,
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderColor: "#1F64FF",
    borderWidth: 1,
    height: 45,
    paddingLeft: 10,
    borderRadius: 20,
    borderBottomRightRadius: 2,
    marginTop: 0
  },
  formHead: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10
  },
});
