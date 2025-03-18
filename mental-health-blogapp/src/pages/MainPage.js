import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Post from '../components/PostpageComponents/PostCard.js';
import PostModal from '../components/PostpageComponents/PostModal.js';
import { db } from '../firebaseConfig.js';
import { collection } from 'firebase/firestore';


// Sample posts data
const posts = [
  {
    id: 1,
    username: '@Jaydatech',
    userAvatar: 'path/to/avatar.jpg',
    date: 'March 13, 2025',
    content: 'This is a sample post content.',
    image: '../assets/jayheadshots.jpg',
  },
  {
    id: 2,
    username: '@AnotherUser',
    userAvatar: '../assets/jayheadshots.jpg',
    content: 'This is another sample post content.',
    timeStamp: 'March 14, 2025',
    userId: 1
  },
];

              //  title,
              //   content,
              //   timestamp: serverTimestamp(),
              //   userId: auth.currentUser.uid,

// Test Retrieving All Documents (DELETE LATER)
async function getAllDocs(collectionName)
{
  try
  {
    //const query = await db.collection(collectionName).get();
    const query = await collection(db, collectionName).get()
    
    query.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

  } catch (err) {
    console.error("ISSUE FRETRIEVING DOCUMENTS: ", err);
  }
}
getAllDocs("posts");

function MainPage() {
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