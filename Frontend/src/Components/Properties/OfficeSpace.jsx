import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
const OfficeSpace = () => {
    const [officeSpaceData, setOfficeSpaceData] = useState([]);
    const navigate=useNavigate();
      useEffect(() => {
        axios.get("http://localhost:3000/officespace")
          .then((res) => {
            setOfficeSpaceData(res.data);
          })
          .catch((err) => {
            console.error("Error fetching Office Space properties:", err.message);
          });
      }, []);
    
      const handleBookNow = (property) => {
        alert(`You have booked: ${property.title} at ${property.address}, ${property.city}`);
      };
    
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-20">Office Space Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officeSpaceData.map((property, index) => (
          <div key={index} className="border p-4 rounded shadow-lg flex flex-col justify-between">
            <div>
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-4">{property.title}</h2>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700 text-sm">
                <p><strong>City:</strong> {property.city}</p>
                <p><strong>Address:</strong> {property.address}</p>
                <p><strong>Price:</strong> {property.price} BDT</p>
                <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                <p><strong>Area:</strong> {property.area} sq ft</p>
              </div>

              <p className="text-gray-700 mt-4 text-sm">{property.description}</p>
            </div>

            <button
              onClick={() => navigate("/confirmorder",{ state: { price: property.price } })}
              className="mt-6 bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfficeSpace
