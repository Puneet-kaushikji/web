import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [inactivityTimeout, setInactivityTimeout] = useState(5 * 60 * 100); // Default to 15 minutes
  const [inactivityTimer, setInactivityTimer] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const logoutUser = () => {
      const isLoggedOut = localStorage.getItem('isLoggedOut');
      if (!isLoggedOut) {
        alert('You have been logged out due to inactivity.');
        localStorage.setItem('isLoggedOut', 'true');
      }
      navigate('/logout');
    };

    const resetInactivityTimer = () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      setInactivityTimer(setTimeout(logoutUser, inactivityTimeout));
    };

    const handleActivity = () => {
      localStorage.removeItem('isLoggedOut'); // Reset logout flag on activity
      resetInactivityTimer();
    };

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keypress', handleActivity);
    document.addEventListener('click', handleActivity);
    document.addEventListener('scroll', handleActivity);

    resetInactivityTimer();

    return () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keypress', handleActivity);
      document.removeEventListener('click', handleActivity);
      document.removeEventListener('scroll', handleActivity);
    };
  }, [navigate, inactivityTimeout, inactivityTimer]);

  const handleTimeoutChange = (event) => {
    setInactivityTimeout(Number(event.target.value));
  };

  return (
    <div className="p-8 bg">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Welcome to the VMS</h1>
      <p className="mb-4 text-blue-500">You will be logged out after a period of inactivity.</p>
      <form>
        <label htmlFor="timeout-select" className="block mb-2">Select inactivity timeout:</label>
        <select id="timeout-select" value={inactivityTimeout} onChange={handleTimeoutChange} className="block p-2 border border-gray-300 rounded mb-4">
          <option value={5 * 60 * 100}>5 minutes</option>
          <option value={10 * 60 * 100}>10 minutes</option>
          <option value={15 * 60 * 100}>15 minutes</option>
          <option value={30 * 60 * 100}>30 minutes</option>
          <option value={60 * 60 * 100}>60 minutes</option>
        </select>
      </form>
    </div>
  );
};

export default App;
