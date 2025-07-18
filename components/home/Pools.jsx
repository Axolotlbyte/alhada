"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "/images/poolBig.png",
    alt: "Main Pool",
    overlay: true,
  },
  {
    src: "/images/poolBig.png",
    alt: "Kids Pool",
    overlay: false,
  },
  {
    src: "/images/poolBig.png",
    alt: "Indoor Pool",
    overlay: false,
  },
];

const Pools = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full flex h-[calc(100vh-96px)] items-center justify-center bg-[#F7E2AB]">
      <div className="w-full mx-auto relative flex items-center justify-center bg-blue-700 overflow-hidden">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={2000}
          height={2000}
          className="w-full h-[60vh] md:h-[calc(100vh-96px)] object-cover transition-all duration-500"
        />
        {images[current].overlay && (
          <div className="w-2/3 md:w-1/3 absolute left-2 top-2 md:left-6 md:top-6 h-5/6 md:h-11/12 bg-black/30">
            <h2 className="text-white text-2xl md:text-4xl font-bold p-4">
              Swim. <br />
              Soak. <br />
              Relax. <br />
            </h2>
            <p className="px-4 text-white">At Wadi Al Hada's luxury pool</p>
          </div>
        )}
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black h-12 w-12 hover:scale-105 transition md:left-6"
          aria-label="Previous"
        >
          &#8592;
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black h-12 w-12 z-10 hover:scale-105 transition md:right-6"
          aria-label="Next"
        >
          &#8594;
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-white" : "bg-gray-400"
              } border border-white`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pools;
