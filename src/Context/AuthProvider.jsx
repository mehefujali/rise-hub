import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
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