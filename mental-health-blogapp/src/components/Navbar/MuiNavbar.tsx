import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import HealthIcon from '../../assets/mental-health.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import React from "react";

const navLinks = 
    [
        { text: 'Main Posts', path: '/' },
        { text: 'My Posts', path: '/myposts' },
        { text: 'Profile', path: '/profile' },
    ];
  

const MuiNavbar = () => 
    {
        return (
        <AppBar position="static" classes={ { root: 'custom-navbar' } }>

            <Toolbar classes={{ root: 'custom-toolbar' }} >

            <IconButton size="large" edge="start" color="inherit" aria-label="logo" className="custom-logo-container">
                <img src={HealthIcon} alt="Health Icon" className="custom-logo"/>
                <Typography  variant="h6" component="div" className="custom-app-name">
                BRAINAPP
                </Typography>
            </IconButton>

            <Stack direction="row" spacing={2} className="custom-nav-buttons">
                {navLinks.map((link) => (
                <Button key={link.text} component={Link} to={link.path} color="inherit" className="custom-nav-btn">
                    {link.text}
                </Button>
                ))}
            </Stack>

            </Toolbar>

        </AppBar>
        );
    };
  
  export default MuiNavbar;
  