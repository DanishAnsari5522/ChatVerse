import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import Header from "./Header";
import UserList from "./UserList";

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.mainhome}>
            {/* for Home Header */}
            <View style={styles.head}>
                <Header />
            </View>

            <TouchableOpacity style={styles.addicon} onPress={() => { navigation.navigate("AddUser") }}>
                <Text style={styles.add}>+</Text>
            </TouchableOpacity>
            {/* UserList Start*/}
            <UserList />
            {/* UseList End */}

        </View>
    )
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainhome: {
        marginTop: 20,
        height: windowHeight,
        paddingTop: Constants.statusBarHeight
    },
    addicon: {
        position: 'absolute',
        top: windowHeight - 70,
        right: 20,
        zIndex: 99,
        width: 55
    },
    add: {
        fontSize: 20,
        height: 55,
        backgroundColor: '#a567be',
        textAlign: 'center',
        color: 'white',
        borderRadius: 50,
        paddingTop: 9

    },
    head: {

    },
    list: {
        marginTop: 0,
        height: windowHeight,
    }

})

export default HomeScreen;