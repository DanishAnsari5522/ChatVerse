import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/Ionicons'

function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View><Icon name="moon" color='black' size={25} style={styles.arrowback} /></View>
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
        borderBottomColor: '#c2c8c5',
        paddingHorizontal: 26,
        marginBottom: 10
    },
    profileimg: {
        width: 30,
        height: 30,
        borderRadius: 50
    }
})


export default Header;