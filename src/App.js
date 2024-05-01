import React from 'react';
import './App.css';

function App() {
  const handleBuyNow = () => {
    // Implement buy now functionality
    alert('Buy Now functionality to be implemented.');
  };

  const openPayLaterIframe = () => {
    const iframeUrl = `https://pseudobank.site/BuyNowPayLater?ItemName=iPhone%2015&TotalPrice=999&MonthlyPayment=45&LoanTerm=24`;
    window.open(iframeUrl, '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/iphone15.jpg" alt="iPhone 15" className="my-4 p-10"/>
        <div className = "flex m-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={handleBuyNow}>
            Buy Now For Just $999
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded ml-4" onClick={openPayLaterIframe}>
            Pay Later for only $45/mo
          </button>
         </div>
         <h1 className="font-bold text-2xl m-8 font-semibold">Deal of the Day. Only Today at Pseudoshop.</h1>
      </header>
    </div>
  );
}

export default App;
