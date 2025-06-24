import React, { useState } from 'react';
import axios from "axios"
const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
    city: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Property Data:', formData);
    
    // Here you can send the form data to backend/API
    axios.post("http://localhost:3000/addProperty",formData)
    .then((res)=>{
      alert(res.data);
    })
    .catch((error)=>{
      console.log(error.message);
    })
    setFormData({
      title: '',
      description: '',
      address: '',
      city: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      area: '',
      image: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-15">
      <h1 className="text-3xl font-bold mb-6 text-center">Application for Add New Property</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Property Title</label>
          <select
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Property title</option>
            <option value="Bachelor Room Rent">Bachelor</option>
            <option value="Family House Rent">Family</option>
            <option value="Office space Rent">Office Space</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Price (BDT)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Area (sq ft)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded h-32"
            required
          />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition cursor-pointer"
          >
            Submit Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
