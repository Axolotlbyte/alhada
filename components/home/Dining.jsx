"use client";
import Image from "next/image";
import { useState } from "react";

const dishImages = [
  {
    src: "/images/dining/dishOne.png",
    alt: "Dish 1",
  },
  {
    src: "/images/dining/dishTwo.png",
    alt: "Dish 2",
  },
  {
    src: "/images/dining/dishThree.png",
    alt: "Dish 3",
  },
];

const Dining = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? dishImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === dishImages.length - 1 ? 0 : prev + 1));
  };

  return (
    // <section className="w-full flex flex-col gap-16 justify-center items-center py-8">
    //   <div className="w-11/12 text-center p-5 bg-red-800">
    //     <h1 className="text-5xl font-bold text-white">Dining</h1>
    //   </div>
    //   {/* <div className="flex items-stretch gap-16 w-11/12">

    //     <div className="flex gap-8 w-full h-full flex-col">
    //       <div className="pt-8 flex-1 h-full flex">
    //         <Image
    //           src="/images/contact.png"
    //           alt="Dining"
    //           width={500}
    //           height={500}
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //       <div className=" w-full aspect-video p-12 justify-between items-start flex flex-col bg-[#F7E2AB] ">
    //         <h2 className="text-5xl text-wrap">
    //           Explore a curated menu of global dishes
    //         </h2>
    //         <div className="flex w-full items-baseline justify-between">
    //           <button className="underline text-lg text-black">
    //             Learn more
    //           </button>

    //           <button className="p-5 bg-white">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-arrow-up-right"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex flex-col gap-8 h-full w-full">
    //       <div className="w-full">
    //         <h2 className="text-7xl font-bold text-center">
    //           A World of Flavours at Your Table
    //         </h2>
    //       </div>
    //       <div className="h-full w-full relative flex bg-gradient-to-b from-amber-800 to-cyan-900">
    //         <Image
    //           src="/images/food.png"
    //           alt="Dining"
    //           width={500}
    //           height={500}
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div> */}

    //   <div className="flex h-full bg-blue-500 gap-16 w-11/12 items-stretch justify-stretch">
    //     {/* side one */}
    //     <div className="flex-1 bg-red-500 gap-16 justify-between flex flex-col h-full">
    //       <div className="pt-8 w-full h-full flex-1 flex">
    //         <Image
    //           src="/images/restaurant.png"
    //           alt="Dining"
    //           width={500}
    //           height={800}
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //       <div className="w-full aspect-video p-12 justify-between items-start flex flex-col bg-[#F7E2AB]">
    //         <h2 className="text-5xl text-wrap">
    //           Explore a curated menu of global dishes
    //         </h2>
    //         <div className="flex w-full items-baseline justify-between">
    //           <button className="underline text-lg text-black">
    //             Learn more
    //           </button>
    //           <button className="p-5 bg-white">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               className="bi bi-arrow-up-right"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* side two */}
    //     <div className="flex-1 flex flex-col gap-8 h-full">
    //       <div className="w-full">
    //         <h2 className="text-7xl font-bold text-center">
    //           A World of Flavours at Your Table
    //         </h2>
    //       </div>
    //       <div className="flex-1 w-full relative flex">
    //         <Image
    //           src="/images/food.png"
    //           alt="Dining"
    //           width={500}
    //           height={500}
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section className="w-full overflow-hidden flex flex-col gap-16 justify-center items-center py-8">
    //   <div className="w-11/12 text-center p-5 bg-red-800">
    //     <h1 className="text-5xl font-bold text-white">Dining</h1>
    //   </div>

    //   <div
    //     className="w-11/12 grid grid-cols-2 gap-6"
    //     style={{ height: "600px" }}
    //   >
    //     {/* Big square */}
    //     <div className="bg-red-500 overflow-hidden h-full w-full rounded-lg flex items-center justify-center">
    //       <Image
    //         src="/images/restaurant.png"
    //         alt="Dining"
    //         width={500}
    //         height={800}
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     {/* 3 small squares stacked */}
    //     <div className="grid grid-rows-3 gap-6 h-full">
    //       <div className="bg-blue-500 overflow-hidden rounded-lg flex items-center justify-center">
    //         <Image
    //           src="/images/food.png"
    //           alt="Dining"
    //           width={500}
    //           height={500}
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //       <div className="bg-green-500 rounded-lg flex items-center justify-center">
    //         <span className="text-white font-bold">Small 2</span>
    //       </div>
    //       <div className="bg-yellow-500 rounded-lg flex items-center justify-center">
    //         <span className="text-black font-bold">Small 3</span>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="w-full flex relative min-h-screen flex-col gap-16 ">
      <div className="w-full text-center py-16">
        <div className="w-11/12 max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Exceptional Dining & Food
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Enjoy a curated menu of global dishes in our beautiful restaurant
            setting.
          </p>
        </div>
        <div className="flex md:flex-row gap-6 flex-col">
          <div className="w-full md:w-1/2 overflow-hidden shadow-lg">
            <Image
              src="/images/restaurant.png"
              alt="Restaurant"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dishes Carousel */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden shadow-lg flex items-center justify-center bg-white">
              <Image
                src={dishImages[current].src}
                alt={dishImages[current].alt}
                width={800}
                height={600}
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
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {dishImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full ${
                      current === idx ? "bg-black" : "bg-gray-400"
                    } border border-white`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-indigo-900">
                Explore Our Dishes
              </h2>
              <p className="text-gray-700 mt-2">Use arrows to see more!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
