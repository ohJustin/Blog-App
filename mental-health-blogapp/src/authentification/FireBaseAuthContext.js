// src/authentification/FirebaseAuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig'; // Import the auth instance

// Create the context
const FirebaseAuthContext = createContext();

export const FirebaseAuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // useEffect to check authentication status
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setIsAuthenticated(!!user);
        });
        return unsubscribe;
    }, []);

    return (
        <FirebaseAuthContext.Provider value={{ isAuthenticated, user }}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

// Custom hook to use the FirebaseAuthContext
export const useFirebaseAuth = () => {
    const context = useContext(FirebaseAuthContext);
    if (context === undefined) {
        throw new Error('useFirebaseAuth must be used within a FirebaseAuthProvider');
    }
    return context;
};
