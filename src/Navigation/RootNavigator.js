import React from "react";
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import AddUser from "../screen/AddUser";
import ChatBox from "../screen/ChatBox";


const Stack = createNativeStackNavigator();

function RootNavigator() {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="AddUser" component={AddUser} />
                    <Stack.Screen name="ChatBox" component={ChatBox} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({

})

export default RootNavigator;