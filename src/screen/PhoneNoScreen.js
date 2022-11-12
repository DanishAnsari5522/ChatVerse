import { View, Text, TextInput, StyleSheet, Button ,Image} from "react-native";

function PhoneNoScreen() {
    return (
        <View style={styles.main}>
            <Image source={require('../../assets/emptywishlist1.png')} style={styles.logo}/>
            <TextInput
                placeholder="Phone No."
                style={styles.input}
                
            />
            <View style={styles.btncomp}>
                <Text style={styles.getinbtn}>Get In</Text>
            </View>
            <View style={styles.appnames}>
                <Text style={styles.chatverse}>ChatVerse</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        width:'100%',
        // backgroundColor:'black'
    },
    input: {
        borderBottomWidth: 2,
        marginTop: 50,
        padding: 10,
        width:'80%',
        alignSelf:'center'
    },
    logo:{
        width:70,
        height:70,
        alignSelf: 'center',
        marginTop:100
    },
    btncomp: {
        alignSelf: 'center'
    },
    getinbtn: {
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
    chatverse:{
        fontSize:20,
    }

})

export default PhoneNoScreen;