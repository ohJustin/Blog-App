import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, Container, Grid } from '@mui/material';
import headshot from '../assets/jayheadshots.jpg';
import axiosInstance from '../services/axiosInstance';
import { db, auth } from '../firebaseConfig.js';

function ProfilePage() {
  const [username, setUsername] = useState('username');
  const [userId, setUserId] = useState(auth.currentUser.uid);
  //const [education, setEducation] = useState('');
  //const [wellnessInterests, setWellnessInterests] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setIsEdited(true);
  };

  const handleSave = async () => {
    try 
    {
      const profileData = {
        nickName: username,
        userId
        //education,
        //wellnessInterests
      }

      const action = await axiosInstance.post('/api/firestore/nicknames', profileData);
    }

    catch (error)
    {
      console.error('Error saving profile:', error);
    }
  }

  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: '24px' }}>
              <CardMedia
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 600 }, // Responsive height
                  borderRadius: '24px 24px 0 0'
                }}
                image={headshot}
                title="profile image"
              />
              <CardContent>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: '3.95rem' }, // Responsive font size
                    color: '#3f51b5'
                  }}
                >
                  {username}
                </Typography>

                <TextField
                  sx={{ marginTop: 2 }}
                  size="medium"
                  label="Username"
                  value={username}
                  onChange={handleInputChange(setUsername)}
                  fullWidth
                  margin="normal"
                />
              </CardContent>

              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: 2
                }}
              >
                <Button
                  onClick={handleSave}
                  size="large"
                  sx={{
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#4CAF50',
                    width: '85px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#303f9f',
                      boxShadow: '0px 4px 10px rgba(30, 187, 51, 0.2)'
                    }
                  }}
                  disabled={!isEdited}
                >
                  Save
                </Button>

                <Button
                  size="large"
                  sx={{
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#d32f2f',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                    },
                    marginLeft: 2
                  }}
                >
                  Cancel
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default ProfilePage;