import { View, Text, Image } from 'react-native'
import React, { useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import logo from '../../assets/logo.png'
export default function Splash({ navigation }) {
    const getCurrentUser = async () => {
        const user = await AsyncStorage.getItem("currentUser")
        const u = JSON.parse(user)
        setTimeout(() => {
            if (u?.mobile) {
                if (u.name) {
                    navigation.replace("Home")
                } else {
                    navigation.replace("AfterAuth")
                }
            } else {
                navigation.replace("Login")
                // navigation.replace("SyncContacts")

            }
        }, 2500);
    }
    useEffect(() => {
        getCurrentUser()
    }, [])
    return (
        <View style={{ backgroundColor:"white", flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Image source={logo} resizeMode="cover" style={{ height: 90, width: 90 }} />
            <Text style={{ color: "black", fontWeight: "700", fontSize: 20, position: "absolute", bottom: 60 }}>ChatVerse</Text>
        </View>
    )
}