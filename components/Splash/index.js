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
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          marginBottom: 20,
        }}
      >
        Done
      </Text>
    </TouchableOpacity>
  );
};

const Skip = ({ ...props }) => {
  return (
    <Text
      style={{
        position: "absolute",
        top: -650,
        right: -200,
        left: 300,
        textTransform: "uppercase",
        color: "#000",
        fontWeight: "bold",
      }}
      {...props}
    >
      SKip
    </Text>
  );
};
const Next = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        style={{ color: "#fff", padding: 35, marginBottom: 10, fontSize: 18 }}
      >
        <MaterialCommunityIcons
          name="skip-next-outline"
          size={30}
          color="#1F64FF"
        />
      </Text>
    </TouchableOpacity>
  );
};

function Splash({ navigation }) {
  return (
    <Onboarding
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
      bottomBarColor={"white"}
      titleStyles={{ fontWeight: "bold", flexDirection: "column" }}
      subTitleStyles={{ justifyContent: "center", alignItems: "center" }}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Register")}
      onDone={() => navigation.navigate("Register")}
      pages={[
        {
          backgroundColor: "#ffffff",
          image: (
            <Image
              source={{
                uri: "https://compai.pub/v1/png/0c38059f05372f2c555fed38e9ba8e33244c4587155a4eb62b5998df7f012bdd",
              }}
              style={styles.img}
            />
          ),
          title: (
            <View style={styles.bg}>
              <Text style={styles.headText}>Stay Happy</Text>
              <Text style={styles.subText}>
                Join the largest {"\n"}student financial community {"\n"}online
                and build your {"\n"}finances.{" "}
              </Text>
            </View>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://compai.pub/v1/png/c4dc851cbfcf0ebbe85ea289b80e0217765701a35036b5f49ece38daa8a9aa11",
              }}
              style={styles.img2}
            />
          ),
          title: (
            <View style={styles.bg2}>
              <Text style={styles.headText}>Spend Smartly</Text>
              <Text style={styles.subText}>
                Spend smart with the {"\n"}budget manager that {"\n"}has all
                your needs {"\n"}in check{" "}
              </Text>
            </View>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://compai.pub/v1/png/5f3ff1d6c6f89e6677ce38e336322307bf5fbf3c05608ad3e0bee85e485a0475",
              }}
              style={styles.img3}
            />
          ),
          title: (
            <View style={styles.bg3}>
              <Text style={styles.headText}>get quick cash</Text>
              <Text style={styles.subText}>
                Get instant access {"\n"}to quick loans to {"\n"}solve emergency
                needs {"\n"}on the go.{" "}
              </Text>
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
    marginTop: 20,
    width: 300,
    height: 350,
  },
  img2: {
    marginTop: 0,
    width: 190,
    height: 200,
    marginTop: 160,
  },
  img3: {
    marginTop: 0,
    width: 330,
    height: 340,
    marginTop: 180,
  },
  bg: {
    backgroundColor: "#1F64FF",
    flex: 0.4,
    width: "100%",
    padding: 10,
  },
  bg2: {
    backgroundColor: "#fd7289",
    flex: 0.4,
    width: "100%",
    padding: 10,
  },
  bg3: {
    backgroundColor: "#ffbe9d",
    flex: 0.4,
    width: "100%",
    padding: 10,
  },
  headText: {
    fontSize: 42,
    fontWeight: "bold",
    justifyContent: "center",
    textTransform: "uppercase",
    color: "#fff",
    textDecorationLine: "underline",
  },
  subText: {
    fontSize: 20,
    color: "#fff",
  },
});
