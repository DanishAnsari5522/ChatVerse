
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, } from "react-native"
import { _login } from '../../Config/api.servise';
import logo from "../../../assets/logo.png"
import AsyncStorage from '@react-native-async-storage/async-storage'


function Index({ navigation }) {
    const [phoneNo, setPhoneNo] = useState()
    const [loading, setLoading] = useState(false)
    const Submit = async () => {
        console.log(phoneNo);
        if (!phoneNo) {
            alert("Enter Phone no.")
            return
        }
        if (phoneNo.length != 10) {
            alert("Enter Valid Phone no.")
            return
        }
        const res = await _login(phoneNo)
        if (res?.mobile) {
            // console.log("Login Success");
            await AsyncStorage.setItem("currentUser", JSON.stringify(res))
            navigation.replace("AfterAuth");
        } else {
            alert("Somthing wrong")
        }
    }

    return (
        <View style={styles.main}>
            <Image source={logo} style={styles.logo} />
            <TextInput
                placeholder="Phone No."
                style={styles.input}
                onChangeText={(e) => { setPhoneNo(e) }}
                value={phoneNo}
                maxLength={10}
                keyboardType="number-pad"
            />



            {
                loading ? (
                    <View style={styles.btncomp}>
                        <ActivityIndicator size={20} color="#efefef" />
                    </View>
                ) : (
                    <TouchableOpacity style={styles.btncomp} onPress={Submit}>
                        <Text style={styles.getinbtn}>Get In</Text>
                    </TouchableOpacity>
                )
            }

            <View style={styles.appnames}>
                <Text style={styles.chatverse}>ChatVerse</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
    },
    input: {
        borderBottomWidth: 2,
        marginTop: 50,
        padding: 10,
        width: '80%',
        alignSelf: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 120
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
        marginTop: '90%'

    },
    chatverse: {
        fontSize: 20,
    }

})

export default Index;