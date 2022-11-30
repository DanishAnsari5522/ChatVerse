import React,{useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity,FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import Header from "./Header";
import { AppContext } from '../../context/AppContext'
import Icon from '@expo/vector-icons/AntDesign'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../config/firebase-config'
import UserList from './UserList';


function Index() {
    const navigation = useNavigation();
    const { theme, currentUser } = useContext(AppContext)
    const [data, setData] = useState([])

    useEffect(() => {
        if (currentUser?.mobile) {
            const chatRef = doc(db, "chats", currentUser.mobile);
            const unsub = onSnapshot(chatRef, async (doc) => {
                doc.exists() && setData(Object.values(doc.data())?.sort((a, b) => b?.date - a?.date))
            })
            return () => {
                unsub()
            }
        }
    }, [currentUser])
    return (
        <View style={styles.mainhome}>
            {/* for Home Header */}
            <View style={styles.head}>
                <Header />
            </View>

            <TouchableOpacity style={styles.addicon} onPress={() => { navigation.navigate("Search") }}>
               <Icon name="plus" size={22} color="white" />
            </TouchableOpacity>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (<UserList item={item} />)}
            />

        </View>
    )
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainhome: {
        marginTop: 20,
        height: windowHeight,
        paddingTop: Constants.statusBarHeight
    },
    addicon: {
        position: 'absolute',
        top: windowHeight - 70,
        right: 20,
        zIndex: 99,
        width: 55,
        height: 55,
        backgroundColor: '#a567be',
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center'
    },

    head: {

    },
    list: {
        marginTop: 0,
        height: windowHeight,
    }

})

export default Index;