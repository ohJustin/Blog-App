import React from "react";
import './PostModal.css';

// MUI
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Modal, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function PostModal()
{
    
    return(
       <div> 
        <Button onClick={handleOpen}>Create</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Some text in create modal...
                </Typography>
                <Typography>
                    Here's where you enter your blog description
                </Typography>
            </Box>
        </Modal>
    </div>    
    );
}

export default PostModal;