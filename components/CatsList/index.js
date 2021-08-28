import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ListView } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { planBudget } from "../../redux/budgetCategorySlice";

export default function FriendList({navigation,}) {

  const dispatch = useDispatch()
  const datas = useSelector((state) => state.budgetCategory.budgetCat)
  // console.log(datas)
  const handleCategoryPress = () => {
     dispatch(planBudget({title: item.title, id: item.id, image: item.image})) 
  }

  return (
    <FlatList
      horizontal
      data={datas}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
       <TouchableOpacity onPress={() => handleCategoryPress} >
            <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 10
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
            style={{height:40, width: 40}}
          />
          </View>
          <Text style={{ fontSize: 12, color: '#000' }}>{item.title}</Text>
        </View>
       </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
