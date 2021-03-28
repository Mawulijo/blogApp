import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
 
    apiKey: "AIzaSyBRDJ3z71RCtuCDyQhvga5I-xMcxlRNA1Q",
    authDomain: "nextfire032021.firebaseapp.com",
    projectId: "nextfire032021",
    storageBucket: "nextfire032021.appspot.com",
    messagingSenderId: "166297963704",
    appId: "1:166297963704:web:257c7dd93a710e7419384d",
    measurementId: "G-ZYRDFJSBPS"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
