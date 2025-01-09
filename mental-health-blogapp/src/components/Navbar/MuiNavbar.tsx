import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import HealthIcon from '../../assets/mental-health.png';
import './Navbar.css';
import React from "react";

const MuiNavbar = () => {
    return (
      <AppBar position="static" classes={ { root: 'custom-navbar' } }>

        <Toolbar classes={{ root: 'custom-toolbar' }} >

          <IconButton size="small" edge="start" color="inherit" aria-label="logo" className="custom-logo-container">
            <img src={HealthIcon} alt="Health Icon" className="custom-logo"/>
            <Typography  variant="h6" component="div" className="custom-app-name">
              BRAINAPP
            </Typography>
          </IconButton>

          <Stack direction="row" spacing={2} className="custom-nav-buttons">
            {['TestBtn', 'TestBtn2', 'TestBtn3'].map((btnText) => (
              <Button key={btnText} color="inherit" className="custom-nav-btn">
                {btnText}
              </Button>
            ))}
          </Stack>

        </Toolbar>
        
      </AppBar>
    );
  };
  
  export default MuiNavbar;
  