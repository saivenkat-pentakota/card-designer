import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
 

const firebaseConfig = {
  apiKey: "AIzaSyBGrMjNkPkjhgLAdQt5zQo22PvCps-s9XY",
  authDomain: "cardswebdesign.firebaseapp.com",
  projectId: "cardswebdesign",
  storageBucket: "cardswebdesign.appspot.com",
  messagingSenderId: "665662139646",
  appId: "1:665662139646:web:89b59e1892793419c3c9af",
  measurementId: "G-ZK9NBJRGDS"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;


