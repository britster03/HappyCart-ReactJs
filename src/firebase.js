import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC-tvNRCLrkG1i7HjLye-Dz3gpo2j-yvCo",
    authDomain: "challenge-14ebd.firebaseapp.com",
    projectId: "challenge-14ebd",
    storageBucket: "challenge-14ebd.appspot.com",
    messagingSenderId: "1071221027496",
    appId: "1:1071221027496:web:303bf09f06ec809346c89d",
    measurementId: "G-PWEBLWF0RB"
  };


const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};