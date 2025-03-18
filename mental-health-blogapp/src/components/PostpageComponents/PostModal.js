import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';
import React, { useState } from 'react';
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
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
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
            const docRef = await addDoc(collection(db, 'posts'), {
                title,
                content,
                timestamp: serverTimestamp(),
                userId: auth.currentUser.uid,
            });
            console.log("Document written with ID: ", docRef.id);
            onSubmit();
            handleClose();
        } catch (err) {
            setError(err);
        } finally {
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Content"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
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
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default PostModal;
