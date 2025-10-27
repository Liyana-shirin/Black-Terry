import React, { useEffect, useRef, useState } from "react";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide1.png";
import slide3 from "../images/slide1.png";

function Main() {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        carousel.scrollTo({
          left: carousel.offsetWidth * nextSlide,
          behavior: "smooth",
        });
        return nextSlide;
      });
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    carouselRef.current?.scrollTo({
      left: carouselRef.current.offsetWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="w-full flex overflow-x-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center"
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover max-h-[90vh] min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots - Always Visible */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on medium+ screens */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hidden md:flex items-center justify-center z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hidden md:flex items-center justify-center z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Counter (Optional) */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm hidden sm:block">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}

export default Main;