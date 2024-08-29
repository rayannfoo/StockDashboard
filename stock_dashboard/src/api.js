
export const fetchStockData = async (symbol) => {
  const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};