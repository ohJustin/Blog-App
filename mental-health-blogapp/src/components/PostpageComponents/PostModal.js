import React, { useState } from 'react';
import Axios from 'axios';
import './PostModal.css';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from '@mui/material';

// Mock API setup:
const url = 'https://blog-app.free.beeceptor.com/post'; // My mock endpoint.

const data = {
    key1: 1,
    key2: 'title',
    key3: 'value2',
};


const PostModal = ({ onClose, onSubmit }) => {
    const [open, setOpen] = React.useState(false);
    //for post axios...
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleClickCreate = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {

    try {
    setLoading(true);
    const response = await Axios.post(url, data);
    setData(response.data);
    } catch(err){
        setError(err);
    } finally{
        setLoading(false);
    }
 };



    return (
        <React.Fragment>
            <Button class="custom-create-button"
                onClick={handleClickCreate}
            >
                <span>Create</span>
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
                    <Button variant="contained" onClick={handleSubmit} disabled={loading}>
                    Submit
                    </Button>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {data && <p>Data: {JSON.stringify(data)}</p>}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default PostModal;
