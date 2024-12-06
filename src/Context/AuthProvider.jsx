import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext()
const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [isLoding, setLoding] = useState(true)
      const googleProvider = new GoogleAuthProvider()
      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider)
      }
      const signOutUser =() =>{
           return  signOut(auth)
      }
      const emailRegiser = (email,password) => {
            return createUserWithEmailAndPassword(auth,email,password)
      }
      const updateUser = (updatedata) => {
           return updateProfile(auth.currentUser,updatedata)
      }
      const loginUser =(email,password) => {
            return signInWithEmailAndPassword(auth,email,password)
      }
      useEffect(()=>{
           const unsubscribe = onAuthStateChanged(auth,(user) => {
                  setUser(user)
                  setLoding(false)
            })
            return ()=>{
                  unsubscribe()
            }
      },[])
      
      const authuser = {
            googleLogin,
            user,
            setUser,
            signOutUser,
            isLoding,
            setLoding,
            emailRegiser,
            updateUser,
            loginUser,
      }

      return (
            <authContext.Provider value={authuser}>
                  {children}
            </authContext.Provider>
      );
};

export default AuthProvider;

AuthProvider.propTypes = {
      children: PropTypes.object.isRequired
}