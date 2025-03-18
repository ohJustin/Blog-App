import React, { useState } from 'react';
import { signInWithGoogle, signOutUser, userLoggedIn, getCurrentUser, getAuthInstance } from '../authentification/userAuth';
import { Button, Container, Typography, Box, Avatar, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const LoginPage = () => {
    const [loggedIn, setLoggedIn] = useState(userLoggedIn());
    const [user, setUser] = useState(getCurrentUser());
    const navigate = useNavigate();

    const signIn = async () => {
            console.log('Attempting to sign in with Google...');
            await signInWithGoogle();
            setLoggedIn(userLoggedIn());
            setUser(getCurrentUser());
    };

    const signOut = async () => {
        try {
            await signOutUser();
            setLoggedIn(userLoggedIn());
            setUser(getCurrentUser());
        } catch (err) {
            console.error('Issue signing out:', err);
        }
    };

    const navHomePage = () => {
        // Navigate to home page
        navigate('/home');
    }

    return (
        <Container maxWidth="lg"> {/* Increased the maxWidth to 'lg' */}
            <Paper elevation={3} sx={{ padding: 8, marginTop: 12, textAlign: 'center' }}> {/* Increased padding and margin */}
                <Avatar
                    sx={{ bgcolor: 'primary.main', width: 120, height: 120, margin: '0 auto' }}
                    src={loggedIn && user.photoURL ? user.photoURL : undefined}
                >
                    {!loggedIn || !user.photoURL ? (
                        <AccountCircleIcon fontSize="large" sx={{ fontSize: 80 }} />
                    ) : null}
                </Avatar>
                <Typography variant="h3" component="h1" gutterBottom> {/* Increased typography size */}
                    {loggedIn ? `Welcome, ${user.displayName}!` : 'Login Page'}
                </Typography>
                {loggedIn ? (
                    <Box>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<LogoutIcon />}
                            onClick={signOut}
                            sx={{ marginTop: 3 }}
                        >
                            Sign Out
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={navHomePage}
                            startIcon={<LogoutIcon />}
                            sx={{ marginTop: 3 }}
                        >
                            Go To Home Page
                        </Button>
                    </Box>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<GoogleIcon />}
                        onClick={signIn}
                        sx={{ marginTop: 3 }}
                    >
                        Sign In with Google
                    </Button>
                )}
            </Paper>
        </Container>
    );
};

export default LoginPage;