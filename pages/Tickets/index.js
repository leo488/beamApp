import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Footer from '../../components/Footer'

const Tickets = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>Tickets</Text>
            <Text style={{fontWeight: 'bold'}}>Comming Soon! 🎉🥳 </Text>
           
           <Footer navigation={navigation} />
        </View>
    )
}

export default Tickets

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
