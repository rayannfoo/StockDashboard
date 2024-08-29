import React, { useState, useContext } from 'react';
import { StockContext } from '../contexts/StockContext';
import { fetchStockData } from '../api';

const StockForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const { stocks, setStocks } = useContext(StockContext);

  const handleAddStock = async (e) => {
    e.preventDefault();

    if (!symbol || !quantity || !purchasePrice) return;

    try {
      const data = await fetchStockData(symbol);

      if (data['Global Quote'] && data['Global Quote']['05. price']) {
        const currentPrice = parseFloat(data['Global Quote']['05. price']);
        const newStock = { symbol, quantity: parseInt(quantity), purchasePrice: parseFloat(purchasePrice), currentPrice };

        // Update the stock list
        setStocks([...stocks, newStock]);
      } else {
        alert('Invalid stock symbol.');
      }

    } catch (error) {
      console.error('Error fetching stock data:', error);
      alert('Failed to fetch stock data. Please try again later.');
    }

    // Reset form fields
    setSymbol('');
    setQuantity('');
    setPurchasePrice('');
  };

  return (
    <form onSubmit={handleAddStock}>
      <input
        type="text"
        placeholder="Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Purchase Price"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
