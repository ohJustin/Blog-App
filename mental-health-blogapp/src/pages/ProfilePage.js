import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, Container, Grid } from '@mui/material';
import headshot from '../assets/jayheadshots.jpg';

function ProfilePage() {
  const [username, setUsername] = useState('@Jaydatech');
  const [education, setEducation] = useState('');
  const [wellnessInterests, setWellnessInterests] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setIsEdited(true);
  };

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

                <FormControl fullWidth margin="normal">
                  <InputLabel>Education</InputLabel>
                  <Select
                    value={education}
                    onChange={handleInputChange(setEducation)}
                    label="Education"
                  >
                    <MenuItem value="None"><em>None</em></MenuItem>
                    <MenuItem value="High School">High School</MenuItem>
                    <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                    <MenuItem value="Master's">Master's</MenuItem>
                    <MenuItem value="PhD">PhD</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>

              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: 2
                }}
              >
                <Button
                  size="large"
                  sx={{
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#303f9f',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
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