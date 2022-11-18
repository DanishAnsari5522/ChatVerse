
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image, Pressable,TouchableOpacity, ToastAndroid } from "react-native";
import { _login } from '../Config/api.servise';
// import { TouchableOpacity } from 'react-native-gesture-handler';

function PhoneNoScreen() {
    const [phoneNo, setPhoneNo] = useState();
    const Submit =async () => {
        console.log(phoneNo);
        if (!phoneNo){
            alert("Enter Phone no.")
            // ToastAndroid("Enter Phone no",ToastAndroid.LONG)
            return
        }
        if(phoneNo.length!=10)
        {
            alert("Enter Valid Phone no.")
            return
        }
        const res=await _login(phoneNo)
        if(res?.mobile)
        {
            console.log("Login Success");
        }else{
            alert("Somthing wrong")
        }

      
    }
    return (
        <View style={styles.main}>
            <Image source={require('../../assets/emptywishlist1.png')} style={styles.logo} />
            <TextInput
                placeholder="Phone No."
                style={styles.input}
                onChangeText={(e) => { setPhoneNo(e) }}
                value={phoneNo}
                maxLength={10}
                keyboardType="number-pad"
            />
            <TouchableOpacity style={styles.btncomp} onPress={Submit}>
                <Text style={styles.getinbtn}>Get In</Text>
            </TouchableOpacity>
            <View style={styles.appnames}>
                <Text style={styles.chatverse}>ChatVerse</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        // backgroundColor:'black'
    },
    input: {
        borderBottomWidth: 2,
        marginTop: 50,
        padding: 10,
        width: '80%',
        alignSelf: 'center'
    },
    logo: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginTop: 100
    },
    btncomp: {
        alignSelf: 'center'
    },
    getinbtn: {
        width: 120,
        height: 40,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 6,
        marginTop: 20,
        color: 'white',
        textAlign: 'center'
    },
    appnames: {
        alignSelf: 'center',
        marginTop: '100%'

    },
    chatverse: {
        fontSize: 20,
    }

})

export default PhoneNoScreen;