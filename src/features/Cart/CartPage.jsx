import React, { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mens Retro Crew Neck T shirt",
      originalPrice: 1999,
      discountedPrice: 999,
      size: "S",
      color: "GREY",
      quantity: 1,
      image: "shirt4.jpg",
    },
    {
      id: 2,
      name: "Womens Classic Top",
      originalPrice: 1499,
      discountedPrice: 899,
      size: "M",
      color: "BLACK",
      quantity: 1,
      image: "shirt3.jpg",
    },
  ]);

  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="min-h-screen py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-0">
            Your Cart
          </h1>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Continue shopping
          </button>
        </div>

        {/* Head Row */}
        <div className="hidden md:flex justify-between text-gray-500 text-sm border-b border-black pb-2 mb-5">
          <div>PRODUCT</div>
          <div>QUANTITY</div>
          <div>TOTAL</div>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-300 rounded-lg p-4 bg-white shadow-sm gap-4"
            >
              {/* Product Info */}
              <div className="flex flex-col sm:flex-row flex-1 gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg border border-gray-300 mx-auto sm:mx-0"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-center sm:text-left">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                    <span className="text-lg font-bold flex items-center">
                      <LiaRupeeSignSolid />
                      {item.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through flex items-center">
                      <LiaRupeeSignSolid />
                      {item.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 text-center sm:text-left">
                    SIZE: {item.size} • COLOR: {item.color}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex justify-center items-center border border-gray-400 rounded-md">
                  <button
                    onClick={decrease}
                    className="px-3 py-1 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={increase}
                    className="px-3 py-1 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-800 p-2 rounded-full transition-colors"
                  title="Delete item"
                >
                  <RiDeleteBin6Line className="w-6 h-6" />
                </button>
              </div>

              {/* Total Price */}
              <div className="flex justify-center md:justify-end md:w-48 font-bold text-lg">
                <span className="flex items-center">
                  <LiaRupeeSignSolid />
                  {(item.discountedPrice * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          {/* Empty Cart */}
          {cartItems.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* Summary Section */}
        <div className="w-full mt-10 flex justify-end">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-gray-300 bg-white rounded-lg p-6 shadow-md">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Estimated total</span>
              <span>
                <LiaRupeeSignSolid />
                {subtotal.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Taxes included. Discounts and{" "}
              <span className="underline">shipping</span> calculated at checkout.
            </p>

            <button className="w-full bg-red-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-800 transition-colors duration-300">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
