import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
 

const firebaseConfig = {
  apiKey: "AIzaSyBZTC5FsoLy8mN66X_vXYEGHAVy7FHWnJQ",
  authDomain: "carddesigner-86581.firebaseapp.com",
  projectId: "carddesigner-86581",
  storageBucket: "carddesigner-86581.appspot.com",
  messagingSenderId: "171959224901",
  appId: "1:171959224901:web:8c74eb7996ff9fbc7bf12c",
  measurementId: "G-WM4YZVYKVW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth,firebaseApp};


