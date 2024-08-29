import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { StockProvider } from './contexts/StockContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <StockProvider>
      <App />
    </StockProvider>
  </React.StrictMode>,
  document.getElementById('root')
);