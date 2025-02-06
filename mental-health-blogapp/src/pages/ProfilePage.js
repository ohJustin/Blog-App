import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, Container } from '@mui/material';
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
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          margin: '0 auto'
        }}
      >
        <Card sx={{ width: 1600, height: 1600, display: 'flex', flexDirection: 'column', borderRadius: '24px' }}>
          <CardMedia
            sx={{
              width: '100%',
              height: 600,
              borderRadius: '24px'
            }}
            image={headshot}
            title="profile image"
          />

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold', // Bold font
                fontSize: '3.95rem', // Larger font size
                color: '#3f51b5' // Primary color
              }}
            >
              {username}
            </Typography>

            <TextField
              sx={{ fontSize: '4.15rem' }}
              size="large"
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
              justifyContent: 'flex-end'
            }}
          >
            <Button
              size="large"
              sx={{
                fontSize: '1.15rem',
                borderRadius: '8px', // Rounded corners
                backgroundColor: '#3f51b5', // Blue color for "SAVE"
                color: 'white',
                '&:hover': {
                  backgroundColor: '#303f9f', // Darker blue on hover
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' // Subtle shadow on hover
                }
              }}
              disabled={!isEdited}
            >
              Save
            </Button>
            <Button
              size="large"
              sx={{
                fontSize: '1.15rem',
                borderRadius: '8px', // Rounded corners
                backgroundColor: '#f44336', // Red color for "CANCEL"
                color: 'white',
                '&:hover': {
                  backgroundColor: '#d32f2f', // Darker red on hover
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' // Subtle shadow on hover
                },
                marginLeft: '10px' // Space between buttons
              }}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}

export default ProfilePage;