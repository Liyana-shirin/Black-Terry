import React from "react";
import Img1 from "./Images/img1.jpg";
import Img2 from "./Images/img2.jpg";
import Img3 from "./Images/img3.jpg";
import Img4 from "./Images/img4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Details1() {
   const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  
   const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Product Specifications:",
      checked: true,
      content: (
        <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
          <li>Material: 100% Cotton</li>
          <li>Fit: Regular</li>
          <li>Color: Blue</li>
          <li>Made in India</li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Shipping & Return",
      checked: true,
      content: (
        <p className="text-sm text-gray-600">
          Free shipping for orders above ₹999. Easy 7-day return policy.
        </p>
      ),
    },
    {
      id: 3,
      title: "Wash Care",
      checked: true,
      content: (
        <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
          <li>Machine wash cold</li>
          <li>Do not bleach</li>
          <li>Tumble dry low</li>
        </ul>
      ),
    },
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };


  return (
    <div className="flex flex-col lg:flex-row min-h-screen m-5 justify justify-self-center p-10 gap-10">
      {/* Left - Small Preview Images */}
      <div className="flex flex-col  items-center gap-4 box-content">
        {[Img1, Img2, Img3, Img4].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`preview-${index}`}
            className="w-20 h-20 border-2 border-gray-300 rounded-md object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>

      {/* Center - Main Product Image */}
      <div className="flex flex-1">
        <img
          src={Img1}
          alt="Main"
          className="w-auto h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Right - Product Details */}
      <div className="flex flex-col w-1/3 m-0">
        <h1 className="text-2xl sm:text-3xl font-bold break-words leading-tight mb-4">
          Men's Retro Color Crew Neck T-Shirt Casual Cotton
        </h1>


       <div className="flex gap-4 whitespace-nowwrap justify center ">
         <h6 className="font-bold text-2xl base mb-4">
          999.00
        </h6>
        <span className="text-gray-500 line-through text-sm p-2 text-center">1999.00</span>
        <p className="text-gray-500 text-sm px-21 p-2  ">save 50% right now</p>
    
       </div>
        <div className="flex flex-col ">

        <p className="text-sm p-3 font-bold text-start">colors</p>
        <div className="flex flex-row gap-3">
        <div className="bg-gray-300 w-8 h-8 rounded-sm "></div>
        <div className="bg-gray-500 w-8 h-8 rounded-sm "></div>
        <div className="bg-gray-800 w-8 h-8 rounded-sm "></div>
        <Link
         to = '/sizechart'>
        <p className="underline underline-offset-1 text-gray-500 mt-3 px-30">Size chart</p>
        </Link>
        
        </div>
        <div className="flex flex-row  gap-5 m-0 mt-4">
            <button className="bg-gray-300 hover:bg-red-800 rounded-sm  w-15 h-10 ">S</button>
            <button  className="bg-gray-300 hover:bg-red-800 rounded-sm  w-15 h-10">M</button>
            <button className="bg-gray-300 hover:bg-red-800 rounded-sm  w-15 h-10">L</button>
            <button className="bg-gray-300 hover:bg-red-800 rounded-sm  w-15 h-10">XL</button>
            <button className="bg-gray-300 hover:bg-red-800  rounded-sm  w-15 h-10">XXL</button>


        </div>
        </div>
        <div>
            <p className="text-gray-500 p-2">Quantity</p> 
        </div>

        {/* quantity box */}

         <div className="flex gap-3 border border-gray-300 rounded ">
      {/* Decrease button */}
      <button
        onClick={decrease}
        className="px-3 py-1 text-3xl font-bold rounded hover:bg-gray-300 transition text-gray-900"
      >
        −
      </button>

      {/* Quantity Display */}
      <span className="text-lg font-bold w-full text-center m-2 text-gray-900 ">
        {quantity}
      </span>

      {/* Increase button */}
      <button
        onClick={increase}
        className="px-3 py-1 text-3xl font-bold rounded hover:bg-gray-300 transition text-gray-900"
      >
        +
      </button>
    </div>

    {/* add to cat buttons */}

    <div className="flex flex-row gap-8 ">
        <button 
         className="w-2/3 text-center border bg:gray-300 bg-red-950 text-white font-bold text-sm rounded-sm mt-4 h-12 transition">
        <Link to ="/shop"> 
       Add to cart  
       </Link>                        
        </button>

    
     <button className="border bg:gray font-bold text-2xl rounded-sm h-11 w-16 flex items-center transition hover:bg-gray-800 mt-5">
    <CiHeart />
   </button>
    </div>
    <button 
         className="text-center border bg:gray-300 bg-red-950 text-white font-bold text-sm rounded-sm mt-4 h-12 transition">
        <Link to ="/buynow"> 
       Buy it Now
       </Link>                        
        </button>
        <div className=" flex-auto">
        <p className="text-gray-400 font-sm whitespace-normal mt-3">Inspired by the divine, crafted for the bold. 
          Elevate your <br></br>presence with celestial power. Be the hue</p>
      </div>

       <div className="w-full max-w-md mx-auto border-t border-gray-200">
      {sections.map((section, index) => (
        <div key={section.id} className="border-b border-gray-200">
          {/* Header */}
          <div
            className="flex items-center justify-between py-3 cursor-pointer"
            onClick={() => toggleSection(section.id)}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={section.checked}
                
              />
              <span className="font-medium text-gray-800">
                {section.title}
              </span>
            </div>
            {openSection === section.id ? (
              <FiChevronUp className="text-gray-600" />
            ) : (
              <FiChevronDown className="text-gray-600" />
            )}
          </div>

          {/* Content */}
          {openSection === section.id && (
            <div className="px-8 pb-4 animate-fadeIn">{section.content}</div>
          )}
        </div>
      ))}
    </div>
    <div>
     <p className="text-gray-400 font-xs whitespace-normal mt-3">
      Free shipping in 2-7 business days
     </p>
      <p className="text-gray-400 font-xs whitespace-normal mt-3">
      Handcrafted with care, made from the heart.
     </p>
      <p className="text-gray-400 font-xs whitespace-normal mt-3">
      <span className="text-black">Color Disclaimer:</span> Actual product colors may vary slightly <br></br>due 
      to screen settings, lighting, and resolution.

     </p>

    </div>
</div>
    </div>
  );
};



export default Details1;
