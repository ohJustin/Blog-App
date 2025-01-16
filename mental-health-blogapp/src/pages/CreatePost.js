import React, { useState } from 'react';
import PostModal from '../components/PostpageComponents/PostModal';

function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => setIsModalOpen(false);
  const handleSubmit = () => {
    console.log('Post submitted!');
    setIsModalOpen(false);
  };

  return (
    <div>
      <PostModal open={isModalOpen} onClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreatePost;
