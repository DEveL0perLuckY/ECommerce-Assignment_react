import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Payment Successful!</h1>
      <p className="text-success my-3">Your payment has been processed successfully.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/')}
        >
          Track Your Order
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
