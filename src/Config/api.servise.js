import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore"
import { db } from "./firebase-config"

import uuid from "react-native-uuid"

export const createCombinedId = (myId, userId) => {
    return myId > userId ? myId + "-" + userId : userId + "-" + myId
}


export const _login = async (mobile) => {
    try {
        const userRef = doc(db, "users", mobile)
        const data = await getDoc(userRef)
        if (data.exists()) {
            const user = data.data();
            return user;
        } else {
            const res = await setDoc(userRef, { mobile })
            return { mobile }
        }

    } catch (error) {
        console.log(error)
        return { mobile: '', error: 'server error' }
    }
}

export const _editUserInfo = async (mobile, data) => {
    const user = { ...data }
    try {
        const userRef = doc(db, "users", mobile)
        const chatRef = doc(db, "chats", mobile)
        const data = await getDoc(userRef)
        if (data.exists()) {
            await updateDoc(userRef, user)
            await setDoc(chatRef, {})
            return { mobile, ...user };
        } else {
            return { mobile: '', error: "user does not exists" };
        }
    } catch (error) {
        console.log(error);
        return { mobile: '', error: "server error" }
    }
}

export const _search = async (mobile) => {
    try {
        const userRef = doc(db, "users", mobile)
        const data = await getDoc(userRef)
        console.log(data.exists());
        if (data.exists()) {
            return data.data();
        } else {
            return { mobile: '', error: "user does not exists" };
        }
    } catch (error) {
        console.log(error);
        return { mobile: '', error: "server error" }
    }
}

export const _sendMessage = async (data) => {
    try {
        const myId = data.from.mobile
        const userId = data.to.mobile
        const uid = uuid.v4()
        const id = createCombinedId(myId, userId)
        const msgRef = doc(db, "conversation", id)
        const msgRoom = await getDoc(msgRef)
        if (msgRoom.exists()) {
            await updateDoc(msgRef, {
                [uid]: data
            })
        } else {
            await setDoc(msgRef, { [uid]: data })
            await setDoc(doc(db, "status", id), {
                [myId]: {
                    typing: false,
                    seen: null
                },
                [userId]: {
                    typing: false,
                    seen: serverTimestamp()
                }
            })
        }
        // for myid doc
        await updateDoc(doc(db, "chats", myId), {
            [id]: {
                to: data.from,
                from: data.to,
                message: data.message,
                date: data.date,
                seen: data.seen,
                sender: data.from.mobile
            }
        })
        // for userid doc 
        await updateDoc(doc(db, "chats", userId), {
            [id]: {
                to: data.to,
                from: data.from,
                message: data.message,
                date: data.date,
                seen: data.seen,
                sender: data.from.mobile
            }
        })
        return { success: true }
    } catch (error) {
        console.log(error);
        return { success: false, error: "server error" }
    }
}

export const formatDate = (d) => {
    const pd = new Date(d)
    const nd = new Date(Date.now())
    let t = Math.floor(Number(nd.getTime() - pd.getTime()) / 60000)
    let dd = nd.getDate() - pd.getDate()
    if (t === 0) {
        return "Just Now";
    }
    if (t < 60) {
        return t + " min ago";
    }
    if (t >= 60 && t < 1440) {
        return (t / 60).toString().split(".")[0] + " hour ago"
    }
    if (t >= 1440 && t < 39200) {
        return (t / 1440).toString().split(".")[0] + " days ago"
    }
    if (t > 39200 && t < 470400) {
        return (t / 39200).toString().split(".")[0] + " month ago"
    }
    if (t > 470400) {
        return (t / 470400).toString().split(".")[0] + " year ago"
    }
    return "a long ago"
}

export const _saveTypingStatus = async (status, myId, userId) => {
    const id = createCombinedId(myId, userId)
    console.log(status);
    try {
        const statusRef = doc(db, "status", id)
        await updateDoc(statusRef, { [userId + ".typing"]: status })
        await updateDoc(doc(db, "chats", userId), {
            [id + ".typing"]: status
        })
    } catch (error) {

    }
}