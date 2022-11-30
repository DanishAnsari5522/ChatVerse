import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, TextInput,ActivityIndicator } from 'react-native';
import Constants from "expo-constants";
import Header from './Header';
import Profile from "../../../assets/images.png"
import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { _search } from '../../Config/api.servise'
import { useState,useContext } from 'react';
import { AppContext } from '../../context/AppContext'

function AddUser({navigation}) {
    // const [mobileno, setMoileNo] = useState('');
    // const [mobile, setMoile] = useState(null);
    // const [err, setErr] = useState(false)
    const {currentUser } = useContext(AppContext)
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [data, setData] = useState()
    const handleChange = async (e) => {
        setInputValue(e)
        if (e.length == 10) {
            setLoading(true)
            const res = await _search(e)
            if (res?.mobile) {
                setData(res)
            } else {
                // handle error or not found
                setData(null)
            }
        } else {
            // handle when length of mobile num is less than 10
        }
        setLoading(false)

    }

    return (


        <View style={styles.main}>

            {/* Header Start */}
            <View>
                <View style={styles.headercomp}>
                    <View style={styles.ds}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}><Icon name="arrow-back" color='gray' size={25} style={styles.arrowback} /></TouchableOpacity>
                        <TextInput
                            placeholder="Search Name"
                            style={styles.searchbox}
                            maxLength={10}
                            value={inputValue}
                            onChangeText={handleChange}
                        >
                        </TextInput>
                        {loading && <ActivityIndicator style={styles.loader}  size={20} />}
                    </View>
                </View>
            </View>
            {/* Header End */}

            {
                (data && data.mobile != currentUser.mobile) && (
                    <TouchableOpacity style={styles.mainprofilecomp} onPress={() => { navigation.navigate("Message", { user: data }) }}>
                    <View style={styles.profileimgandname}>
                        <Image resizeMode='contain' source={Profile} style={styles.profileimg} />
                        <View style={styles.nameandno}>
                            <Text style={styles.name}>{data.name}</Text>
                            <Text style={styles.phoneNo}>{data.mobile}</Text>
                        </View>
                    </View>
                    {/* <Text style={styles.invite}>Invite</Text> */}
                </TouchableOpacity>
                )
            }




            {/* <View style={styles.heder}>
                {/* <Header /> 
                <View style={styles.contactandrefresh}>
                    <Text>
                        Contacts
                    </Text>
                    <Text style={styles.refresh}>
                        Refresh
                    </Text>
                </View>
            </View> */}

            {/* <ScrollView>
                <View style={styles.mainprofilecomp}>
                    <View style={styles.profileimgandname}>
                        <Image resizeMode='contain' source={Profile} style={styles.profileimg} />
                        <View style={styles.nameandno}>
                            <Text style={styles.name}>Danish Ansari</Text>
                            <Text style={styles.phoneNo}>9262786676</Text>
                        </View>
                    </View>
                    <Text style={styles.invite}>Invite</Text>
                </View>
            </ScrollView> */}
            {/* demo */}


        </View>
    )
}


const width = Dimensions.get('window').width;
const styles = StyleSheet.create({

    //Header Css Start
    headercomp: {
        width: width,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#c2c8c5',
        padding: 0,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    ds: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrowback: {
        marginRight: 0,
        color: 'black',
    },
    headernamee: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    searchbox: {
        width: width - 70,
        borderWidth: 1,
        paddingLeft: 10,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 8,
        fontSize: 13,
        marginLeft: 10,
    },
    // Header Css end
    main: {
        paddingTop: Constants.statusBarHeight

    },


    heder: {
        height: 100
    },
    contactandrefresh: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    refresh: {
        color: '#a567be',
    },
    mainprofilecomp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
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
        fontSize: 16,
        // textTransform:'uppercase'
    }

})

export default AddUser;