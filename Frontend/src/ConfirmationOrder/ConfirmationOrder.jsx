import React, { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const ConfirmationOrder = () => {
  const location = useLocation();
  const priceFromState = location.state?.price || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    contactNumber: '',
    price: priceFromState
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Order Submitted:', formData);
    try {
    const response = await axios.post('http://localhost:3000/payment/init', formData);
    if (response.data?.redirectURL) {
      window.location.href = response.data.redirectURL;
    } else {
      alert('Failed to initiate payment.');
    }
  } catch (error) {
    console.error('Payment Error:', error);
    alert('Something went wrong with payment.');
  }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-800">Order Confirmation</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please fill in your order details below.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Total Price (BDT)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              readOnly // make it non-editable if you prefer
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-6 rounded-full hover:scale-105 transition-transform"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationOrder;
