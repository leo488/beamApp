import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Footer from "../../components/Footer";

import { Ionicons } from "@expo/vector-icons";
import CreateBudget from "../CreateBudget";

const Budget = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <View style={styles.ad}>
          <Image
            source={require("./../../assets/Weddingplanner-pana.png")}
            style={{ width: 80, height: 80 }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
              }}
            >
              add in your monthly expenses
            </Text>
            <Text style={{ color: "white", fontSize: 13 }}>
              you can directly create an auto budget, lock funds or control the
              funds within your account
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require("./../../assets/Questions-pana.png")}
            style={{
              width: 150,
              height: 150,
              alignSelf: "center",
              marginTop: 90,
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            You have no budget yet!
          </Text>
        </View>
        <View style={styles.create}>
          <TouchableOpacity onPress={() => navigation.navigate(CreateBudget)}>
            <Ionicons
              name="md-add-sharp"
              size={40}
              color="white"
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  ad: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1F64FF",
    paddingVertical: 10,
    borderRadius: 20,
  },
  create: {
    backgroundColor: "#1F64FF",
    width: 50,
    height: 50,
    borderRadius: 20,
    borderBottomRightRadius: 2,
    position: "absolute",
    bottom: 0,
    right: 30,
    top: 520,
  },
});
