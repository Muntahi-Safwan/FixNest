import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // User Sign In
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // User Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const authChange = onAuthStateChanged(auth, (currentUser) => {
            console.log("User in the Auth changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            authChange();
        };
    }, []);

    const userInfo = {
        auth,
        provider,
        user,
        createUser,
        loading,
        logIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
