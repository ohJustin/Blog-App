import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import HealthIcon from '../../assets/mental-health.png';
import React from "react";

const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='small' edge='start' color='inherit' aria-label='logo'>
                    <img src={HealthIcon} alt="Health Icon" />
                </IconButton>
                <Typography variant='h6' component='div'>
                    BRAINAPP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'> TestBtn </Button>
                    <Button color='inherit'> TestBtn2 </Button>
                    <Button color='inherit'> TestBtn3 </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};

export default MuiNavbar;