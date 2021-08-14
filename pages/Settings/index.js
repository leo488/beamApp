import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Footer from '../../components/Footer'

const Settings = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>Settings</Text>
            <Image 
             source={{uri: 'https://stories.freepiklabs.com/storage/35846/settings-rafiki-4051.png'}}
             style={{width: 250, height: 250 }}
            />
            <Text>Settings is rigth on the way </Text>
           

           <Footer navigation={navigation} />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
