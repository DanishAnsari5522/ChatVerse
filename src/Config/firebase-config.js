// import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { CACHE_SIZE_UNLIMITED, initializeFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDOR2Ht9vLE0MlPyafIzShSjiM1J2Hs7-w",
  authDomain: "test-64bb3.firebaseapp.com",
  projectId: "test-64bb3",
  storageBucket: "test-64bb3.appspot.com",
  messagingSenderId: "224657330326",
  appId: "1:224657330326:web:dc1308ae468016aadd32b7",
  measurementId: "G-0XS5CS9J9N"
}

const app=initializeApp(firebaseConfig);
const db=initializeFirestore(app,{
  experimentalForceLongPolling:true,
  cacheSizeBytes:CACHE_SIZE_UNLIMITED
});
export const storage=getStorage();
export {db};

