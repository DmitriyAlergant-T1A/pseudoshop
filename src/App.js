import React, { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNow = () => {
    // Implement buy now functionality
    alert('Buy Now functionality to be implemented.');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/iphone15.jpg" alt="iPhone 15" className="my-4 p-10"/>
        <div className="flex m-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded" onClick={handleBuyNow}>
            Buy Now For Just $999
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white text-xl font-semibold py-2 px-4 rounded ml-4" onClick={openModal}>
            Get it today for $45/mo with Pseudobank™ 
          </button>
        </div>
        <h1 className="font-bold text-2xl m-8 font-semibold">Deal of the Day. Only Today at Pseudoshop.</h1>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full flex justify-center items-center" id="my-modal">
          <div className="relative w-11/12 h-5/6 bg-white rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-end p-2">
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition ease-in-out duration-150">
                <span className="text-3xl">&times;</span>
              </button>
            </div>
            <div className="flex-grow p-4">
              <iframe 
                src={`${process.env.REACT_APP_PSEUDOBANK_URL}?vendor=Pseudoshop&ItemName=iPhone%2015&TotalPrice=999&MonthlyPayment=45&LoanTerm=24`} 
                title="Pay Later" 
                className="w-full h-full">
              </iframe>
            </div>

          </div>
        </div>
      )}


    </div>
  );
}

export default App;
