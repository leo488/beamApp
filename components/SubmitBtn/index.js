
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, TextInput } from 'react-native';


const SubmitBtn = ({navigation, btnText, footnote, linkText, link}) => {

    const [text, onChangeInput] = useState('')

    return(
       <View>
            <View style={styles.btn}>
            <TouchableOpacity>
                <Text style={{color: '#fff',fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',}}>{btnText}</Text>
            </TouchableOpacity>
           
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', fontSize: 25}}> 
            <Text style={{fontWeight: 'bold'}}>{footnote}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(link)}><Text>{linkText}</Text></TouchableOpacity>
        </View>
       </View>
    )
}

export default SubmitBtn;

const styles = StyleSheet.create({
    btn:{
        // flex: 1,
        marginTop: 40,
        padding: 10,
        margin: 20,
        backgroundColor: '#1F64FF',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 15,
        borderBottomRightRadius: 5
        
    },
    
})