import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View><Text>Dark</Text></View>
            <View><Text>ChatVerse</Text></View>
            <TouchableOpacity style={styles.profileimg} onPress={() => { navigation.navigate("Profile") }}>
                <Image source={require('../../assets/images.png')} style={styles.profileimg} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flex: 1,
        paddingHorizontal: 26,
        marginBottom: 5
    },
    profileimg: {
        width: 30,
        height: 30,
        borderRadius: 50
    }
})


export default Header;