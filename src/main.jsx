import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartPreviewProvider } from './contexts/CartPreviewProvider.jsx';
import { MobileNavProvider } from './contexts/MobileNavProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartPreviewProvider>
      <MobileNavProvider>
        <App />
      </MobileNavProvider>
    </CartPreviewProvider>
  </React.StrictMode>,
);
