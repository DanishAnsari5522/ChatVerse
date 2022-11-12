import { View, Text, Image, StyleSheet,Dimensions } from 'react-native';
import ProfileHeader from '../Header/ProfileHeader'
import {useNavigation} from '@react-navigation/native'

function Profile() {
    const navigate=useNavigation();
    return (
        <View style={styles.main}>
            <ProfileHeader />
            <View style={styles.profileimgandname}>
                <Image resizeMode='contain' source={require('../../assets/images.png')} style={styles.profileimg} />
                <View style={styles.nameandno}>
                    <Text style={styles.name}>Danish Ansari</Text>
                    <Text style={styles.phoneNo}>9262786676</Text>
                </View>
            </View>
            <View style={styles.logoutcomp}>
                <Text style={styles.logout} onPress={()=>{navigate.navigate("Home")}}>Log out</Text>
            </View>
        </View>
    )
}


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        height:windowHeight-40,
        overflow:'hidden',
        marginTop:20,

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
        marginTop:20,
        height:50,
        paddingHorizontal:20
    },
    nameandno:{
        height:40,
    },
    name: {
        fontSize: 20,
        fontWeight:'600',
        marginTop:10
    },
    phoneNo: {
        fontSize: 15,
    },
    logoutcomp:{
        alignSelf:'center',
        position:'absolute',
        bottom:0,
    },
    logout:{
        fontSize:17,
        fontWeight:'700',
        color:'red'
    }

})

export default Profile;