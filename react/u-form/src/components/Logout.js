import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user login status
    localStorage.removeItem('isLoggedIn');
    // Set logged out flag
    localStorage.setItem('isLoggedOut', 'true');
    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return (
    <div className="p-8 ">
      <h1 className="text-2xl font-bold mb-4 ">You have been logged out</h1>
    </div>
  );
};

export default Logout;
