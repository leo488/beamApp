import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import FriendList from "../../components/FriendList";
import Footer from "../../components/Footer";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView>
        <View>
          <View style={styles.profileSection}>
            <View style={styles.profiletexts}>
              <Text style={styles.nameText}>bola</Text>
              <Text style={styles.greetingsText}>
                hello there, its a great afternoon🌞
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 60,
              }}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                source={require("./../../assets/beam_profile.png")}
                style={{
                  width: 27,
                  height: 50,
                  marginBottom: 40,
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dashboardSection}>
            <View style={styles.dashboardHeader}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 18 }}
              >
                BeamBank
              </Text>
              <Ionicons
                name="ios-eye"
                size={20}
                color="black"
                style={{ marginRight: 25 }}
              />
            </View>
            <View style={styles.dashboard}>
              <View>
                <Text
                  style={{
                    fontSize: 55,
                    fontWeight: "bold",
                    color: "#fff",
                    alignSelf: "center",
                  }}
                >
                  N10,000
                </Text>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                ></View>
              </View>
            </View>
          </View>

          {/* quick transaction */}
          <View style={styles.quick}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                paddingLeft: 10,
              }}
            >
              Quick transactions
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Transfer")}>
                <View style={styles.alignicon}>
                  <View
                    style={{
                      backgroundColor: "#FFE0DC",
                      padding: 10,
                      borderRadius: 25,
                      borderBottomRightRadius: 1,
                    }}
                  >
                    <MaterialIcons
                      name="transfer-within-a-station"
                      size={28}
                      color="#FF725E"
                    />
                  </View>
                  <Text>Transfer</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Fund")}>
                <View style={styles.alignicon}>
                  <View
                    style={{
                      backgroundColor: "#FFD910",
                      padding: 10,
                      borderRadius: 25,
                      borderBottomRightRadius: 1,
                    }}
                  >
                    <FontAwesome5 name="piggy-bank" size={24} color="#AF9404" />
                  </View>
                  <Text>Fund</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Withdraw")}>
                <View style={styles.alignicon}>
                  <View
                    style={{
                      backgroundColor: "#D9FFFF",
                      padding: 10,
                      borderRadius: 25,
                      borderBottomRightRadius: 1,
                    }}
                  >
                    <FontAwesome5 name="coins" size={24} color="#05A66C" />
                  </View>
                  <Text>withdraw</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Loan")}>
                <View style={styles.alignicon}>
                  <View
                    style={{
                      backgroundColor: "#F9DCFA",
                      padding: 10,
                      borderRadius: 25,
                      borderBottomRightRadius: 1,
                    }}
                  >
                    <FontAwesome name="bank" size={24} color="#EE5BF3" />
                  </View>
                  <Text>Loan</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* ads */}

          {/* friends section */}
          <View style={styles.send}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                paddingLeft: 10,
              }}
            >
              Send money to? 💰
            </Text>
            <View style={{}}>
              <FriendList navigation={navigation} />
            </View>
          </View>
          <View style={styles.todo}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 10,
                paddingLeft: 10,
              }}
            >
              To-do ☺️
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Verify")}>
              <View style={styles.list}>
                <Image source={require("./../../assets/img/pointer.png")} />
                <Text
                  style={{ paddingLeft: 20, fontSize: 16, color: "#ffffff" }}
                >
                  Verify your account
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Budget")}>
              <View style={styles.list}>
                <Image source={require("./../../assets/img/pointer.png")} />
                <Text
                  style={{ paddingLeft: 20, fontSize: 16, color: "#ffffff" }}
                >
                  Make an august wallet
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Budget")}>
              <View style={styles.list}>
                <Image source={require("./../../assets/img/pointer.png")} />
                <Text
                  style={{ paddingLeft: 20, fontSize: 16, color: "#ffffff" }}
                >
                  Take a tour
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Budget")}>
              <View style={styles.list}>
                <Image source={require("./../../assets/img/pointer.png")} />
                <Text
                  style={{ paddingLeft: 20, fontSize: 16, color: "#ffffff" }}
                >
                  Create your first wallet
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 8,
              paddingLeft: 25,
              marginTop: 40,
            }}
          >
            More 📦
          </Text>
          <View style={styles.ad}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://compai.pub/v1/png/baaf76aaf1975be31aa1d8a67408494d1cad3f6395c443b77a6f32520568b3de",
                }}
                style={{ height: 160, width: 300 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{ marginTop: 30, marginBottom: 100, alignSelf: "center" }}
            >
              <Image
                source={{
                  uri: "https://compai.pub/v1/png/db532e81aa235d40bf1152b6047c4913423f979120f61d8669b356c6cdcfef73",
                }}
                style={{ height: 160, width: 300 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 30,
    backgroundColor: "white",
    flex: 1,
    paddingLeft: 5,
    // marginTop: StatusBar.currentHeight,
  },

  img: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 10,
  },

  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },

  profiletexts: {
    justifyContent: "center",
    padding: 10,
    fontFamily: "poppins",
  },

  nameText: {
    fontWeight: "bold",
    fontSize: 45,
    color: "#263238",
  },
  greetingsText: {
    marginTop: 0,
  },
  dashboardSection: {
    marginTop: 5,
    padding: 10,
  },

  dashboardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingLeft: 0,
  },

  dashboard: {
    backgroundColor: "#1F64FF",
    flexDirection: "row",
    marginRight: 5,
    borderRadius: 20,
    borderBottomRightRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  dashboardTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  dashboardimg: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginLeft: -30,
  },
  send: {
    marginTop: 55,
  },
  todo: {
    marginTop: 55,
    // marginBottom: 100,
    paddingLeft: 10,
  },
  list: {
    flexDirection: "row",
    backgroundColor: "#1F64FF",
    width: "95%",
    padding: 10,
    borderRadius: 10,
    borderBottomRightRadius: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
  },
  quick: {
    marginTop: 40,
  },
  alignicon: {
    justifyContent: "center",
    alignItems: "center",
  },
  ad: {
    // marginBottom: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    //  backgroundColor: '#DFE8FC'
  },
});
