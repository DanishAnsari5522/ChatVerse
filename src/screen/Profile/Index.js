import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import profile from "../../../assets/images.png";
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';

function Index() {
    const navigate = useNavigation();
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const data = async () => {
        let currentUser = await AsyncStorage.getItem("currentUser");
        currentUser = JSON.parse(currentUser);
        console.log(currentUser.name);
        setName(currentUser.name);
        setPhoneNo(currentUser.mobile)
    }

    data();
    const changeCurrentUser = async (data) => {
        await AsyncStorage.setItem("currentUser", JSON.stringify(data))
        // setCurrentUser(data)
    }

    const logout = () => {
        changeCurrentUser({})
        navigation.reset({
            index: 1,
            routes: [{ name: "Splash" }]
        })
    }


    return (
        <View style={styles.main}>
            <Header />
            <View style={styles.profileimgandname}>
                <Image resizeMode='contain' source={profile} style={styles.profileimg} />
                <View style={styles.nameandno}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.phoneNo}>{phoneNo}</Text>
                </View>
            </View>
            <View style={styles.logoutcomp}>
                <Text style={styles.logout} onPress={logout}>Log out</Text>
            </View>

        </View>
    )
}


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        height: windowHeight - 40,
        overflow: 'hidden',
        marginTop: 20,

    },
    profileimg: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 10
    },
    profileimgandname: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        height: 50,
        paddingHorizontal: 20
    },
    nameandno: {
        height: 40,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10
    },
    phoneNo: {
        fontSize: 15,
    },
    logoutcomp: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
    logout: {
        fontSize: 17,
        fontWeight: '700',
        color: 'red'
    }

})

export default Index;