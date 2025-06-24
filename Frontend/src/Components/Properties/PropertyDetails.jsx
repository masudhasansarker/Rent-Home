import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const location = useLocation();
  const property = location.state;
  const navigate=useNavigate();
  console.log(property);

  if (!property) {
    return <div className="text-center mt-20 text-2xl">No property data available</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-30 mb-20 border rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
      
      {/* Left: Image */}
      {property.image && (
        <div className="w-full md:w-1/2">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      )}

      {/* Right: Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <h1 className="text-4xl font-bold mb-4">{property.title || "Property Title"}</h1>
        <p className="text-xl mb-2"><strong>Area:</strong> {property.area} sq ft</p>
        <p className="text-xl mb-2"><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p className="text-xl mb-2"><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p className="text-xl mb-2"><strong>Price:</strong> {property.price} Taka</p>
        <p className="text-xl mb-2"><strong>Location:</strong> {property.address}</p>
        <p className="text-lg text-black-700 mt-4"><strong>Description:</strong><br /> {property.description}</p>
        <button onClick={()=>navigate("/confirmorder",{ state:property  })} className="w-full mt-5 bg-[#EC733B] text-white py-2 rounded hover:bg-[#d45e28] transition">
                  Add to cart
                </button>
      </div>
      
    </div>
  );
};

export default PropertyDetails;
