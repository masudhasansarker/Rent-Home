import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const propertiesPerPage = 8;
  const navigate=useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/viewallproperty")
      .then((res) => {
        setProperties(res.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error.message);
      });
  }, []);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full bg-gray-100 py-12 mt-[70px]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Most Demanded Properties
          </h2>
          <p className="text-gray-500 mt-2">
            Discover the top rental choices that tenants are searching for the most!
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {currentProperties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image or TO-LET text */}
              {property.image ? (
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-black flex items-center justify-center">
                  <h3 className="text-white text-4xl font-bold">TO-LET</h3>
                </div>
              )}

              {/* Property Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC733B] mb-2">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Bed: {property.bedrooms}, Bath: {property.bathrooms}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  To-let from: <em>June</em>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Rent: {property.price} BDT
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {property.address}
                </p>
                <button onClick={()=>navigate("/propertydetails",{ state:property  })} className="w-full bg-[#EC733B] text-white py-2 rounded hover:bg-[#d45e28] transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#EC733B] hover:bg-[#d45e28] rounded disabled:opacity-60"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded ${currentPage === number
                ? 'bg-[#EC733B] text-white'
                : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#EC733B] hover:bg-[#d45e28] rounded disabled:opacity-60"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
