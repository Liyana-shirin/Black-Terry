import React, { useState } from "react";
import shirt from "../../images/shirt.jpg";
import shirt2 from "../../images/shirt2.jpg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";

const Cart = () => {
  const [activeFilter, setActiveFilter] = useState('availability');
  const [sortBy, setSortBy] = useState('availability');
  const [productCount] = useState(50);

  const filters = [
    { id: 'availability', label: 'Filter: Availability' },
    { id: 'price', label: 'Price' }
  ];

  const sortOptions = [
    { id: 'availability', label: 'Sort By: Availability' },
    { id: 'price', label: 'Sort By: Price' },
    { id: 'name', label: 'Sort By: Name' }
  ];

  // Product data for better mapping
  const products = [
    { id: 1, image: shirt2, name: "Black and White", price: "999.00" },
    { id: 2, image: shirt2, name: "Black and White", price: "999.00" },
    { id: 3, image: shirt2, name: "Black and White", price: "999.00" },
    { id: 4, image: shirt, name: "Black and White", price: "999.00" },
    { id: 5, image: shirt, name: "Black and White", price: "999.00" },
    { id: 6, image: shirt, name: "Black and White", price: "999.00" },
    { id: 7, image: shirt2, name: "Black and White", price: "999.00" },
    { id: 8, image: shirt2, name: "Black and White", price: "999.00" },
    { id: 9, image: shirt2, name: "Black and White", price: "999.00" },
  ];

  return (
    <div className="p-4">
      {/* Filter and Sort Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {/* Left side: Filter buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex justify-center items-center rounded-md border shadow-sm px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  activeFilter === filter.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Right side: Sort and product count */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full sm:w-auto"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <button className="inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full sm:w-auto">
              {productCount} Products
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid - Improved Responsive Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 sm:h-72 md:h-80 object-cover"
                />
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                  <GoHeart className="text-xl text-gray-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center text-xl font-bold text-gray-900">
                  <FaIndianRupeeSign className="inline mr-1" />
                  <span>{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cart;