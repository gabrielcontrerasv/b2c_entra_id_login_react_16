import React, { useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';

const Auth = () => {
  const { instance, accounts } = useMsal();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (accounts.length > 0) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [accounts]);

  const handleLogin = () => {
    instance.loginPopup(loginRequest)
      .then(response => {
        setIsAuthenticated(true);
      })
      .catch(error => {
        console.error('Error during login:', error);
      });
  };

  const handleLogout = () => {
    instance.logoutPopup()
      .then(() => {
        setIsAuthenticated(false);
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {isAuthenticated ? (
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleLogout}>Logout</button>
      ) : (
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleLogin}>Login</button>
      )}
    </div>


  );
};

export default Auth;
