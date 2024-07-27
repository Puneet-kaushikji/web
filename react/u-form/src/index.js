import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import './index.css'; // Import Tailwind CSS

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
