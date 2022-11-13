import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import ChatBoxHeader from "../Header/ChatBoxHeader";
import Constants from "expo-constants";


function ChatBox() {
    const a = 1;
    return (
        <View style={styles.main}>
            <View>
                <ChatBoxHeader />
            </View>


            <ScrollView style={styles.chatarea}>

                <View style={styles.msgsendcomp}>
                    <Text style={styles.msgsend}>
                        TextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.timesend}>1m ago</Text>
                    </View>
                </View>

                <View style={styles.msgresivedcomp}>
                    <Text style={styles.msgresived}>
                        Hii..
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.time}>1m ago</Text>
                        {a == 1 ? <Text style={styles.seenornot}><Icon name="checkmark-done" color='#96d7c6' size={15} style={styles.arrowback} /></Text> : <Text style={styles.seenornot}><Icon name="checkmark" color='white' size={15} style={styles.arrowback} /></Text>}
                    </View>
                </View>


                <View style={styles.msgresivedcomp}>
                    <Text style={styles.msgresived}>
                        Two methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.focus() and .blur() that will focus or blur the TextInput programmatically
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.time}>1m ago</Text>
                        {a == 1 ? <Text style={styles.seenornot}><Icon name="checkmark-done" color='#96d7c6' size={15} style={styles.arrowback} /></Text> : <Text style={styles.seenornot}><Icon name="checkmark" color='white' size={15} style={styles.arrowback} /></Text>}
                    </View>
                </View>



                <View style={styles.msgsendcomp}>
                    <Text style={styles.msgsend}>
                        Hiii...
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.timesend}>1m ago</Text>
                    </View>
                </View>
                {/* Demo start */}
                <View style={styles.msgsendcomp}>
                    <Text style={styles.msgsend}>
                        TextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.timesend}>1m ago</Text>
                    </View>
                </View>

                <View style={styles.msgresivedcomp}>
                    <Text style={styles.msgresived}>
                        Hii..
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.time}>1m ago</Text>
                        {a == 1 ? <Text style={styles.seenornot}><Icon name="checkmark-done" color='#96d7c6' size={15} style={styles.arrowback} /></Text> : <Text style={styles.seenornot}><Icon name="checkmark" color='white' size={15} style={styles.arrowback} /></Text>}
                    </View>

                </View>


                <View style={styles.msgresivedcomp}>
                    <Text style={styles.msgresived}>
                        Two methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.focus() and .blur() that will focus or blur the TextInput programmatically
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.time}>1m ago</Text>
                        {a == 1 ? <Text style={styles.seenornot}><Icon name="checkmark-done" color='#96d7c6' size={15} style={styles.arrowback} /></Text> : <Text style={styles.seenornot}><Icon name="checkmark" color='white' size={15} style={styles.arrowback} /></Text>}
                    </View>
                </View>



                <View style={styles.msgsendcomp}>
                    <Text style={styles.msgsend}>
                        Hiii...
                    </Text>
                    <View style={styles.seentime}>
                        <Text style={styles.timesend}>1m ago</Text>
                    </View>
                </View>

                {/* demo End */}

            </ScrollView>

            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder='write your message'
                />
                <TouchableOpacity style={styles.sendbtn}><Icon name="send" color='black' size={35} style={styles.arrowback} /></TouchableOpacity>
            </View>

        </View>
    )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    main: {
        paddingTop: Constants.statusBarHeight,
    },
    chatarea: {
        height: height - 129,
        backgroundColor: '#e7e7e7',
    },
    footer: {
        position: 'absolute',
        bottom: -60,
        marginTop: 30,
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
