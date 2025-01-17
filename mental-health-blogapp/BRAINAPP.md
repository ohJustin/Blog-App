*PAGE ROUTING DONE*
    -(My Posts) -> Create back-end routing with AXIOS *1/15/2025*
    
AXIOS EXAMPLE FOR FUTURE:
<!-- import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function MyModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Initial form data here
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/your-api-endpoint', formData);
      console.log('Response:', response.data);
      // Handle successful response (e.g., close modal, update state)
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal Title</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Form fields here */}
            <TextField 
              name="field1" 
              label="Field 1" 
              value={formData.field1} 
              onChange={handleChange}
            />
            {/* Add more fields as needed */}
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MyModal; -->