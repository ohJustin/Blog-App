// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import MuiNavbar from '../components/Navbar/MuiNavbar.tsx';
// import withAuth from '../authentification/withAuth';
// import { FirebaseAuthProvider, useFirebaseAuth } from '../authentification/FireBaseAuthContext';

// // Pages
// import MainPg from './MainPage.js';
// import ProfilePg from './ProfilePage.js';
// import UserPost from './ProfilePosts.js';
// import LoginPage from './LoginPage.js';

// const Layout = ({ children }) => {
//   const { isAuthenticated } = useFirebaseAuth();
//   return (
//     <div>
//       {isAuthenticated && <MuiNavbar />} {/* Show Navbar if authenticated */}
//       {children}
//     </div>
//   );
// };

// function LandingPage() {
//   return (
//     <FirebaseAuthProvider>
//       <Layout>
//         <Routes>
//           <Route path="" element={<Navigate to="home" />} /> {/* Redirect from root to /home */}
//           <Route path="login" element={<LoginPage />} />
//           <Route path="home" element={withAuth(MainPg)} />
//           <Route path="myposts" element={withAuth(UserPost)} />
//           <Route path="profile" element={withAuth(ProfilePg)} />
//         </Routes>
//       </Layout>
//     </FirebaseAuthProvider>
//   );
// }

// export default LandingPage;