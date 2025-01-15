import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MuiNavbar from '../components/Navbar/MuiNavbar.tsx';

// Pages
import HomePg from './HomePage.js';
// import ProfileW from './ProfileWall';
import ProfilePg from './ProfilePage';
import CreatePost from './CreatePost';
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


function HomePage() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePg />} />
        {/* Bad naming convention on line 24. This is the "My Posts" */}
        <Route path="/myposts" element={<CreatePost />} /> 
        <Route path="/profile" element={<ProfilePg />} />
      </Routes>
    </Layout>
  );
}

export default HomePage;
