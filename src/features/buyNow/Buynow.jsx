import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import shirt1 from "../buyNow/image/shirt1.jpg";
import { Link } from 'react-router-dom';

function Buynow() {
  return (
 <div className="flex flex-col min-h-screen w-full py-10 border-t-2 mb-3 border-gray-300">
      
      {/* Main content */}
      <div className="relative flex-1 flex justify-center items-start px-10">

        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-px bg-gray-400"></div>


              <form action=""
                  className=' w-1/2 space-y-4 p-15'>
                    <div className=' flex justify-between'>
                  <h2 className='text-4xl font-bold mb-3'>BLACK-TERRY</h2>
                  
                       <Link
                        to="/shop"
                        className="w-7 h-7 flex items-center justify-center text-gray-700 hover:text-black"
                        >
                        <RiShoppingBag4Line className="text-2xl" />
                        </Link>
                  </div>
                  <div className='flex flex-row justify-between '>
                      <h2 className='text-3xl font-semibold'>Contact</h2>
                      <p className='font-semibold underline text-xl'>Login</p>
                  </div>


                  <div>
                      <input type="email"
                          placeholder='email'
                          className='w-full border border-gray-300 rounded-md p-2' />
                      <input type="checkbox"
                          className='w-4 h-4 mt-4 ' />
                      <span className='px-3 text-sm'>email me with news and offers </span>
                  </div>

                  <div className='p-2'>
                      <h1 className='font-semibold text-3xl mb-3 '>Delivery</h1>
                      <div className=''>
                          <input type="text"
                              placeholder='country/religion'
                              className='w-full border border-gray-300 rounded-md p-3' />

                      </div>
                  </div>
                  <div className=' flex justify-between gap-2 p-2'>
                      <input type="text"
                          placeholder='first name'
                          className='w-full border border-gray-300 rounded-md p-4' />
                      <input type="text"
                          placeholder='last name'
                          className='w-full border border-gray-300 rounded-md p-4' />
                  </div>
                  <input type="text"
                      placeholder='Address'
                      className='w-full border border-gray-300 rounded-md p-4' />

                  <div className='flex gap-7'>
                      <input type="text"
                          placeholder='first name'
                          className='w-full border border-gray-300 rounded-md p-4' />
                      <input type="text"
                          placeholder='last name'
                          className='w-full border border-gray-300 rounded-md p-4' />
                      <input type="text"
                          placeholder='Address'
                          className='w-full border border-gray-300 rounded-md p-4' />
                  </div>
                  <input type="number"
                      placeholder='phone number'
                      className='w-full border border-gray-300 rounded-md p-4' />
                  <div>
                      <input type="checkbox"
                          className='w-4 h-4 p-2' />
                      <span className='p-2'>Save this information into next time</span>


                      <h1 className='font-semibold text-2xl mt-7'>Delivery</h1>
                      <p className='text-gray-400 p-1'>All transactions are secure and encrypted. </p>
                  </div>


                  <div className=" mt-4 rounded-md">

                      <div className="flex items-center justify-between p-4 border rounded-tl-lg rounded-tr-lg">
                          <p className="text-gray-700 font-medium">
                              PhonePe Payment Gateway (UPI, Cards & NetBanking)
                          </p>

                          <div className="flex gap-3">
                              <div className="border border-gray-300 rounded-md h-8 w-16 p-2"></div>
                              <div className="border border-gray-300 rounded-md h-8 w-16 p-2"></div>
                              <div className="border border-gray-300 rounded-md h-8 w-16 p-2"></div>
                              <div className="border border-gray-300 rounded-md h-8 w-16 p-2"></div>
                          </div>
                      </div>
                      <div className=' flex justify-center w-full border border-gray-300 rounded-bl-lg rounded-br-lg '>

                          <div className=' flex flex-col items-center p-7'>
                              <CiCreditCard1 className='w-60 h-40 ' />
                              <p className='justify text-center break-words'>After clicking “Pay now”, you will be redirected to PhonePe<br></br>
                                  Payment Gateway (UPI, Cards & NetBanking) to complete<br></br>
                                  your purchase securely.</p>

                          </div>
                      </div>

                      <div className='mb-3 '>
                          <h1 className='font-semibold text-3xl mt-7 '>Billing address</h1>
                          <div className='border border-gray-300 hover:border-gray-950 rounded-tl-lg rounded-tr-lg p-4 mt-5 '>
                              <input type="radio" name='' />
                              <label className='p-4'>Same as Shipping address</label>

                          </div>
                          <div className='border border-gray-300 hover:border-gray-950 rounded-bl-lg rounded-br-lg p-4 '>
                              <input type="radio" />
                              <label className='p-4'>Same as Shipping address</label>

                          </div>
                          <button className='bg-[#50311D] text-white font-semibold justify-center text p-4 rounded-lg px-20 w-full mt-5'>Pay now</button>
                      </div>
                  </div>
              </form>

          
             
<div className="w-1/2 p-15 ">
  {/* Product Section */}
  <div className="flex items-center space-x-4 mb-6">
    <img
      src={shirt1}
      alt="Shirt"
      className="w-40 h-28 object-cover rounded-md border border-gray-200"
    />
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
          Men's Retro Crew Neck <br /> T shirt
        </h2>
        <p className="text-lg font-semibold text-gray-900">₹999</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">SIZE : S</p>
        <p className="text-sm text-gray-500">COLOR : GREY</p>
      </div>
    </div>
  </div>

  {/* Coupon Input */}
  <div className="flex mb-6 gap-5">
    <input
      type="text"
      placeholder="Discount coupon or gift card"
      className="flex-1 p-4 border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-gray-500"
    />
    <button
      type="button"
      className="  rounded-lg p-4 text-gray-400 border border-gray-300 font-semibold px-6  transition"
    >
      Apply
    </button>
  </div>

  {/* Price Details */}
  <div className="space-y-3 text-gray-800">
    <div className="flex justify-between">
      <p>Subtotal</p>
      <p>₹999.00</p>
    </div>

    <div className="flex justify-between text-gray-500">
      <p>Shipping</p>
      <p>Enter shipping address</p>
    </div>

    <div className="flex justify-between font-semibold text-lg  pt-3">
      <p>Total</p>
      <p className="text-gray-900"> <span className='text-gray-500'>INR </span>₹999.00</p>
    </div>
  </div>
</div>


        </div>
        </div>
        
         
      
             
        

      
    
  )
}
 
export default Buynow
