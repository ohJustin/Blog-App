import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MuiNavbar from '../components/Navbar/MuiNavbar.tsx';

// Pages
import HomePg from './HomePage';
import ProfileW from './ProfileWall';
import ProfilePg from './ProfilePage';

/*
    This is './profile' point
*/


function ProfilePage() {
  return (
    <div>
    <MuiNavbar position='static'/>
      <Routes>
        <Route path="/home" element={<HomePg />} />
        <Route path="/profilewall" element={<ProfileW />} />
        <Route path="/profilepage" element={<ProfilePg />} />
      </Routes>
    </div>
  );
}

export default ProfilePage;