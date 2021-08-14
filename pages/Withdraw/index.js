import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const Withdraw = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>Withdraw</Text>
            <Image 
             source={{uri: 'https://stories.freepiklabs.com/storage/26842/404-error-with-a-cute-animal-rafiki-2842.png'}}
             style={{width: 250, height: 250 }}
            />
            <Text>Sorry! Page not ready</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{color: 'blue'}}>Go back</Text></TouchableOpacity>
        </View>
    )
}

export default Withdraw

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
