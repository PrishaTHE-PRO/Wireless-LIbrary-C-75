import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBreR3Jqj3U44jR0sBLoQIRTv6yMUekBrM",
    authDomain: "wireless-library-4c454.firebaseapp.com",
    databaseURL: "https://wireless-library-4c454.firebaseio.com",
    projectId: "wireless-library-4c454",
    storageBucket: "wireless-library-4c454.appspot.com",
    messagingSenderId: "437310327900",
    appId: "1:437310327900:web:18d22366ed61e0a8e2aa99"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();