import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/Ionicons'
import logo from "../../../assets/logo.png";
import profile from "../../../assets/images.png";
function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View><Icon name="moon" color='black' size={25} style={styles.arrowback} /></View>
            <View style={styles.logoname}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.name}>ChatVerse</Text>
            </View>
            <TouchableOpacity style={styles.profileimg} onPress={() => { navigation.navigate("Profile") }}>
                <Image source={profile} style={styles.profileimg} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#c2c8c5',
        paddingHorizontal: 26,
        marginBottom: 10,
        paddingBottom:10
        // backgroundColor:'red'
    },
    profileimg: {
        width: 30,
        height: 30,
        borderRadius: 50
    },
    logoname:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:-10
    },
    logo:{
        width:45,
        height:45
    },
    name:{
        fontSize:18
    }
})


export default Header;