import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDoGYSQA37yGpOPRTsKvt9xtFxQ1WgFHM",
    authDomain: "your-finances-75de6.firebaseapp.com",
    projectId: "your-finances-75de6",
    storageBucket: "your-finances-75de6.appspot.com",
    messagingSenderId: "361627752197",
    appId: "1:361627752197:web:c094d406686645192e896c",
    measurementId: "G-R73ELFCZG8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();