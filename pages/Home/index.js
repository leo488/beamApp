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
import { Entypo, Ionicons, MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
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
              <Text style={styles.nameText}>john</Text>
              <Text style={styles.greetingsText}>
                hello there, its a great afternoon🌞
              </Text>
            </View>
           <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
           <Image
              source={{
                uri: "https://compai.pub/v1/png/fe79e4fc81f7f63399a9fa39c77f1f333b9f18f6f500db9473873488c289d2fa",
              }}
              style={styles.img}
            />
           </TouchableOpacity>
          </View>
          <View style={styles.dashboardSection}>
            <View style={styles.dashboardHeader}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 18}}
              >
                Dashboard
              </Text>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
            <View style={styles.dashboard}>
              <View>
                <View style={styles.dashboardTop}>
                  <Ionicons name="stats-chart" size={24} color="#407BFF" />
                  <Text
                    style={{ fontWeight: "bold", marginLeft: 15, marginTop: 5 }}
                  >
                    Beambank
                  </Text>
                </View>
                <Text style={{ fontSize: 55, fontWeight: "bold" }}>
                  N10,000
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <MaterialIcons
                    name="show-chart"
                    size={20}
                    color="#FF725E"
                    style={{
                      paddingRight: 5,
                      backgroundColor: "#eee",
                      padding: 2,
                      marginRight: 3,
                      borderRadius: 5,
                      alignSelf: "center",
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#407BFF",
                      width: "60%",
                      borderRadius: 10,
                      borderBottomRightRadius: 2,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        padding: 2,
                        fontWeight: "bold",
                        fontSize: 15,
                        paddingLeft: 8,
                      }}
                    >
                      this week/ 70%
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={{
                    uri: "https://stories.freepiklabs.com/storage/45193/piggy-bank-rafiki-6687.png",
                  }}
                  style={styles.dashboardimg}
                />
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
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              paddingHorizontal: 10
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
              <View style={styles.alignicon}>
                <View style={{backgroundColor: '#FFE0DC', padding: 10, borderRadius: 10, borderBottomRightRadius: 1}}>
                <MaterialIcons name="transfer-within-a-station" size={24} color="#FF725E"  />
                </View>
              <Text>Transfer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Fund')}>
              <View style={styles.alignicon}>
              <View style={{backgroundColor: '#FFD910', padding: 10, borderRadius: 10, borderBottomRightRadius: 1}}>
              <FontAwesome5 name="piggy-bank" size={24} color="#AF9404" />
              </View>
              <Text>Fund</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Withdraw')}>
              <View style={styles.alignicon}>
              <View style={{backgroundColor: '#D9FFFF', padding: 10, borderRadius: 10, borderBottomRightRadius: 1}}>
              <FontAwesome5 name="money-bill-wave-alt" size={24} color="#05A66C" />
              </View>
              <Text>withdraw</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Loan')}>
              <View style={styles.alignicon}>
              <View style={{backgroundColor: '#F9DCFA', padding: 10, borderRadius: 10, borderBottomRightRadius: 1}}>
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
              <FriendList navigation={navigation}/>
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
            <TouchableOpacity onPress={() => navigation.navigate('Verify')}>
              <View style={styles.list}>
                <Image source={require("./../../assets/img/pointer.png")} />
                <Text
                  style={{ paddingLeft: 20, fontSize: 16, color: "#ffffff" }}
                >
                  Verify your account
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
              <View style={styles.list}>
                <Image source={require("./../../assets/img/pointer.png")} />
                <Text
                  style={{ paddingLeft: 20, fontSize: 16, color: "#ffffff" }}
                >
                  Make an august wallet
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
              <View style={styles.list}>
                <Image source={require("./../../assets/img/pointer.png")} />
                <Text
                  style={{ paddingLeft: 20, fontSize: 16, color: "#ffffff" }}
                >
                  Take a tour
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
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
          <Text  style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 10,
                paddingLeft: 10,
              }}>More...</Text>
          <View style={styles.ad}>
         
            {/* <Image  
              source={{uri: 'https://compai.pub/v1/png/5d6d5512139af06efc007c3e9df5b8af59d3a087513fbe603d5a976e81dc2573'}}
              style={{ height: 150, width: 150, flex: .4,}}
            />
            <View style={{flex: .6}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1F64FF'}}>lock some funds</Text>
              <Text style={{fontSize: 12, }}>save some cash for the rainy
days ahead, it doesnt have to rain before you save</Text>
              <TouchableOpacity>
                <Text style={{backgroundColor: '#1F64FF', color: '#fff', width: 80, padding: 5, borderRadius: 10, borderBottomRightRadius: 1,}}>Start Now!</Text>
              </TouchableOpacity>
            </View> */}
            <TouchableOpacity>
              <Image 
                source={{uri: 'https://compai.pub/v1/png/baaf76aaf1975be31aa1d8a67408494d1cad3f6395c443b77a6f32520568b3de'}}
                style={{height: 150, width: 330}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
         <View style={{marginTop: 30, marginBottom: 100,  alignSelf: 'center'}}>
            <Image 
             source={{uri: 'https://compai.pub/v1/png/db532e81aa235d40bf1152b6047c4913423f979120f61d8669b356c6cdcfef73'}}
             style={{height: 150, width: 330}}
            />
          </View>
         </TouchableOpacity>
        
          
        </View>
      </ScrollView>
      <Footer navigation={navigation}/>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    // paddingTop: 70,
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
    marginTop: -5,
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
    backgroundColor: "#F3FBF7",
    flexDirection: "row",
    borderRadius: 10,
    borderBottomRightRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
  },

  dashboardTop: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
  },

  dashboardimg: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginLeft: -30,
  },
  send: {
    marginTop: 35,
  },
  todo: {
    marginTop: 25,
    // marginBottom: 100,
    paddingLeft: 10
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
  quick:{
    marginTop: 20
  },
  alignicon:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  ad:{
    marginTop: 25,
    // marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     padding:  10,
    //  backgroundColor: '#DFE8FC'
  }
  
});
