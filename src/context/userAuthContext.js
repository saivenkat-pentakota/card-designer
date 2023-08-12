import { createContext, useEffect, useState ,useContext} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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

  useEffect (() =>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser);

    });
    return () =>{
        unsubscribe();
    }

  }, []);

  return <userAuthContext.Provider value = {{user,signUp}}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
