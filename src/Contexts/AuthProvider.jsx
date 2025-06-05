import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';



const AuthProvider = ({children}) => {
    
    const [user , setUser ] = useState(null);
    const [loading , setLoading] = useState(true); 
    const provider = new GoogleAuthProvider();


    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email , password);
    }

    const signInGoogle = () => {
        setLoading(true); 
        return signInWithPopup(auth , provider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (updateData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateData)
            .finally(() => setLoading(false));
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    },[])

    const userInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signInGoogle,
        signOutUser,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;