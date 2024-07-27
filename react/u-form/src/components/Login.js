import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    // For example, check username and password

    if (username === 'admin' && password === 'puneet') {
      // Save the login status
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } 
    else if (username === 'admin' && password === 'bhawar') {
      // Save the login status
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } 
    else if (username === 'admin' && password === 'rahul') {
      // Save the login status
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } 
    else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="p-8 ">
      <h1 className="text-2xl font-bold mb-4 text-blue-500 ">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
