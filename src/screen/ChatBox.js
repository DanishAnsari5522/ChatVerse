import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import ChatBoxHeader from "../Header/ChatBoxHeader";
import Constants from "expo-constants";

const data = [
    {
        id: 1,
        msgsendby: 'sender',
        message: 'hiii..',
        msgtime: '1m ago',
        seen: 1

    },
    {
        id: 2,
        msgsendby: 'reciver',
        message: 'TextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transpare',
        msgtime: '1m ago',

    },
    {
        id: 3,
        msgsendby: 'reciver',
        message: 'hiii..',
        msgtime: '2m ago',

    },
    {
        id: 4,
        msgsendby: 'sender',
        message: 'TextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transpare',
        msgtime: '2m ago',
        seen: 0

    },
    {
        id: 5,
        msgsendby: 'reciver',
        message: 'hiii..',
        msgtime: '2m ago',
        
    },
    {
        id: 6,
        msgsendby: 'sender',
        message: 'TextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transpare',
        msgtime: '2m ago',
        seen: 0

    },
]


function ChatBox() {
    const a = 1;
    const msgsendby = "sender";

    const renderItem = ({ item }) => (
        <View>
            {
                msgsendby == item.msgsendby ?
                    <View style={styles.msgresivedcomp}>
                        <Text style={styles.msgresived}>
                            {item.message}
                        </Text>
                        <View style={styles.seentime}>
                            <Text style={styles.time}>{item.msgtime}</Text>
                            {a == item.seen ? <Text style={styles.seenornot}><Icon name="checkmark-done" color='#96d7c6' size={15} style={styles.arrowback} /></Text> : <Text style={styles.seenornot}><Icon name="checkmark" color='white' size={15} style={styles.arrowback} /></Text>}
                        </View>
                    </View>
                    :
                    <View style={styles.msgsendcomp}>
                        <Text style={styles.msgsend}>
                            {item.message}
                        </Text>
                        <View style={styles.seentime}>
                            <Text style={styles.timesend}>{item.msgtime}</Text>
                        </View>
                    </View>
            }
        </View>
    )


    return (
        <KeyboardAvoidingView>
            <View style={styles.main}>

                <View>
                    <ChatBoxHeader />
                </View>

                <View style={styles.flatlistdata}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                    />
                </View>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder='write your message'
                    />
                    <TouchableOpacity style={styles.sendbtn}><Icon name="send" color='black' size={35} style={styles.arrowback} /></TouchableOpacity>
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
        backgroundColor: '#e7e7e7'
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
    }


})


export default ChatBox;
