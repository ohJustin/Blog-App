import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Person2Icon from '@mui/icons-material/Person2';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { CenterFocusStrong, CenterFocusStrongSharp, Person } from '@mui/icons-material';

/*
    This is './profile' point
*/

function ProfilePage() {
  return (
    <Card sx={{ minWidth: 150, maxWidth: 500 }}>
      <Person2Icon fontSize="xl4"/>
      <CardMedia
        sx={{ height: 200}}
        title="Your Profile"
      />
      <CardContent>
        <Typography>
        Some Profile Content
      </Typography>
      </CardContent>
    </Card> 
  );
}

export default ProfilePage;