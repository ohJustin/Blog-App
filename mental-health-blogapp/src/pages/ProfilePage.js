import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Person2Icon from '@mui/icons-material/Person2';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import headshot from '../assets/jayheadshots.jpg'
import { BorderBottom, CenterFocusStrong, CenterFocusStrongSharp, Person } from '@mui/icons-material';

/*
    This is './profile' point
*/

function ProfilePage() {
  return (
    <Box
      sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}
    >


    <Card sx={{ width: 800, height: 950, display: 'flex', flexDirection: 'column'}}>
      <CardMedia
      
        sx={{ width: 800, height: 300}}
        image = {headshot}
        title="profile image"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
        >
        @Jaydatech
      </Typography>
      </CardContent>

      <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
      <Button size="small">Save</Button>
      <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  </Box>
  );
}

export default ProfilePage;