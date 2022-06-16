import React,{ createContext, useState,useEffect } from "react";
import { onAuthStateChangedListener } from "../services/firebase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(()=>{
    const unsubscribe=onAuthStateChangedListener((user)=>{
      setCurrentUser(user)
      console.log(user)
    })
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};