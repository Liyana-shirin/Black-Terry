import React from 'react'
import about1 from "../../images/about1.jpg";
import abt3 from "../../images/abt3.png";
import abt2 from "../../images/abt2.jpg";
import abt4 from "../../images/abt4.jpg";



function About() {
  return (
    <><div className="flex justify-center items-center ">
          <img
              src={about1}
              alt="Sample"
              className="w-screen h-auto shadow-lg object-cover mt-2 mb-10" />
      </div>
      
      <div className="bg-[#f9f5f1] text-gray-800 px-6 sm:px-10 md:px-20 py-16">
              <div className="max-w-4xl mx-auto space-y-6">
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                      Crafted with Passion, Designed for Everyone, Made to Inspire.
                  </h2>

                  {/* Paragraphs */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Welcome to Black Terry – a brand built by a dedicated team with a vision to create premium,
                      accessible fashion that reflects individuality and authenticity.
                  </p>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      At Black Terry, we believe in the power of bold expression and timeless style. Our designs
                      embrace modern trends while staying true to classic aesthetics, ensuring each piece resonates
                      with our dynamic and diverse community.
                  </p>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    At Black Terry, we believe in the power of bold expression and timeless style.
                     Our designs embrace modern trends while staying true to classic aesthetics, 
                    ensuring each piece resonates with our dynamic and diverse community.
                  </p>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      More than just clothing, we’re cultivating a movement—one that values quality, inclusivity,
                      and creativity. Our collections are designed to make you feel confident, unique, and part of
                      something bigger.
                  </p>

                  {/* Bottom highlight line */}
                  <p className="font-semibold text-gray-900 mt-6">
                      Express Yourself. Embrace Quality. Live Black Terry.
                  </p>
              </div>
          </div>
          <section className="bg-[#f9f5f1] ">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <img
          src={abt3}
          alt="Fashion 1"
          className="w-full h-110 object-cover shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={abt2}
          alt="Fashion 2"
          className="w-full h-110 object-cover shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={abt4}
          alt="Fashion 3"
          className="w-full h-110 object-cover shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section></>
    
  );
}

export default About
