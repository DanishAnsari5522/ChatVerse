import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "./Header";
import UserList from "./UserList";
import AddUser from "./AddUser";
function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.mainhome}>
                {/* for Home Header */}
                <Header />
                {/* UserList */}
                <UserList />
                <UserList />
      




                {/* <Profile /> */}
                {/* <AddUser /> */}
                {/* <View style={styles.addicon}>
                    <Text style={styles.add}>+</Text>
                </View> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainhome: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
    },
    addicon: {
        fontSize: 20,
        position: 'relative',
        bottom: 0,
        right: 10,
    },
    add: {
        fontSize: 20,
        width: 50,
        height: 50,
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'white',
        borderRadius: 50,
        zIndex: 100
    }

})

export default HomeScreen;