import React, { useState } from "react";
import shirt4 from "../../images/shirt4.jpg";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col md:flex-row gap-10 p-6 md:p-10 bg-white shadow-lg rounded-lg max-w-6xl mx-auto mt-10 mb-20">
      {/* Left: Image */}
      <div className="flex justify-center md:w-1/2">
        <img
          src={shirt4}
          alt="Product"
          className="w-full max-w-md sm:max-w-lg h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right: Product Info */}
      <div className="flex-1 flex flex-col gap-4 md:pl-6">
        {/* Title & Price */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          BLACK & WHITE RED 911.PATCH
        </h1>
        <div className="text-2xl font-bold text-gray-900">₹ 999.00</div>
        <h4 className="text-sm text-gray-500">
          TAXES INCLUDED. SHIPPING CALCULATED AT CHECKOUT
        </h4>

        {/* Size Selector */}
        <div className="flex flex-col mb-6">
          <h2 className="text-lg font-bold mb-2">Select Size</h2>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-md border font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-red-700 text-white border-red-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-md font-medium mt-2">
            Selected Size:{" "}
            <span className="text-gray-700">
              {selectedSize || "None"}
            </span>
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-lg font-semibold">Quantity:</h2>
          <div className="flex items-center border border-gray-400 rounded-md w-32 justify-between">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-2 text-lg font-bold hover:bg-gray-200 transition rounded-l-md"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-2 text-lg font-bold hover:bg-gray-200 transition rounded-r-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-3/4">
          <button className="hover:bg-gray-500 border border-gray-800 rounded-lg text-black font-semibold py-3 px-8 transition">
            🛒 Add to Cart
          </button>
          <button className="bg-red-800 hover:bg-gray-800 border border-gray-800 rounded-lg font-semibold text-white py-3 px-10 transition">
            Buy It Now
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-6 text-gray-800 mt-8 text-sm">
          <h6 className="cursor-pointer hover:underline">Share</h6>
          <Link to="/details">
            <h6 className="cursor-pointer hover:underline">
              View Full Details
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart2;
