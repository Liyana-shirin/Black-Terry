import React, { useState } from 'react';
import shirt4 from "../../images/shirt4.jpg";
import { Link } from 'react-router-dom';

function Cart2() {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-9 bg-white shadow-md">
  {/* Left: Image */}
  <div className="flex justify-center md:w-1/2">
    <img
      src={shirt4}
      alt="shirt img"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>

  {/* Right: Content */}
  <div className="flex-1 flex flex-col gap-4 md:pl-10">
    <h1 className="text-2xl font-semibold mb-3">BLACK & WHITE RED 911.PATCH</h1>
    <div className="text-2xl font-bold mb-2">₹ 999.00</div>
    <h4 className="text-sm text-gray-500 mb-6">
      TAXES INCLUDED. SHIPPING CALCULATED AT CHECKOUT
    </h4>

    {/* Size Tabs */}
    <div className="flex flex-col mb-10">
      <h2 className="text-lg font-bold mb-2">Select Size</h2>
      <div className="flex gap-4 mb-2 flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-2 rounded border font-medium transition ${
              selectedSize === size
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-red-700"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="text-lg font-semibold">
        Selected Size: {selectedSize || "None"}
      </div>
    </div>

    {/* Quantity Selector */}
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-lg font-semibold">Quantity:</h2>
      <div className="flex items-center justify-between border border-gray-400 rounded-md w-32 px-2">
        <button
          onClick={decreaseQuantity}
          className="px-3 py-2 text-lg font-bold hover:bg-gray-200 rounded-l-md transition"
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="px-3 py-2 text-lg font-bold hover:bg-gray-200 rounded-r-md transition"
        >
          +
        </button>
      </div>
    </div>

    {/* Action Buttons */}
    <div className=" gap-4 mt-2 w-full gap-3 sm:w-2/3">
      <button className="hover:bg-gray-500 border border-gray-800 rounded-lg text-black font-semibold py-4 px-8 transition">
        🛒 Add to Cart
      </button>
      <button className="bg-red-800 hover:bg-gray-800 border border-gray-800 rounded-lg font-semibold text-white py-4 px-10 transition">
        Buy It Now
      </button>
    </div>

    {/* Footer Links */}
    <div className="flex text-gray-800 gap-10 mt-8 text-sm">
      <h6 className="cursor-pointer hover:underline">Share</h6>
      <Link to="/details">
      <h6 className="cursor-pointer hover:underline">View Full Details</h6>
      </Link>
    </div>
  </div>
</div>

  );
}

export default Cart2;
