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
        <h1>Townhouses</h1>
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
          className=""
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
              items: 2,
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
        <h3> Sophisticated Living in Our Fully Furnished Townhouses</h3>
        <p>
          Step into a world of refined comfort and contemporary elegance. Our
          fully furnished 4-bedroom townhouses are thoughtfully designed to
          offer the perfect balance of privacy, style, and functionality—ideal
          for families, professionals, or long-term guests seeking a seamless
          living experience.
        </p>
      </div>

      <section className="w-1/2 mx-auto grid gap-6 pb-16">
        <div className="townhouse-listing">
          <ul className="features-list list-disc pl-6">
            <li>
              <strong>Four spacious bedrooms</strong>, including a master suite
              with en-suite bath and walk-in wardrobe
            </li>
            <li>
              <strong>Designer furnishings</strong> curated for both aesthetic
              appeal and everyday comfort
            </li>
            <li>
              <strong>Open-plan living and dining areas</strong> with natural
              light and premium finishes
            </li>
            <li>
              <strong>Modern kitchen</strong> equipped with high-end appliances
              and sleek cabinetry
            </li>
            <li>
              <strong>Private outdoor space</strong>—perfect for morning coffee
              or evening gatherings
            </li>
            <li>
              <strong>Dedicated parking and 24/7 security</strong>, ensuring
              peace of mind and convenience
            </li>
          </ul>

          <p>
            Whether you're relocating, settling in for an extended stay, or
            simply seeking a turnkey lifestyle, these townhouses offer a
            sanctuary of sophistication in a vibrant community setting.
          </p>
        </div>

        <h5>Each unit comes fully equipped with:</h5>
        <ul className="list-disc pl-6">
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
