import { Container, Grid } from '@mui/material';
import Post from '../components/PostpageComponents/PostCard.js';
import PostModal from '../components/PostpageComponents/PostModal.js';
import { db } from '../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import axiosInstance from '../services/axiosInstance';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Sample posts data

//     id: 2,
//     username: '@AnotherUser',
//     userAvatar: '../assets/jayheadshots.jpg',
//     content: 'This is another sample post content.',
//     timeStamp: 'March 14, 2025',
//     userId: 1

//  title,
//  content,
//  timestamp: serverTimestamp(),
//  userId: auth.currentUser.uid,


function MainPage() {
  // uses useState to store the posts data
  const [posts, setPosts] = useState([]);

  // gather post from firestore
  useEffect(() => {
    async function fetchPosts(){
      try{
        // use axios to get the posts from the firestore
        const response = await axiosInstance.get('/api/firestore/posts');
        // set the posts to the response data
        setPosts(response.data);
      } 
      
      catch (error) {
        console.error("issue retrieving documents in MainPage.js " + error);
      }
    }

    fetchPosts();
  }), []; // Why the empty dependency array? This is to ensure that the useEffect hook only runs once when the component mounts -> which means?

  return (
    <div>
      <PostModal />

      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MainPage;