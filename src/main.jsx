import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Provider from react-redux
import { Provider } from 'react-redux';

// ✅ Correct path to your store
import store from './redux/store.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App with Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
