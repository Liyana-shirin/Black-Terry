import React from 'react'
import img2 from "../Details/Images/Img1.jpg"
import { AiOutlineDelete } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Order() {
  return (
                 
  <div className='flex flex-col lg:flex-row justify-between items-start m-4 lg:m-15 h-auto lg:h-screen gap-6'>
  <div className='w-full lg:w-1/2 gap-5'>
    <h1 className='text-3xl font-semibold mb-5'>Your Order</h1>

    <div className="border border-gray-500 rounded-md p-4 flex gap-4">
      <div className="flex-shrink-0">
        <img
          src={img2}
          alt=""
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">Men's Retro Crew Neck T shirt</p>
        <p className="text-xs text-gray-400 mt-1">COLOR : GREY</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <p className="font-semibold">₹999</p>
        <AiOutlineDelete className="text-gray-500 cursor-pointer hover:text-red-500" />
      </div>
    </div>

    <div className="border border-gray-500 rounded-md mt-6">
      <p className="text-xl font-medium p-4">Order summary</p>
      <div className='flex flex-col p-4 gap-3'>
        <p className="mt-1">Subtotal</p>
        <p className="mt-1">Shipping charge</p>
        <p className="mt-1">Taxes</p>
        <p className="mt-1">Discount</p>
      </div>
    </div>
  </div>

  <div className='w-full lg:w-1/2 gap-5 mt-3 lg:mt-0 p-5'>
    <div className="border border-gray-500 rounded-md mt-6 relative">
      <div className="absolute top-2 right-2">
        <MdKeyboardArrowDown className="text-xl" />
      </div>
      <p className="text-base font-bold p-4">Customer</p>
      <div className='flex flex-col p-4 gap-3'>
        <div className='flex gap-2 items-center'>
          <RiUser3Line className='mt-1'/>
          <p className="text-gray-500">Marvin McKinney</p>
        </div>
        <div className='flex gap-2 items-center'>
          <HiOutlineShoppingBag  className='mt-1'/>
          <p className="text-gray-500">1 Order</p>
        </div>
      </div>
    </div>

    <div className="border border-gray-500 rounded-md mt-6 relative">
      <div className="absolute top-2 right-2">
        <Link to="/profile">
          <CiEdit className="text-2xl" />
        </Link>
      </div>
      <p className="text-base font-bold p-4">Customer Information</p>
      <div className='flex flex-col p-4 gap-3'>
        <div className='flex gap-2 items-center'>
          <GoMail className='mt-1'/>
          <p className="text-gray-500">debbie.baker@example.com</p>
        </div>
        <div className='flex gap-2 items-center'>
          <MdOutlinePhone className='mt-1'/>
          <p className="text-gray-500">(239) 555-0108</p>
        </div>
      </div>
    </div>

    <div className="border border-gray-500 rounded-md mt-6 relative">
      <div className="absolute top-2 right-2">
        <CiEdit className="text-2xl" />
      </div>
      <p className="text-base font-bold p-4">Shipping Address</p>
      <div className='flex flex-col p-4 gap-3'>
        <div className='flex gap-2 items-center'>
          <RiUser3Line className='mt-1'/>
          <p className="text-gray-500">2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div className='flex gap-2 items-center'>
          <HiOutlineShoppingBag className='mt-1'/>
          <p className="text-gray-500">(239) 555-0108</p>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
  )
}

export default Order
