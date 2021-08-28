import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import CatsList from "./../../components/CatsList";
import { useSelector, useDispatch } from "react-redux";

import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { useEffect } from "react/cjs/react.development";
import { removeFromList } from "./../../redux/budgetCategorySlice";

const CreateBudgetTwo = ({ navigation }) => {
  const [text, onChangeInput] = useState("");
  const [amount, onChangeAmount] = useState("");

  const dispatch = useDispatch();
  const budgetList = useSelector(
    (state) => state.budgetCategory.budgetPlannerList
  );
  const budgetData = useSelector((state) => state.budget);

  const handleDelete = () => {
    dispatch(removeFromList({ id: budgetList.id }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
          Choose a category and specify amounts to budget 💳🎉
        </Text>

        <View style={styles.inputDiv}>
          <Text style={{ fontSize: 16 }}>Categories</Text>
          <View style={styles.cats}>
            <CatsList navigation={navigation} />
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Text style={{ fontWeight: "bold" }}>Budget Title:</Text>
            <Text style={{ paddingLeft: 5, color: "#1F64FF" }}>
              {budgetData.newBudget.title}
            </Text>
          </View>

          {/* budget planner container */}
          <View style={budgetList ? styles.plannerSet : styles.planner}>
            {budgetList.lenght ? (
              budgetList.map((list) => (
                <View
                  key={list.id}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 5,
                    // flex: .7
                  }}
                >
                  {" "}
                  <View
                    style={{
                      flexDirection: "column",
                    }}
                  >
                    {" "}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 15,
                      }}
                    >
                      <Image
                        source={{ uri: list.image }}
                        style={{ height: 25, width: 25 }}
                      />
                      <Text style={styles.plannerText}>{list.title}</Text>
                    </View>{" "}
                    <TextInput
                      style={styles.budgetInput}
                      onChangeText={onChangeAmount}
                      value={amount}
                      keyboardType="numeric"
                      placeholder=" Amount"
                    />{" "}
                  </View>
                  <TouchableOpacity onPress={() => handleDelete}>
                    <MaterialIcons name="cancel" size={24} color="red" />
                  </TouchableOpacity>{" "}
                </View>
              ))
            ) : (
              <Text style={{ padding: 10 }}>
                click to add a category to allocate funds 😀
              </Text>
            )}
          </View>

          <View style={{ flexDirection: "row", marginTop: 45 }}>
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              Amount Left:
            </Text>
            <Text style={{ paddingLeft: 5, color: "red" }}>
              ₦{budgetData.newBudget.amount}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 40,
              marginRight: 20,
              marginBottom: 20,
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

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: "auto",
            }}
          >
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
                width: 60,
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
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateBudgetTwo;

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
  png: {
    height: 40,
    width: 40,
    borderRadius: 20,
    padding: 10,
  },
  cats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  catsText: {
    fontSize: 12,
  },
  planner: {
    paddingVertical: 30,
    marginTop: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    borderBottomRightRadius: 3,
    marginLeft: -5,
  },
  plannerSet: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop: 40,
    borderColor: "#1F64FF",
    borderWidth: 1,
    borderRadius: 15,
    borderBottomRightRadius: 3,
    marginLeft: -5,
  },
  plannerText: {
    paddingLeft: 5,
  },
  budgetInput: {
    borderColor: "#1F64FF",
    width: 200,
    borderBottomWidth: 1,
  },
});
