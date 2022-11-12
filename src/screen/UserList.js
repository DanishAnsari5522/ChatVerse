import { View, Text, Image, StyleSheet } from 'react-native'


function UserList({navigation}) {
    const seen = 9;
    return (
        <View style={styles.usercard} >
            <View style={styles.usernameandimg}>
                <Image source={require('../../assets/images.png')} style={styles.userprofilepic} />
                <View>
                    <Text style={styles.username} onPress={() => { navigation.navigate("Profile") }}>Danish Ansari</Text>
                    <Text style={styles.lastmsg}>icon hii..</Text>
                </View>

            </View>
            <View>
                <Text style={styles.msgtime}>1 hour ago</Text>
                <View style={styles.fornewmsgpopup}></View>
            </View>
        </View>

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
        borderBottomColor:'#ddddda',
        marginVertical: 10,
        paddingBottom: 10,
        paddingHorizontal:26

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
        backgroundColor: 'pink',
        borderRadius: 10,
        marginLeft: 50,
        // paddingTop:10
        marginTop: 10
    }
})

export default UserList;