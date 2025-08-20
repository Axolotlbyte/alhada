"use client";
import Header from "@/components/Header";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Contact from "@/components/home/Contact";
import Break from "@/components/Break.jsx";
import Services from "@/components/home/Services";

const unit = {
  title: "4 Bedroom Apartment",
  desc: "A spacious luxury apartment with four bedrooms, modern amenities, and beautiful views. Perfect for large families seeking comfort and style.",
  images: [
    "/images/units/room.png",
    "/images/units/room.png",
    "/images/units/room.png",
    "/images/units/room.png",
  ],
};

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },

  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
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
    <main className="w-full overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <Header home />

      <div className="w-full aspect-video overflow-hidden flex items-center justify-center relative">
        <Image
          src={"/images/room2.png"}
          height={2000}
          width={2000}
          alt={unit.title}
          className="w-full h-auto object-cover"
          draggable="false"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col py-6 pt-16 items-center justify-center w-11/12">
        <h1>Apartments</h1>
        <p>Crafted for Comfort, Styled for Sophistication</p>
      </div>

      <div className="py-6 pb-16 w-11/12 mx-auto">
        <Break />
      </div>
      {/* Carousel */}
      <div className="w-full h-auto">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={1000}
          // centerMode
          // className=""
          // containerClass="container"
          // dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          // itemClass=""
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
              items: 3,
              // partialVisibilityGutter: 0,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              // partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              // partialVisibilityGutter: 0,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="w-full h-full">
            <Image
              src={unit.images[0]}
              alt={unit.title}
              height={2000}
              width={2000}
              className="w-full h-full transition-all duration-500"
              draggable="false"
            />
          </div>
          <div className="w-full">
            <Image
              src={unit.images[0]}
              alt={unit.title}
              height={2000}
              width={2000}
              className="w-full h-full object-cover transition-all duration-500"
              draggable="false"
            />
          </div>
          <div className="w-full">
            <Image
              src={unit.images[0]}
              alt={unit.title}
              height={2000}
              width={2000}
              className="w-full h-full object-cover transition-all duration-500"
              draggable="false"
            />
          </div>
          <div className="w-full">
            <Image
              src={unit.images[0]}
              alt={unit.title}
              height={2000}
              width={2000}
              className="w-full h-full object-cover transition-all duration-500"
              draggable="false"
            />
          </div>
        </Carousel>
      </div>

      <div className="text-center py-16 w-1/2 flex flex-col gap-2 mx-auto">
        <h3>
          Fully Furnished Apartments <br />
          1, 2, 3 & 4 Bedroom
        </h3>
        <p>Move-In Ready Comfort Meets Contemporary Living</p>
      </div>

      <section className="w-1/2 mx-auto grid gap-6 pb-16">
        <p>
          Discover a collection of thoughtfully designed apartments tailored to
          modern lifestyles. Whether you're settling in solo, with family, or
          hosting guests, our fully furnished 1, 2, 3, and 4-bedroom residences
          offer the perfect blend of space, style, and convenience.
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong>2-Bedroom Apartments:</strong> Ideal for couples or
            professionals seeking a balance of privacy and functionality.
            Includes a spacious living area, dedicated workspace, and elegant
            furnishings throughout.
          </li>
          <li>
            <strong>3-Bedroom Apartments:</strong> Designed for growing families
            or shared living, with generous common areas, en-suite master
            bedrooms, and ample storage.
          </li>
          <li>
            <strong>4-Bedroom Apartments:</strong> Perfect for larger households
            or those who love to entertain. Features expansive layouts, multiple
            bathrooms, and refined finishes that elevate everyday living.
          </li>
        </ul>

        <h5>Each unit comes fully equipped with:</h5>
        <ul>
          <li>Premium furniture and curated décor</li>
          <li>Modern kitchen appliances and dinnerware</li>
          <li>In-unit laundry, high-speed Wi-Fi, and smart TVs</li>
          <li>Housekeeping and maintenance services available on request</li>
        </ul>

        <p>
          Whether you're here for a short stay or long-term comfort, our
          apartments are ready to welcome you home — no setup, no stress, just
          seamless living.
        </p>
      </section>

      <Services />

      <Contact />
    </main>
  );
}
