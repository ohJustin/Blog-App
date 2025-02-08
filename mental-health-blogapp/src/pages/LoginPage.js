import React, { useState } from 'react';
import { signInWithGoogle, signOutUser, userLoggedIn, getCurrentUser } from '../authentification/userAuth';
import { Button } from '@mui/material';

const LoginPage = () => {
    const [loggedIn, setLoggedIn] = useState(userLoggedIn());
    const [user, setUser] = useState(getCurrentUser());

    const signIn = async () => {
        try{
            await signInWithGoogle();
            setLoggedIn(userLoggedIn());
            setUser(getCurrentUser());
        } catch(err){
            console.error('Issue signing in:', err);
        }
    };

    const signOut = async () => {
        try{
            await signOutUser();
            setLoggedIn(userLoggedIn());
            setUser(getCurrentUser());
        } catch(err){
            console.error('Issue signing out:', err);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            {loggedIn ? (
                <div>
                    <h2>Welcome, {user.displayName}!</h2>
                    <Button variant="contained" onClick={signOut}>Sign Out</Button>
                </div>
            ) : (
                <Button variant="contained" onClick={signIn}>Sign In with Google</Button>
            )}
        </div>
    );
};

export default LoginPage;