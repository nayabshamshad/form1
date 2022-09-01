import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCPvpmie8FcwAy3Wbt7DlAxk5H0Pd3nLPo",
  authDomain: "attendanceproject0312.firebaseapp.com",
  projectId: "attendanceproject0312",
  storageBucket: "attendanceproject0312.appspot.com",
  messagingSenderId: "865051144864",
  appId: "1:865051144864:web:a8455c06fae472e9334fc5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore().collection("userListFinal");
const auth = firebaseApp.auth();
const storage = firebaseApp.storage().ref()
export { auth, firestore, storage };
