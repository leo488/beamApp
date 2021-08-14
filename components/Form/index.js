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
        placeholder="useless placeholder"
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
    borderBottomColor: "#1F64FF",
    borderWidth: 2,
  },
  formHead: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
