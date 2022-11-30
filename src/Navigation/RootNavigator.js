import React from "react";
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screen/Splash";
import Auth from '../screen/Auth/Index';
import AfterAuth from "../screen/Auth/AfterAuth";
import Home from "../screen/Home/Index"
import Profile from "../screen/Profile/Index";
import Search from "../screen/Search/Index"
import Message from "../screen/Message/Index"

const Stack = createNativeStackNavigator();

function RootNavigator() {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name='Login' component={Auth} />
                    <Stack.Screen name='AfterAuth' component={AfterAuth} options={{ animation: "slide_from_right" }} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="Message" component={Message} />



                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({

})

export default RootNavigator;