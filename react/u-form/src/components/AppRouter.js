import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Logout from './Logout';
// Import your Login component if you have one
import Login from './Login'; 

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default AppRouter;
