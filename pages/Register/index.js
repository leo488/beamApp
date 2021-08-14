
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

// import files
import Form from './../../components/Form'

// import libraries
import { Ionicons } from '@expo/vector-icons';
import SubmitBtn from '../../components/SubmitBtn';
import { ScrollView } from 'react-native-gesture-handler';


const Register = ({navigation}) => {
    
    return(
        
            <View style={styles.container}>
                <ScrollView >
           <View style={styles.icon}>
       <TouchableOpacity >
       <Ionicons name="chevron-back" size={40} color="grey" />
       </TouchableOpacity>
           </View>
          <View style={styles.header}>
          <Text style={styles.headTextBlue}>Welcome back!😊</Text>
          <Text style={styles.subHead}>Login in to continue</Text>
          </View>
          <View style={styles.formDIv}>
          <Form 
                question={'Email '}
                icon={<Ionicons name="checkmark-done-circle" size={20} color="black" style={{position: 'absolute', right: 30, top: 45}}/>}
            />
            <Form 
                question={'Password'}
                icon={<Ionicons name="ios-eye" size={20} color="black" style={{position: 'absolute', right: 30, top: 45}} />}
            />
            <SubmitBtn
                btnText={'Sign in'}
                footnote={'I\'m new here'}
                linkText={'signup'}
                link={'Signup'}
                navigation={navigation}
            />
          </View>
          </ScrollView>
       </View>
       
    )
}

export default Register;
// 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       paddingTop: 20,
      },
    icon:{
        padding: 20,
        paddingLeft: 10
    },
    header:{
        paddingLeft: 25 
    },
    headTextBlue:{
        color: '#1F64FF',
        fontSize: 39,
        paddingTop: 20,
        fontWeight: 'bold',
        
    },
    subHead:{
        color: '#555',
        marginTop: -5,
        fontSize: 20
    },
    formDIv:{
        paddingTop: 20
    },
    

    
})