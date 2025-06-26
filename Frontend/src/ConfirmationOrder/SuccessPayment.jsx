import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SuccessPayment = () => {
  const { tran_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // You can log the transaction ID or send it to backend for record keeping
    console.log("Payment successful. Transaction ID:", tran_id);
    // Optional: redirect after few seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [tran_id, navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
        <p className="text-gray-700 text-lg">Your booking has been confirmed.</p>
        <p className="text-sm text-gray-500 mt-2">Transaction ID: {tran_id}</p>
        <p className="text-xs text-gray-400 mt-4">You’ll be redirected to the homepage shortly...</p>
      </div>
    </div>
  );
}

export default SuccessPayment
