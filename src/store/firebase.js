import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { initializeAuth } from "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMMQuARx0tYIv9gjS-VYZf-qH_nGt8Kd0",
  authDomain: "lecweb.firebaseapp.com",
  projectId: "lecweb",
  storageBucket: "lecweb.appspot.com",
  messagingSenderId: "664285438230",
  appId: "1:664285438230:web:fa3fa95a91f20fcf4ff037"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore().collection("userListFinal");
const auth = firebaseApp.auth();
const storage = firebaseApp.storage().ref();
export { auth, firestore, storage };
