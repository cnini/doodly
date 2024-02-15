// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1bTB-waOjopkmuRJh3TQ83VhferQa0Fo",
    authDomain: "doodlyapp-9f605.firebaseapp.com",
    projectId: "doodlyapp-9f605",
    storageBucket: "doodlyapp-9f605.appspot.com",
    messagingSenderId: "66681259854",
    appId: "1:66681259854:web:e94c2f79260a63ea87c01f",
    measurementId: "G-H75TKPLVDQ"
};
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const fireDB = app.firestore();
const auth = app.auth();
 
export  {app, fireDB, auth};