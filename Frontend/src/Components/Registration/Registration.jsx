import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Using lucide-react icons (can change if needed)
import axios from "axios";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const [emailExist,setEmailExist]=useState();
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
    axios.post("http://localhost:3000/users",formData)
    .then(res=>{
      const message=res.data;
      setEmailExist(message);
    //  alert(message);
    alert(message);

      if(message !== "This email already existed"){
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }
      
    })
    .catch(err=>{
      console.log(err.message);
    })
   ;
  };
  

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-800">Create an Account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please fill in the information below to register.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#e45716] focus:border-[#e45716]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#e45716] focus:border-[#e45716]"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
              value={formData.password}
              onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#e45716] focus:border-[#e45716]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
                type={showConfirmPassword ? 'text' : 'password'}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#e45716] focus:border-[#e45716]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EC733B] to-[#e45716] hover:scale-105 duration-300 text-white py-2 px-6 rounded-full cursor-pointer"
            >
              Register
            </button>
          </div>

          {/* Already have an account */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-[#e45716] hover:text-[#EC733B]">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
