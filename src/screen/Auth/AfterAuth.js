import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView ,TouchableOpacity} from "react-native";
import React, { useContext, useState } from 'react'
import logo from "../../../assets/logo.png"
import profile from "../../../assets/images.png"
import { _editUserInfo } from "../../Config/api.servise"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'


function AfterAuth({navigation}) {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)
    const [imagePath, setImagePath] = useState('')
    const [progress, setProgress] = useState(null)
    const [downloadUrl, setDownloadUrl] = useState('')
    const handleConfirm = async () => {
        console.log(name);
        if (name) {
            let currentUser=await AsyncStorage.getItem("currentUser");
            currentUser=JSON.parse(currentUser);
            console.log(currentUser)
            setLoading(true)
            const res = await _editUserInfo(currentUser?.mobile, { name, image: downloadUrl })
            if (res?.mobile) {
                // console.log(res);
                await AsyncStorage.setItem("currentUser", JSON.stringify(res))
                navigation.replace("Home")
            } else {
                // handle error
            }
            setLoading(false)
        }
    }


    const uploadImage = async (file) => {
        setLoading(true)
        const storageRef = ref(storage, currentUser?.mobile);
        const img = await fetch(file.path)
        const imgBytes = await img.blob()
        const uploadTask = uploadBytesResumable(storageRef, imgBytes);
        uploadTask.on('state_changed',
            (snapshot) => {
                const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(p)
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log(error);
                setLoading(false)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    ImagePicker.clean().then(() => {
                        console.log('removed all tmp images from tmp directory');
                    })
                    setDownloadUrl(downloadURL)
                    setLoading(false)
                    setProgress(null)
                });
            }
        );

    }

    
    return (
        <ScrollView>
            <View style={styles.main}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.photoandname} onPress={uploadImage}>
                    <TouchableOpacity style={styles.uploadimg}>
                        <Image source={profile} style={styles.profile} />
                    </TouchableOpacity>

                    <View style={styles.entername}>
                        <TextInput
                            placeholder="Enter Name"
                            style={styles.input}
                            value={name}
                            onChangeText={(e) => { setName(e) }}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.btncomp} onPress={handleConfirm}>
                    <Text style={styles.confirm}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appnames}>
                    <Text style={styles.chatverse}>ChatVerse</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        padding: 20
    },
    input: {
        borderBottomWidth: 2,
        padding: 5,
        width: '80%'
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 120
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
        color: 'white',
        textAlign: 'center'
    },
    appnames: {
        alignSelf: 'center',
        marginTop: '90%'
    },
    chatverse: {
        fontSize: 20,
    }

})

export default AfterAuth;