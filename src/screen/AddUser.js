import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import AddUserHeader from '../Header/AddUserHeader';


function AddUser() {
    return (
        <SafeAreaView>
        <View style={styles.main}>
            <View style={styles.heder}>
                <AddUserHeader />
                <View style={styles.contactandrefresh}>
                    <Text>
                        Contacts
                    </Text>
                    <Text>
                        Refresh
                    </Text>
                </View>
            </View>

            <View style={styles.mainprofilecomp}>
                <View style={styles.profileimgandname}>
                    <Image resizeMode='contain' source={require('../../assets/images.png')} style={styles.profileimg} />
                    <View style={styles.nameandno}>
                        <Text style={styles.name}>Danish Ansari</Text>
                        <Text style={styles.phoneNo}>9262786676</Text>
                    </View>
                </View>
                <Text style={styles.invite}>Invite</Text>
            </View>

            {/* demo */}
            <View style={styles.mainprofilecomp}>
                <View style={styles.profileimgandname}>
                    <Image resizeMode='contain' source={require('../../assets/images.png')} style={styles.profileimg} />
                    <View style={styles.nameandno}>
                        <Text style={styles.name}>Danish Ansari</Text>
                        <Text style={styles.phoneNo}>9262786676</Text>
                    </View>
                </View>
                <Text style={styles.invite}>Invite</Text>
            </View>
            <View style={styles.mainprofilecomp}>
                <View style={styles.profileimgandname}>
                    <Image resizeMode='contain' source={require('../../assets/images.png')} style={styles.profileimg} />
                    <View style={styles.nameandno}>
                        <Text style={styles.name}>Danish Ansari</Text>
                        <Text style={styles.phoneNo}>9262786676</Text>
                    </View>
                </View>
                <Text style={styles.invite}>Invite</Text>
            </View>
            <View style={styles.mainprofilecomp}>
                <View style={styles.profileimgandname}>
                    <Image resizeMode='contain' source={require('../../assets/images.png')} style={styles.profileimg} />
                    <View style={styles.nameandno}>
                        <Text style={styles.name}>Danish Ansari</Text>
                        <Text style={styles.phoneNo}>9262786676</Text>
                    </View>
                </View>
                <Text style={styles.invite}>Invite</Text>
            </View>
       
            <View style={styles.mainprofilecomp}>
                <View style={styles.profileimgandname}>
                    <Image resizeMode='contain' source={require('../../assets/images.png')} style={styles.profileimg} />
                    <View style={styles.nameandno}>
                        <Text style={styles.name}>Danish Ansari</Text>
                        <Text style={styles.phoneNo}>9262786676</Text>
                    </View>
                </View>
                <Text style={styles.invite}>Invite</Text>
            </View>
        

         


        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 20
    },


    heder: {
    },
    contactandrefresh: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:10,
        marginBottom:10
    },

    mainprofilecomp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:20
    },
    profileimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },
    profileimgandname: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        height: 60,
    },
    nameandno: {
        height: 40,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 4
    },
    phoneNo: {
        fontSize: 13
    },
    invite: {
        color: '#a567be',
        fontSize:16,
        // textTransform:'uppercase'
    }

})

export default AddUser;