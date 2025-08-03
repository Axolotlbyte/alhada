"use client";
import Image from "next/image";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Pools = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="pools"
      // h-[calc(100vh-96px)]
      className="w-full flex flex-col h-auto items-center justify-center"
    >
      <div className="w-full mx-auto relative flex items-center justify-center bg-blue-700 overflow-hidden">
        {/* Floating */}
        <div className="absolute scale-50 md:scale-75 lg:scale-90 xl:scale-100 flex items-center text-5xl font-bold justify-center aspect-square p-5 bg-black/60 border-1 border-white rounded-full top-1/12 left-1/12 z-10 text-white">
          Swim.
        </div>
        <div className="absolute scale-50 md:scale-75 lg:scale-90 xl:scale-100 flex items-center text-4xl font-bold justify-center aspect-square p-5 bg-black/60 border-1 border-white rounded-full top-[28%] left-[22%] z-10 text-white">
          Soak.
        </div>
        <div className="absolute scale-50 md:scale-75 lg:scale-90 xl:scale-100 flex items-center text-3xl font-bold justify-center aspect-square p-5 bg-black/60 border-1 border-white rounded-full top-[45%] left-1/8 z-10 text-white">
          Relax.
        </div>
        <div className="absolute z-10 top-[75%] left-1/12 w-fit p-2 scale-75 md:scale-90 lg:scale-100 rounded-sm bg-black/60 border border-white text-white">
          <p>At Wadi Al Hada's luxury pools</p>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="w-full"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Image
            src={"/images/poolBig.png"}
            alt={images[current].alt}
            width={2000}
            height={2000}
            className="w-full h-[60vh] md:h-[calc(100vh-96px)] object-cover transition-all duration-500"
          />
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={2000}
            height={2000}
            className="w-full h-[60vh] md:h-[calc(100vh-96px)] object-cover transition-all duration-500"
          />
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={2000}
            height={2000}
            className="w-full h-[60vh] md:h-[calc(100vh-96px)] object-cover transition-all duration-500"
          />
        </Carousel>
        {/* Carousel */}
        {/* <Image
          src={images[current].src}
          alt={images[current].alt}
          width={2000}
          height={2000}
          className="w-full h-[60vh] md:h-[calc(100vh-96px)] object-cover transition-all duration-500"
        /> */}
        {/* Left Arrow */}
        {/* <button
          onClick={prevSlide}
          className="absolute flex items-center justify-center left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white h-12 w-12 hover:scale-105 transition md:left-6"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button> */}
        {/* Right Arrow */}
        {/* <button
          onClick={nextSlide}
          className="absolute flex items-center justify-center right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white h-12 w-12 z-10 hover:scale-105 transition md:right-6"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button> */}
        {/* Dots */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
        </div> */}
      </div>
    </section>
  );
};

export default Pools;
