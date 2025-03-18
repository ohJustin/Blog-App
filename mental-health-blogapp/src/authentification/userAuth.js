import { auth, provider } from '../firebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

// Sign in with Google
export const signInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, provider);
        console.log('Successfully signed in with Google:', result.user);

    } catch(err){
        console.error('Issue signing in with Google:', err);
        throw error;
    }
};

// Sign out
export const signOutUser = async () => {
    try{
        await signOut(auth);
        console.log('Successfully signed out');
    } catch(err){
        console.error('Issue signing out:', err);
        throw error;
    }
};

// User logged in status
export const  userLoggedIn = () => {
    return auth.currentUser !== null;
};

// Get current user
export const getCurrentUser = () => {
    return auth.currentUser;
};

// Get auth instance
export const getAuthInstance = () => {
    if (!auth) {
        throw new Error('Auth instance not found');
    }
    return auth;
};