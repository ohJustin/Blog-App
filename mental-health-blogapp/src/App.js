import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import MainPg from './pages/MainPage';
import ProfilePg from './pages/ProfilePage';
import CreatePost from './pages/CreatePost';
import ViewPosts from './pages/ViewPost';
import withAuth from './authentification/withAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={LandingPage}>
          <Route path ="home" index element={<MainPg />} />
          <Route path="myposts" element={<CreatePost />} />
          <Route path="profile" element={<ProfilePg />} />
          {/* <Route path="view-posts" element={<ViewPosts />} /> May not be needed? */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;