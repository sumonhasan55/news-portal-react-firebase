import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const[loading,setLoading]=useState(true)


    const createUser =(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
      setLoading(true)
    };
    const logInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        setLoading(true)
    };
    const signInWithGitHub = () => {
        return signInWithPopup(auth, gitProvider)
        setLoading(true)
    };
    const logOutUser = ()=>{
        return signOut(auth)
        setLoading(true)
    };
    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
           
    };
    const emailVerification =()=>{
        return sendEmailVerification(auth.currentuser)
    }



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser);
        setLoading(false)
    });
    return ()=>{
        unsubscribe();
    }
  },[])
    const AuthInfo = { 
        user, 
        signInWithGoogle,
         signInWithGitHub,
         logOutUser,
         createUser,
         emailVerification,
         logInUser,
         loading,
         updateUserProfile,
        };

    return (
        <AuthContext.Provider
            value={AuthInfo}
        >
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;