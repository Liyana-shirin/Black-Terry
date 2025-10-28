import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import img1 from "../../images/shirt3.jpg";
import img2 from "../../images/shirt2.jpg"



function Wishlist() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mens Retro Crew Neck T shirt",
      originalPrice: 1999,
      discountedPrice: 999,
      size: "S",
      color: "GREY",
      quantity: 1,
      image: img1,
    },
    {
      id: 2,
      name: "Men's Retro Crew Neck T shirt",
      originalPrice: 1499,
      discountedPrice: 899,
      size: "M",
      color: "BLACK",
      quantity: 1,
      image: img2,
    },
  ]);

        const handleDelete = (id) => {
            const updatedCart = cartItems.filter((item) => item.id !== id);
            setCartItems(updatedCart);
        };


  return (
    <div className="min-h-screen py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-0">
            WishList
          </h1>
            <a href="/cart" className=" underline underline-offset-1 font-bold ">continue shopping</a>
          
        </div>

        {/* Cart Items */}
        <div className="flex flex-wrap gap-5 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col  p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
                
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover bg-gray-100  rounded-lg mb-2"
              />
               
              <span className="font-medium ">{item.name}</span>
              <div className="flex gap-2 mt-1">
                <span className=" font-bold text-sm">
                  ₹{item.discountedPrice}
                </span>
                <span className="text-gray-500 line-through text-sm ">
                  ₹{item.originalPrice}
                </span>
              </div>
                 <div className="text-gray-500 text-sm p-1">
                  size:{item.size}
                </div>
                <div className="flex justify between ">
                <button className="hover:bg-gray-500 border border-gray-800 bg-red-950 text-white rounded-lg font-semibold px-16 transition">
                    Add to Cart
                </button>

                 <button
                 onClick={() => handleDelete(item.id)}
                 className="text-gray-400 hover:text-red-800 bg-gray-200 rounded-lg p-4 transition-colors "
                 title="Delete item">
                 <RiDeleteBin6Line className="h-4" />
                 </button>
                </div>
                <div>
                </div>
            </div>
           
          ))}
      <div>
      <Link to="/cart">
        <button className="hover:bg-gray-300 border-gray-800 bg-gray-100 rounded-lg font-semibold w-68 h-80 mt-4 px-10 transition">
         <span className="text-5xl text-gray-500"> + </span>
        </button>
      </Link>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
