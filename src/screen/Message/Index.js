import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Keyboard, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import Constants from "expo-constants";
import Header from "./Header";
import { AppContext } from '../../context/AppContext'
import { createCombinedId, formatDate, _saveTypingStatus, _sendMessage } from '../../Config/api.servise'
import { doc, getDoc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from "../../Config/firebase-config"

function Index({ navigation, route }) {
    const a = 1;
    const msgsendby = "sender";

    const { currentUser } = useContext(AppContext)
    const [status, setStatus] = useState(null)
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        const myId = currentUser.mobile
        const userId = route.params.user.mobile
        const id = createCombinedId(myId, userId)
        const unsub = onSnapshot(doc(db, "conversation", id), async (doc) => {
            if (doc.exists()) {
                if (!doc.metadata.hasPendingWrites) {
                    markAsSeen(id)
                    setData(Object.values(doc.data())?.sort((a, b) => b?.date - a?.date))
                }
            }
        })
        return () => {
            unsub()
        }
    }, [])

    const markAsSeen = async (id) => {
        const userId = route.params.user.mobile
        const myId = currentUser.mobile

        const statusRef = doc(db, "status", id)
        const chatRef = doc(db, "chats", userId)

        const data = await getDoc(statusRef)
        if (data.exists()) {
            await updateDoc(statusRef, { [userId + ".seen"]: serverTimestamp() })
            const res = await getDoc(chatRef)
            const d = res.data()
            if (d[id]?.sender == userId) {
                await updateDoc(doc(db, "chats", myId), {
                    [id + ".seen"]: true
                })
                await updateDoc(doc(db, "chats", userId), {
                    [id + ".seen"]: true
                })
            }
        }
    }


    useEffect(() => {
        const myId = currentUser.mobile
        const userId = route.params.user.mobile
        const id = createCombinedId(myId, userId)
        const unsub = onSnapshot(doc(db, "status", id), async (doc) => {
            if (doc.exists()) {
                setStatus(doc.data()[myId]);
            }
        })
        return () => {
            unsub()
        }
    }, [])

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                saveTypingStatus(true)
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                saveTypingStatus(false)
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const saveTypingStatus = async (status) => {
        const myId = currentUser.mobile
        const userId = route.params.user.mobile
        await _saveTypingStatus(status, myId, userId)
    }

    const send = async () => {
        if (message) {
            const mess = {
                from: currentUser,
                to: route.params.user,
                message,
                seen: false,
                date: serverTimestamp()
            }
            setData([{ ...mess }, ...data])
            setMessage('')
            await _sendMessage(mess)
        }
    }


    const renderItem = ({ item }) => {
        let s = (item.from.mobile == currentUser.mobile)
        let dt = formatDate(new Date(item.date?.seconds * 1000))

        return (
            <>

                <View style={
                    s ?
                        [styles.msgBox, { backgroundColor: "#a567be" }] :
                        [styles.yourMsgBox, { backgroundColor: "white" }]
                }>
                    <Text style={[styles.text, { color: s ? "#efefef" : "black", marginBottom: 5 }]}>{item.message}</Text>
                    <View style={{ position: "absolute", bottom: 4, right: 4, flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 8 }}>{dt ? dt : 'now'}</Text>
                        {
                            s &&
                            <Icon style={{}} name={item.date <= status?.seen ? 'checkmark-done' : 'checkmark'} size={12} color={item.date <= status?.seen ? "skyblue" : "gainsboro"} />
                        }
                    </View>
                </View>
            </>
        )
    }


    return (
        <KeyboardAvoidingView>
            <View style={styles.main}>

                <View>
                    <Header user={route.params.user} status={status} />
                </View>

                <View style={styles.flatlistdata}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder='write your message'
                        multiline={true}
                        value={message}
                        onChangeText={e => setMessage(e)}
                    />
                    <TouchableOpacity style={styles.sendbtn} onPress={send}>
                        <Icon name="send" color='black' size={35} style={styles.arrowback} />
                    </TouchableOpacity>
                </View>


            </View>
        </KeyboardAvoidingView>
    )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    main: {
        paddingTop: Constants.statusBarHeight,
    },
    flatlistdata: {
        height: height - 130,
        backgroundColor: '#e7e7e7',
        paddingHorizontal:10
    },
    footer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center'
    },
    input: {
        width: width - 70,
        height: 50,
        paddingLeft: 30,
        color: 'black'
    },
    sendbtn: {
        height: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },
    arrowback: {
        height: 50,
        textAlign: 'center',
    },
    // for message 


    msgsendcomp: {
        backgroundColor: 'white',
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginRight: 70
    },
    msgresivedcomp: {
        backgroundColor: '#a567be',
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        color: 'white',
        marginLeft: 70
    },
    msgsend: {
        fontSize: 14,
        letterSpacing: 0.1
    },
    msgresived: {
        color: 'white',
        fontSize: 14,
        letterSpacing: 0.05,
    },
    // seen time
    seentime: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    time: {
        fontSize: 11,
        color: '#e7e7e7',
        marginLeft: 20
    },
    timesend: {
        fontSize: 11,
        color: 'black',
        marginLeft: 20
    },
    seenornot: {
        fontSize: 10,
        color: '#e7e7e7'
    },

    // from Arvind
    msgBox: {
        maxWidth: "90%",
        alignSelf: "flex-end",
        padding: 8,
        marginVertical: 5,
        borderRadius: 5,
        paddingHorizontal: 15,
        minWidth: 100
    },
    yourMsgBox: {
        maxWidth: "90%",
        alignSelf: "flex-start",
        padding: 8,
        marginVertical: 5,
        borderRadius: 5,
        paddingHorizontal: 15,
        minWidth: 100
    },


})


export default Index;
