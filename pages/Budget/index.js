
 import React from 'react'
 import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Footer from '../../components/Footer'
 
 const Budget = ({navigation}) => {
     return (
         <View style={styles.container}>
             <Text style={{fontWeight: 'bold'}}>Budget Manager</Text>
            
            <Footer navigation={navigation} />
         </View>
     )
 }
 
 export default Budget
 
 const styles = StyleSheet.create({
     container:{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: "#fff"
     }
 })
 
 
 