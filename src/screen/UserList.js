import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const data = [
    {
        id: 1,
        username: "Danish Ansari",
        lastmsg: "hii..",
        msgtime: "1m ago"
    },
    {
        id: 2,
        username: "Deepak Kumar",
        lastmsg: "haaa bhai..",
        msgtime: "2m ago"
    },
    {
        id: 3,
        username: "Ashutosh Tiwari",
        lastmsg: "kysa h",
        msgtime: "3m ago"
    },
    {
        id: 4,
        username: "Shubham Mishra",
        lastmsg: "kysa h",
        msgtime: "4m ago"
    },
    {
        id: 5,
        username: "Arvind Kumar",
        lastmsg: "kysa h",
        msgtime: "5m ago"
    },
    {
        id: 6,
        username: "Anjul Kumari",
        lastmsg: "kysa h",
        msgtime: "6m ago"
    },


]

function UserList() {
    const seen = 9;
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.usercard} onPress={() => { navigation.navigate("ChatBox") }}>
            <View style={styles.usernameandimg}>
                <Image source={require('../../assets/images.png')} style={styles.userprofilepic} />
                <View>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.lastmsg}>{item.lastmsg}</Text>
                </View>

            </View>
            <View>
                <Text style={styles.msgtime}>{item.msgtime}</Text>
                <View style={styles.fornewmsgpopup}></View>
            </View>
        </TouchableOpacity>
    )



    return (
        <>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
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