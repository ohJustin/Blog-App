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
    This is './myposts' point
*/

function ProfileWall() {
  // MUI's menu component requires anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>

    </div>
  );
}

export default ProfileWall;