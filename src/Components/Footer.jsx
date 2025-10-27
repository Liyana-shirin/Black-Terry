import React from 'react'
import logo from "../images/footer-logo.png";

function Footer() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Logo Section */}
          <section className='flex-1'>
            <div className='flex justify-center md:justify-start'>
              <img src={logo} alt='logo' className='h-28 w-28 sm:h-32 sm:w-32 lg:h-35 lg:w-35 p-2'/>
            </div>
          </section>

          {/* Navigation Links */}
          <section className='flex-1'>
            <div className='flex flex-col gap-3 text-center md:text-left'>
              <a href="Home" className="hover:text-gray transition duration-300 leading-normal">
                Home
              </a>
              <a href="about" className=" hover:text-gray transition duration-300">
                About
              </a>
              <a href="contact" className=" hover:text-gray transition duration-300">
                Contact
              </a>
              <a href="reviews" className=" hover:text-gray transition duration-300">
                Reviews
              </a>
            </div>
          </section>
          
          {/* Services Links */}
          <section className='flex-1'>
            <div className='flex flex-col gap-3 text-center md:text-left'>
              <a href="#care" className=" hover:text-gray transition duration-300">
                Care
              </a>
              <a href="#exchange" className=" hover:text-gray transition duration-300">
                Exchange Portal
              </a>
              <a href="#gift-card" className=" hover:text-gray transition duration-300">
                Gift Card
              </a>
            </div>
          </section>
          
          {/* Social Links */}
          <section className='flex-1'>
            <div className='flex flex-col gap-3 text-center md:text-left'>
              <a href="#instagram" className=" hover:text-gray transition duration-300">
                Instagram
              </a>
              <a href="mailto:contact@blackterry.com" className=" hover:text-gray transition duration-300">
                Email
              </a>
              <a href="contact" className=" hover:text-gray transition duration-300">
                Contact
              </a>
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 gap-5">
          <div className=" text-gray-400 text-sm flex sm:flex-row justify-center  gap-2 sm:gap-4">
            <span>© 2025, Black terry. All rights reserved.</span>
            <div className="flex  gap-2 sm:gap-4">
              <a href="#refund" className="hover:text-gray transition duration-300">Refund policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-gray transition duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#shipping" className="hover:text-gray transition duration-300">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Footer