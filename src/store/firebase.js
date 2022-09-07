import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { initializeAuth } from "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk4Y7DTbvm-2Al_zTw_lINvvkilcw30OY",
  authDomain: "attendace-project-2.firebaseapp.com",
  projectId: "attendace-project-2",
  storageBucket: "attendace-project-2.appspot.com",
  messagingSenderId: "864022311030",
  appId: "1:864022311030:web:062eec10e41b7df7376f57"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore().collection("userListFinal");
const auth = firebaseApp.auth();
const storage = firebaseApp.storage().ref();
export { auth, firestore, storage };
