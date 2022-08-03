import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { UserProvider } from './components/userContext';

<<<<<<< Updated upstream
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
ReactDOM.createRoot(document.querySelector('#root')).render(
  <UserProvider>
    <App />
  </UserProvider>
>>>>>>> Stashed changes
);
