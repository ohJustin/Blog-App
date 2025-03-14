// src/authentification/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { userLoggedIn, getCurrentUser } from './userAuth';

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Check authentication status when the app loads
    useEffect(() => {
        const checkAuth = () => {
            const loggedIn = userLoggedIn();
            setIsAuthenticated(loggedIn);
            setUser(getCurrentUser());
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext -- (Nearest context provider must be AuthProvider)
export const useAuth = () => {
    const context = useContext(AuthContext);

    // Throw an error if context is undefined
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};
