// OrderPage.js
import React, { useState, useContext } from 'react';
import Navbar from '../components/Navbar';

import { useCart } from '../components/ContextReducer'; 

import '../OrderPage.css';

function OrderPage() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const cart = useCart(); 

  const handlePayment = (method) => {
    setPaymentMethod(method);

    setTimeout(() => {
      setOrderSuccess(true);
    }, 2000);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + calculateTotalPrice(item), 0);
  };

  const calculateTotalPrice = (item) => {
    const price = item.price === 'half' ? item.Price[0].half : item.Price[0].full;
    return item.quantity * parseFloat(price);
  };

  return (
    <div>
      <Navbar />
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p className="total-amount">Total Amount: Rs. {calculateTotalAmount()}</p>

        {paymentMethod && (
          <p className="payment-method">Payment Method: {paymentMethod}</p>
        )}

        <div className="payment-buttons">
          <button onClick={() => handlePayment('COD')}>Pay with COD</button>
          <button onClick={() => handlePayment('UPI')}>Pay with UPI</button>
        </div>

        {orderSuccess && (
          <div className="order-success">
            <p>Order Successful! <span role="img" aria-label="checkmark">&#9989;</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderPage;
