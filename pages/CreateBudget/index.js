import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createBudget } from "./../../redux/budgetSlice";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const CreateBudget = ({ navigation }) => {
  const [nameText, onChangeNameText] = useState("");
  const [description, onChangeDescription] = useState("");
  const [amount, onChangeAmount] = useState("");
  const [formFilled, setFormFilled] = useState(false);

  const dispatch = useDispatch();
  const budgetData = useSelector((state) => state.budget);

  const handleNext = () => {
    if (
      dispatch(
        createBudget({
          nameText: nameText,
          description: description,
          amount: amount,
        })
      )
    ) {
      navigation.navigate("CreateBudgetTwo");
    }
  };

  const setBudget = (name, desc, amount) => {
    if (name && desc && amount != "") {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  };
  useEffect(() => {
    setBudget(nameText, description, amount);
  }, [nameText, description, amount]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.headText}>Create Your budget</Text>
          <Text
            style={{
              color: "#555",
              marginTop: -25,
              marginBottom: 30,
              paddingLeft: 15,
            }}
          >
            You are on your way to maximizing every penny you have 💳🎉
          </Text>
          <View style={styles.form}>
            <View style={styles.inputDiv}>
              <Text style={styles.inputText}>Budget name</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNameText}
                value={nameText}
                placeholder=" Give your budget a name"
              />
            </View>
            <View style={styles.inputDiv}>
              <Text style={styles.inputText}>Description</Text>
              <TextInput
                style={{
                  borderWidth: 0,
                  borderColor: "#fff",
                  backgroundColor: "#fff",
                  borderColor: "#1F64FF",
                  borderWidth: 1,
                  height: 65,
                  paddingLeft: 10,
                  paddingTop: 0,
                  borderRadius: 20,
                  borderBottomRightRadius: 2,
                  marginTop: 0,
                }}
                onChangeText={onChangeDescription}
                value={description}
                placeholder="Describe your budget..."
                multiline={true}
                numberOfLines={10}
              />
            </View>
            <View style={styles.inputDiv}>
              <Text style={styles.inputText}>Amount</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeAmount}
                value={amount}
                keyboardType="numeric"
                placeholder=" Amount"
              />
            </View>
          </View>

          {formFilled ? (
            <TouchableOpacity onPress={() => handleNext()}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginHorizontal: 40,
                  marginRight: 20,
                }}
              >
                <Text
                  style={{ color: "#1F64FF", fontWeight: "bold", fontSize: 18 }}
                >
                  Next
                </Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  size={24}
                  color="#1F64FF"
                  style={{}}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginVertical: 40,
                  marginRight: 20,
                }}
              >
                <Text
                  style={{ color: "#ccc", fontWeight: "bold", fontSize: 18 }}
                >
                  Next
                </Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  size={24}
                  color="#ccc"
                  style={{}}
                />
              </View>
            </TouchableOpacity>
          )}

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: "auto",
            }}
          >
            <View
              style={{
                width: 70,
                height: 5,
                backgroundColor: "#1F64FF",
                borderRadius: 4,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                width: 40,
                height: 5,
                backgroundColor: "#ccc",
                borderRadius: 4,
                margin: 3,
              }}
            ></View>
            <View
              style={{
                width: 40,
                height: 5,
                backgroundColor: "#ccc",
                borderRadius: 4,
                margin: 3,
              }}
            ></View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CreateBudget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
    backgroundColor: "#fff",
  },
  headText: {
    fontSize: 35,
    marginTop: 20,
    color: "#1F64FF",
    paddingLeft: 15,
    marginBottom: 30,
  },
  inputText: {
    paddingLeft: 10,
    marginBottom: 3,
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
    marginTop: 0,
  },
  inputDiv: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
