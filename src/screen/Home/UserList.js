import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profile from "../../../assets/images.png";
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { AppContext } from '../../context/AppContext'
import { formatDate } from '../../Config/api.servise'



function UserList({ item }) {
    const { theme, currentUser } = useContext(AppContext)
    const navigation = useNavigation()
    const [recieved, setRecieved] = useState(false)
    useEffect(() => {
        if (item.sender != currentUser?.mobile && (!item.seen)) {
            setRecieved(true);
        } else {
            setRecieved(false)
        }
    }, [item])



    return (
        <>
            <TouchableOpacity style={styles.usercard} onPress={() => { navigation.navigate("Message", { user: item.from }) }}>
                <View style={styles.usernameandimg}>
                    <Image source={profile} style={styles.userprofilepic} />
                    <View>
                        <Text style={styles.username}>{item.from.name}</Text>
                        <Text style={styles.lastmsg}>{item.lastmsg}</Text>
                        {
                            item?.typing ? (
                                <Text style={{ color: theme.colors.secondary, fontSize: 13 }}>typing...</Text>
                            ) : (
                                <View style={{ flexDirection: "row", alignItems: "center", }}>
                                    {
                                        (item.sender == currentUser?.mobile) &&
                                        <Icon style={{ marginRight: 5 }} name={item.seen ? 'checkmark-done' : 'checkmark'} size={12} color={item.seen ? "dodgerblue" : theme.colors.textColor} />
                                    }
                                    <Text numberOfLines={1} style={[{ fontSize: 13, color: recieved ? theme.colors.secondary : theme.colors.textColor, flex: 1 }]}>{item.message}</Text>
                                </View>
                            )
                        }
                    </View>

                </View>
                <View>
                    <Text style={styles.msgtime}>{item.msgtime}</Text>
                    <View style={styles.fornewmsgpopup}></View>
                </View>
            </TouchableOpacity>
        </>

    )
}

const styles = StyleSheet.create({
    usercard: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        marginVertical: 10,
        paddingBottom: 10,
        paddingHorizontal: 26

    },
    usernameandimg: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userprofilepic: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10
    },
    username: {
        fontSize: 18
    },
    lastmsg: {
        fontSize: 12,
        marginLeft: 4
    },
    msgtime: {
        fontSize: 14,
    },
    fornewmsgpopup: {
        width: 9,
        height: 9,
        backgroundColor: '#a567be',
        borderRadius: 10,
        marginLeft: 50,
        // paddingTop:10
        marginTop: 10
    }
})

export default UserList;