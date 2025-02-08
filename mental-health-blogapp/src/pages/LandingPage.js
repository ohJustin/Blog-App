import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MuiNavbar from '../components/Navbar/MuiNavbar.tsx';

// Pages
import MainPg from './MainPage.js';
// import ProfileW from './ProfileWall';
import ProfilePg from './ProfilePage.js';
import UserPost from './ProfilePosts.js';
// import ViewPost from './ViewPost';

/*
    Refactor for single-layout.
              Wraps entire app in layout.
*/

const Layout = ({ children }) => (
  <div>
    <MuiNavbar />
    {children}
  </div>
);


function LandingPage() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPg />} />
        {/* Bad naming convention on line 24. This is the "My Posts" */}
        <Route path="/myposts" element={<UserPost />} /> 
        <Route path="/profile" element={<ProfilePg />} />
      </Routes>
    </Layout>
  );
}

export default LandingPage;
