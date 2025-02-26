import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MuiNavbar from '../components/Navbar/MuiNavbar.tsx';
import withAuth from '../authentification/withAuth';
import { userLoggedIn } from '../authentification/userAuth';

// Pages
import MainPg from './MainPage.js';
import ProfilePg from './ProfilePage.js';
import UserPost from './ProfilePosts.js';
import LoginPage from './LoginPage.js';
// import ViewPost from './ViewPost';

const Layout = ({ children, isAuthenticated }) => (
  <div>
    {<MuiNavbar />}
    {children}
  </div>
);

function LandingPage() {
  //const isAuthenticated = userLoggedIn();

  return (
    <Layout>
      <Routes>
        <Route path="" element={<Navigate to="home" />} /> {/* Redirect from root to /home */}
        <Route path="login" element={<LoginPage />} />
        <Route path="home" element={withAuth(MainPg)} />
        <Route path="myposts" element={withAuth(UserPost)} />
        <Route path="profile" element={withAuth(ProfilePg)} />
      </Routes>
    </Layout>
  );
}

export default LandingPage;