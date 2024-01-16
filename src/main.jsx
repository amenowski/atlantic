import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartPreviewProvider } from './contexts/CartPreviewProvider.jsx';
import { MobileNavProvider } from './contexts/MobileNavProvider.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartPreviewProvider>
      <MobileNavProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MobileNavProvider>
    </CartPreviewProvider>
  </React.StrictMode>,
);
