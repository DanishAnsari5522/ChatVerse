import { View, Text, StyleSheet,Dimensions,TextInput, TouchableOpacity} from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'

function AddUserHeader() {
    const navigation=useNavigation();
    return (
        <View>
            <View style={styles.headercomp}>
                <View style={styles.ds}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}><Icon name="arrow-back" color='gray' size={25} style={styles.arrowback} /></TouchableOpacity>
                    <TextInput placeholder="Search Name" style={styles.searchbox}></TextInput>
                </View>
            </View>
        </View>
    )
}

const width=Dimensions.get('window').width;

const styles = StyleSheet.create({
    headercomp: {
        width:width,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor:'#c2c8c5',
        padding:0,
        marginBottom:10,
        paddingHorizontal:10
    },
    ds:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    arrowback:{
        marginRight:0,
        color:'black',
    },
    headernamee: {
        fontSize: 16,
        fontWeight:'bold',
        marginLeft:10
    },
    searchbox:{
        width:width-70,
        borderWidth:1,
        paddingLeft:10,
        paddingTop:1,
        paddingBottom:1,
        borderRadius:8,
        fontSize:13,
        marginLeft:10,
    }

})

export default AddUserHeader;