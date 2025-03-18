import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MuiNavbar from './components/Navbar/MuiNavbar.tsx';
import withAuth from './authentification/withAuth';
import { FirebaseAuthProvider, useFirebaseAuth } from './authentification/FireBaseAuthContext';

// Pages
import MainPg from './pages/MainPage.js';
import ProfilePg from './pages/ProfilePage.js';
import UserPost from './pages/ProfilePosts.js';
import LoginPage from './pages/LoginPage.js';

const Layout = ({ children }) => {
  const { isAuthenticated } = useFirebaseAuth();
  return (
    <div>
      {isAuthenticated && <MuiNavbar />} {/* Show Navbar if authenticated */}
      {children}
    </div>
  );
};

function App() {
  const { isAuthenticated } = useFirebaseAuth();

  return (
    <FirebaseAuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} /> {/* Redirect from root to /home */}
          <Route
            path="login"
            element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route path="home" element={withAuth(MainPg)} />
          <Route path="myposts" element={withAuth(UserPost)} />
          <Route path="profile" element={withAuth(ProfilePg)} />
          <Route path="*" element={<Navigate to="home" />} /> {/* Redirect any undefined routes to /home */}
        </Routes>
      </Layout>
    </FirebaseAuthProvider>
  );
}

export default App;