import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './contexts/firebase';
import { firebase } from './lib/firebase';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
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
      