import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@mui/material';
import { MoreVert as MoreVertIcon, Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material';

              //  title,
              //   content,
              //   timestamp: serverTimestamp(),
              //   userId: auth.currentUser.uid,

const Post = ({ post }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar src={post.userAvatar} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={post.username}
        subheader={post.date}
      />
      {post.image && (
        <CardMedia
          component="img"
          height="194"
          image={post.image}
          alt="Post image"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;