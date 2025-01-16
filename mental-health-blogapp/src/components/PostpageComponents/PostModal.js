import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from '@mui/material';

const PostModal = ({ onClose, onSubmit }) => {
const [open, setOpen] = React.useState(false);
 
    const handleClickCreate = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
      };

    

    return (
        <React.Fragment>
        <Button variant="outlined" onClick={handleClickCreate}>
            Create
        </Button>
        <Dialog 
            open={open}
            onClose={onClose}
        >
            <DialogTitle>Create a New Post</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Content"
                    type="text"
                    fullWidth
                    multiline
                    rows={4}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button type="submit" color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
    );
};

export default PostModal;
