import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePg from './HomePage';
//import ProfileWall from './ProfileWall';
import ProfilePg from './ProfilePage';
import MuiNavbar from '../components/Navbar/MuiNavbar.tsx';

/*
    This is './myposts' point
*/

function ProfileWall() {
  return (
    <div>
    <MuiNavbar position='static'/>
      <Routes>
        <Route path="/home" element={<HomePg />} />
        <Route path="/profilewall" element={<ProfileWall />} />
        <Route path="/profilepage" element={<ProfilePg />} />
      </Routes>
    </div>
  );
}

export default ProfileWall;