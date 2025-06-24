import React from 'react'
const LoginAdmin = () => {
  return (
    <div className="min-h-screen pt-5 flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-10 space-y-8">
            <div>
              <h2 className="text-center text-4xl font-extrabold text-gray-800">Sign in to your account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Enter your credentials to access your account.
              </p>
            </div>
            <form className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
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
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#e45716] focus:border-[#e45716]"
                  />
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
            </form>
          </div>
        </div>
  )
}

export default LoginAdmin
