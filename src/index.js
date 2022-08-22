import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// folder structure
  // src
      // -> components
      // -> constants
      // -> contexts
      // -> helpers
      // -> lib (firebase is going to live in here),
      // -> services (firebase functions in here)
      