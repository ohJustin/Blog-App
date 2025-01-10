import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MuiNavbar from '../components/Navbar/MuiNavbar.tsx';

// Pages
import HomePg from './HomePage';
import ProfileW from './ProfileWall';
import ProfilePg from './ProfilePage';
import CreatePost from './CreatePost';
import ViewPost from './ViewPost';

/*
    This is './' point
*/

function HomePage() {
  return (
    <div>
    <MuiNavbar position='static'/>
      <Routes>
        <Route path="/home" element={<HomePg />} />
        <Route path="/profilewall" element={<ProfileW />} />
        <Route path="/profilepage" element={<ProfilePg />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/view" element={<ViewPost />} />
      </Routes>
    </div>
  );
}

export default HomePage;
