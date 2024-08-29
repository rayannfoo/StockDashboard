import React from 'react';
import { StockProvider } from './contexts/StockContext';
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import './styles/styles.css';

const App = () => {
  return (
    <StockProvider>
      <div>
        <h1>Stock Dashboard</h1>
        <StockForm />
        <StockList />
      </div>
    </StockProvider>
  );
};

export default App;
