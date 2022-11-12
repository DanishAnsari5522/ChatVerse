import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView } from "react-native";

function PhoneNoScreen() {
    return (
        <ScrollView>
            <View style={styles.main}>
                <Image source={require('../../assets/emptywishlist1.png')} style={styles.logo} />
                <View style={styles.photoandname}>
                    <View style={styles.uploadimg}>
                        <Image source={require('../../assets/images.png')} style={styles.profile} />
                    </View>

                    <View style={styles.entername}>
                        <TextInput
                            placeholder="Enter Name"
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.btncomp}>
                    <Text style={styles.confirm}>Confirm</Text>
                </View>
                <View style={styles.appnames}>
                    <Text style={styles.chatverse}>ChatVerse</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main:{
        width:'100%',
        // backgroundColor:'black',
    }, 
    input: {
        borderBottomWidth: 2,
        padding: 5,
        width: '100%'
    },
    logo: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginTop: 100
    },
    photoandname: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    profile: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderRadius: 50
    },
    entername: {
        width: '90%'
    },
    uploadimg: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'gray',
        marginRight: 10,
    },
    btncomp: {
        alignSelf: 'center'
    },
    confirm: {
        width: 120,
        height: 40,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 6,
        marginTop: 20,
        color:'white',
        textAlign:'center'
    },
    appnames: {
        alignSelf: 'center',
        marginTop: '100%'
    },
    chatverse: {
        fontSize: 20,
        fontWeight:'bold'
    }

})

export default PhoneNoScreen;