import { View, Text, StyleSheet, Dimensions, TouchableOpacity ,Image} from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

function ChatBoxHeader() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.headercomp}>
                <View style={styles.ds}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><Icon name="arrow-back" color='gray' size={25} style={styles.arrowback} /></TouchableOpacity>
                    <Image source={require('../../assets/images.png')} style={styles.profileimage}/>
                    <View style={styles.nameandlastseen}>
                        <Text style={styles.headernamee}> User Name</Text>
                        <Text style={styles.lastseen}>last seen 10m ago</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headercomp: {
        width: width,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#c2c8c5',
        padding: 0,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        marginTop: 20,
        paddingHorizontal: 20
    },
    ds: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileimage:{
       width:40,
       height:40,
       borderRadius:50
    },
    arrowback: {
        marginRight: 5,
        color: 'black'
    },
    headernamee: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 0
    },
    nameandlastseen:{
        marginLeft:10
    },
    lastseen: {
        fontSize: 12,
        marginTop: -5
    }


})

export default ChatBoxHeader;