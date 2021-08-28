import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { MaterialIcons } from "@expo/vector-icons";

const Done = ({ ...props }) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: 10,
      }}
      {...props}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: "#1F64FF",
          margin: 15,
          marginBottom: 0,

        }}
      >
      
      </Text>
    </TouchableOpacity>
  );
};

const Skip = ({ ...props }) => {
  return (
    <Text
      style={{
      
        textTransform: "capitalize",
        color: "#fff",
        
        paddingLeft: 25,
        fontSize: 18,
      }}
      {...props}
    >
      Skip
    </Text>
  );
};
const Next = ({ ...props }) => {
  return (
    <TouchableOpacity {...props} style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingRight: 20, marginTop: 8 }}>
      <Text
        style={{ color: "#fff", padding: 35, marginBottom: 10, fontSize: 18, justifyContent: 'center', alignItems: 'center' }}
      >Next
       
      </Text>
      <MaterialIcons name="arrow-right-alt" size={24} color="white"  style={{marginLeft: -35, marginBottom: 6}}/>
    </TouchableOpacity>
  );
};

function Splash({ navigation }) {
  return (
    <Onboarding
    bottomBarHighlight={false}
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      containerStyles={{
        paddingTop: 0,
        marginTop: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
      imageContainerStyles={{
        flex: 0.6,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      bottomBarHeight={60}
      
      titleStyles={{ fontWeight: "bold", flexDirection: "column" }}
      subTitleStyles={{ justifyContent: "center", alignItems: "center" }}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Register")}
      onDone={() => navigation.navigate("Register")}
      pages={[
        {
          backgroundColor: "#FFBE97",
          image: (
            <Image
              source={require('./../../assets/Company-pana.png')}
              style={styles.img}
            />
          ),
          title: (
            <View style={styles.bg}>
              <Text style={styles.headText}>Stay Happy</Text>
              <Text style={styles.subText}>
                Join the largest student financial community online
                and build your finances.
              </Text>
            </View>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#FFAF4E",
          image: (
            <Image
            source={require('./../../assets/Financeapp-pana.png')}
              style={styles.img2}
            />
          ),
          title: (
            <View style={styles.bg2}>
              <Text style={styles.headText}>Spend Smartly</Text>
              <Text style={styles.subText}>
                Spend smart with the budget manager that has all
                your needs in check
              </Text>
            </View>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#1FB090",
          image: (
            <Image
            source={require('./../../assets/Banknote-pana.png')}
              style={styles.img3}
            />
          ),
          title: (
            <View style={styles.bg3}>
              <Text style={styles.headText}>get quick cash</Text>
              <Text style={styles.subText}>
                Get instant access to quick loans to solve emergency
                needson the go.
              </Text>

              <TouchableOpacity style={{marginTop: 50,marginHorizontal: 15, backgroundColor: '#fff', borderRadius: 40, borderBottomRightRadius: 5, height: 55, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('Signup')}>
                <Text  style={{fontSize: 18}}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ),
          subtitle: "",
        },
      ]}
    />
  );
}

export default Splash;

const styles = StyleSheet.create({
  img: {
    marginTop: 250,
    width: 350,
    height: 350,
  },
  img2: {
    marginTop: 250,
    width: 230,
    height: 230,
  
  },
  img3: {
    
    width: 250,
    height: 250,
    marginTop: 250,
  },
  bg: {
   
    flex: 0.4,
    width: "100%",
    padding: 10,
  },
  bg2: {
 
    flex: 0.4,
    width: "100%",
    padding: 10,
  },
  bg3: {
  
    flex: 0.4,
    width: "100%",
    padding: 10,
  },
  headText: {
    fontSize: 36,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: 'center',
    textTransform: "capitalize",
    color: "#fff",
    textAlign: 'center'

  },
  subText: {
    fontSize: 17,
    color: "#fff",
    textAlign: 'center'
  },
});
