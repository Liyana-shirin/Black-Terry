import React from "react";
import { useNavigate } from "react-router-dom";


const EmptyCart = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen ">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 font-mono">
        Your Cart is Empty
      </h2>

      <button
        onClick={handleContinueShopping}
        className="mt-2 bg-[#5A3825] text-white font-mono px-15 py-3 rounded-md text-lg font-medium hover:bg-[#3E271B] transition duration-300"
      >
        Continue Shopping
      </button>
    

    <div className="">
    <h1 className="text-center text-2xl font-semibold mt-5">HAVE AN ACCOUNT ?</h1>
    
      <div className="flex flex-row text-center gap-3 p-5">
        <a href="/login" className="text-[#5A3825] underline underline-offset-1 font-bold text-sm">LOGIN</a>
        <h6>TO CHECKOUT FASTER</h6>
      </div>
    
    </div>

    </div>
    </div>
    
    
  );
};

export default EmptyCart;
