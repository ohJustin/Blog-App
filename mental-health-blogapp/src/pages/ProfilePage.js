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
      <Card sx={{ width: 1600, height: 1600, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          sx={{
            width: '100%',
            height: 600 }}
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
              <MenuItem value="SIUE"><em>Southern Illinois University Edwardsville(SIUE)</em></MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Wellness-Interests</InputLabel>
            <Select
              value={wellnessInterests}
              size='xlarge'
              onChange={handleInputChange(setWellnessInterests)}
              label="Wellness Interests"
            >
              <MenuItem value="None"><em>Stress-Management</em></MenuItem>
              <MenuItem value="anx"><em>Anxiety</em></MenuItem>
              <MenuItem value="wanx"><em>Work-Anxiety</em></MenuItem>
              <MenuItem value="depr"><em>Depression</em></MenuItem>
              <MenuItem value="self"><em>Self-Care</em></MenuItem>
            </Select>
          </FormControl>


        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button size="large" sx={{ fontSize: '1.15rem' }} disabled={!isEdited}>Save</Button>
          <Button size="large" sx={{ fontSize: '1.15rem' }}>Cancel</Button>
        </CardActions>
      </Card>
    </Box>
    </Container>
  );
}

export default ProfilePage;