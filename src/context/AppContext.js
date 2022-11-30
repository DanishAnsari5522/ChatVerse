import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useState, useEffect } from 'react'
import { PermissionsAndroid } from 'react-native'
// import Contacts from 'react-native-contacts';

export const AppContext = createContext()
export const AppContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [theme, setTheme] = useState()
    const [darkModeEnabled, setDarkModeEnabled] = useState(false)
    // const [userContacts, setUserContacts] = useState([])

    const getCurrentUser = async () => {
        // await AsyncStorage.removeItem("currentUser")
        const user = await AsyncStorage.getItem("currentUser")
        setCurrentUser(JSON.parse(user))
        const themeStatus = await AsyncStorage.getItem("darkModeEnabled")
        setDarkModeEnabled(JSON.parse(themeStatus)?.status)
    }
    const changeTheme = () => {
        const theme = {
            colors: {
                background: darkModeEnabled ? '#181A20' : "#fff",
                textColor: darkModeEnabled ? "#efefef" : "#181A20",
                primary: "#B100FF",
                chatBg: darkModeEnabled ? "#1B1F2C" : "#eee",
                secondary: "#c133ff"
            },
        };
        setTheme(theme)
    }
    const changeCurrentUser = async (data) => {
        await AsyncStorage.setItem("currentUser", JSON.stringify(data))
        setCurrentUser(data)
    }

    const getUserContacts = async () => {
        const uc = await AsyncStorage.getItem("contacts")
        const cont = JSON.parse(uc)
        // setUserContacts(JSON.parse(uc))
        try {
            let s = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            ])
            const a = await Contacts.getAll()
            // console.log(a);
            const users = [...cont]
            a.map(async (o, i) => {
                const mobile = o.phoneNumbers[0]?.number;
                if (mobile) {
                    const n = mobile.slice(-10);
                    const isExists = cont.find(obj => obj.mobile == n)
                    if (!isExists) {
                        users.push({ name: o.displayName, mobile: n, isUser: false })
                    }

                }
                if (i == a.length - 1) {
                    // ?loop done
                    setUserContacts(users);
                }
            })
        } catch (error) {
            console.log("getCOntacts error in App Context", error);
        }
    }

    useEffect(() => {
        getCurrentUser()
        getUserContacts()
    }, [])

    useEffect(() => {
        changeTheme()
    }, [darkModeEnabled])
    return (
        <AppContext.Provider value={{
            currentUser,
            changeCurrentUser,
            theme,
            setDarkModeEnabled,
            darkModeEnabled,
            // userContacts,
            getUserContacts
        }}>
            {children}
        </AppContext.Provider>
    )
}