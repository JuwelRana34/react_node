import { createContext, useEffect, useState } from "react";
import {auth} from "../Config/firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
  deleteUser
} from "firebase/auth";
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [isLoading , setIsloading] = useState(true)
  const provider = new GoogleAuthProvider();

  const Registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  const DeleteUser = (user)=>{
     return deleteUser(user)

  }

  useEffect(()=>{

    const Unsubscribe =  onAuthStateChanged(auth,(user)=>{
        if (user){
            setUser(user)
            setIsloading(false)

        }else{
            setIsloading(false)
        }
    })
    return ()=>{
       Unsubscribe; 
    } 

  },[user])



  const userinfo = {
    Registration,
    GoogleLogin,
    login,
    LogOut,
    user,
    isLoading,
    DeleteUser
  };

  return (
    <UserContext.Provider value={userinfo}>{children}</UserContext.Provider>
  );
};

export default UserContext;
