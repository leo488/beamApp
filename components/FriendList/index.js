import React from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function FriendList({navigation}) {
  datas = [
    
    { name: <Text>Jeeves</Text>, image:  'https://compai.pub/v1/png/d6a4befff63c0a460a8a721cfae0ada877fab3c89bbbbdf507e352f086abb9d6', id: "2" },
    { name: <Text>Teo</Text>, image:  'https://compai.pub/v1/png/3747bfe7dfb5aeea7cfff68986c23697679860a06eb2dd8bd085545f3baaaf85', id: "20" },
    { name: "Leo", image:  'https://compai.pub/v1/png/c3758e3b64226a24af7e12ea1c1c95f49e3c188feaee062455ce50b17d6948d6', id: "3" },
      { name: "John", image:  'https://compai.pub/v1/png/7eabf0708a79c05fa01192d7e1d0dc46832c56ac3a462c9af3d258f070dd7d31', id: "38" },
    { name: "john", image:  'https://compai.pub/v1/png/cf049b4cb8c057433964dfe8e751cfbedb3776dc307c9e8e3c381a0b9521c236', id: "39" },
   
  ];

  return (
    <FlatList
      horizontal
      data={datas}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
       <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
            <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 15
          }}
        >
         
          <View
            style={{
              width: 45,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
           <Image
            source={{uri: item.image}}
            style={{height: 54, width: 54, }}
           />
          </View>
          <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.name}</Text>
        </View>
       </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
