import { createContext, useEffect, useState ,useContext} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user,setUser] = useState("");

// signup
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

// login
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

// logout
function logOut(){
  return signOut(auth);
}
// google signin
function googleSignIn() {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
}

  useEffect (() =>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
        console.log("Auth",currentUser);
        setUser(currentUser);

    });
    return () =>{
        unsubscribe();
    }

  }, []);

  return( <userAuthContext.Provider value = {{user,signUp,logIn,logOut,googleSignIn}}>{children}</userAuthContext.Provider>);
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
