import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import headshot from '../assets/jayheadshots.jpg';

function ProfilePage() {
  const [username, setUsername] = useState('@Jaydatech');
  const [education, setEducation] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setIsEdited(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Card sx={{ width: 800, height: 950, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          sx={{ width: 800, height: 300 }}
          image={headshot}
          title="profile image"
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold', // Bold font
              fontSize: '1.95rem', // Larger font size
              color: '#3f51b5' // Primary color
            }}
          >
            {username}
          </Typography>
          <TextField
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
  );
}

export default ProfilePage;