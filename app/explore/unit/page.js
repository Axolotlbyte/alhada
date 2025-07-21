"use client";
import { useState } from "react";

const unit = {
  title: "4 Bedroom Apartment",
  desc: "A spacious luxury apartment with four bedrooms, modern amenities, and beautiful views. Perfect for large families seeking comfort and style.",
  images: [
    "/images/units/4bed-1.png",
    "/images/units/4bed-2.png",
    "/images/units/4bed-3.png",
    "/images/units/4bed-4.png",
  ],
};

export default function UnitPage() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? unit.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === unit.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <div className="w-11/12 max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Carousel */}
        <div className="w-full md:w-2/3 flex flex-col items-center relative">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-white">
            <img
              src={unit.images[current]}
              alt={unit.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-10 hover:bg-black/70 transition"
              aria-label="Previous"
            >
              &#8592;
            </button>
            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-10 hover:bg-black/70 transition"
              aria-label="Next"
            >
              &#8594;
            </button>
            {/* Thumbnails (side on desktop, below on mobile) */}
            <div className="hidden md:flex flex-col gap-2 absolute right-[-70px] top-1/2 -translate-y-1/2">
              {unit.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 ${
                    current === idx ? "border-black" : "border-transparent"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex md:hidden gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
              {unit.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-4 h-4 rounded-full ${
                    current === idx ? "bg-black" : "bg-gray-400"
                  } border border-white`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Title & Description */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{unit.title}</h1>
          <p className="text-gray-700 text-base md:text-lg">{unit.desc}</p>
        </div>
      </div>
    </section>
  );
}
