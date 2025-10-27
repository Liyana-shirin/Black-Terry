import React from "react";
import img1 from "../Details/Images/featureimg1.jpg";
import img2 from "../Details/Images/featureimg2.jpg";
import img3 from "../Details/Images/featureimg3.jpg";
import img4 from "../Details/Images/featureimg4.jpg";

function Details2() {
  const products = [
    {
      title: "Classic Cotton Shirt",
      price: "999.00",
      image: img1,
    },
    {
      title: "Denim Jacket",
      price: "899.00",
      image: img2,
    },
    {
      title: "Casual T-Shirt",
      price: "799.00",
      image: img3,
    },
    {
      title: "Formal Blazer",
      price: "1299.00",
      image: img4,
    },
  ];

  return (
    <>
    <div className="h-auto m-5 mb-20">
      {/* Section Title */}
      <div className=" text-2xl font-semibold p-6 md:p-10">
        <h1>FIND YOUR NEXT FAVORITE</h1>
      </div>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="p-1 group cursor-pointer transform transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-55 md:h-82 object-cover  
                         border-2 border-transparent hover:border-gray-500 
                         hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-3 group-hover:text-gray-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-600 font-medium">₹{item.price}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Details2;
