import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData,setLoginData]=useState({
    email:"",
    password:""
  })

  const handleOnechange=(e)=>{
      const {name,value}=e.target;
      setLoginData((preData)=>({
        ...preData,
        [name]:value,
      }))
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  //console.log(loginData);
  //send the data to backend and check the validation
  axios.post("http://localhost:3000/login",loginData)
  .then((res)=>{
    //alert(res.data.fullName);
   localStorage.setItem("user", JSON.stringify({
    name: res.data.fullName,
    email: res.data.email,
    _id: res.data._id
  }));
  //soft reload
 
    if(!res.data){
      
      alert("Login not Successful");
    }else{
      alert("Login Successful");
    }
     navigate("/");
    
  })
  .catch((data)=>{
    alert(data.message);
  })
  setLoginData({
    email:"",
    password:""
  })
}


  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-800">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your credentials to access your account.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={loginData.email}
              onChange={handleOnechange}
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
                value={loginData.password}
                onChange={handleOnechange}
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

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EC733B] to-[#e45716] hover:scale-105 duration-300 text-white py-2 px-6 rounded-full cursor-pointer"
            >
              Login
            </button>
          </div>

          {/* Don't have an account */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="font-medium text-[#e45716] hover:text-[#EC733B]">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
