import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './authConfig';
import Auth from './Auth';
import './App.css'

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <div className="App">
        <Auth />
      </div>
    </MsalProvider>
  );
}

export default App;
