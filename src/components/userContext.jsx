import { useState } from 'react';
import { useContext } from 'react';

const { createContext } = require('react');

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggeIn, setIsLoggeIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () => {
    setIsLoggeIn(true);
    setUsername('Serhii');
  };
  const logOut = () => {
    setIsLoggeIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ isLoggeIn, username, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
