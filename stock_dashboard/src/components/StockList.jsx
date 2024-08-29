import React, { useContext } from 'react';
import { StockContext } from '../contexts/StockContext';

const StockList = () => {
  const { stocks } = useContext(StockContext);

  return (
    <div>
      {stocks.length === 0 ? (
        <p>No stocks available.</p>
      ) : (
        <ul>
          {stocks.map((stock, index) => {
            const profitLoss = ((stock.currentPrice - stock.purchasePrice) * stock.quantity).toFixed(2);
            return (
              <li key={index}>
                <p><strong>Symbol:</strong> {stock.symbol}</p>
                <p><strong>Quantity:</strong> {stock.quantity}</p>
                <p><strong>Purchase Price:</strong> ${stock.purchasePrice.toFixed(2)}</p>
                <p><strong>Current Price:</strong> ${stock.currentPrice.toFixed(2)}</p>
                <p style={{ color: profitLoss >= 0 ? 'green' : 'red' }}>
                  <strong>Profit/Loss:</strong> ${profitLoss}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default StockList;
