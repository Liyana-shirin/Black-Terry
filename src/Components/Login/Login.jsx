import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-[650px] h-[400px] bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 shadow-md rounded-xl p-5">
        {/* Logo / Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 p-9">
          BLACK-TERRY
        </h1>

        <h2 className="text-3xl font-bold text-gray-700 mb-5 px-27">
          Login
        </h2>

        {/* Center form fields */}
          {/* Info text */}
          <p className="text-xs text-gray-500 mb-3 px-27">
            Enter your email and we'll send you a login code
          </p>
          <form className="space-y-6 flex flex-col items-center ">
          {/* Email */}
          
            
            <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="email"
              className="w-[400px] px-2 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A3825]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-[400px] bg-[#5A3825] text-white py-3 rounded-md hover:bg-[#3E271B] transition duration-200"
          >
            Continue
          </button>
        </form>
         <div className="ml-26 mt-3 ">
        <a
         href="#"
         className="hover:text-blue-400 text-sm text-gray-400" >
          Privacy
        </a>
       </div>
      </div>
    </div>
  );
};

export default LoginPage;
