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
          src={"/images/poolBig.png"}
          height={2000}
          width={2000}
          alt={unit.title}
          className="w-full h-auto object-cover"
          draggable="false"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col py-6 pt-16 items-center justify-center w-11/12">
        <h1>Pools</h1>
        <p>Dive into Luxury, Float in Style</p>
      </div>

      <div className="py-6 pb-16 w-11/12 mx-auto">
        <Break />
      </div>
      {/* Carousel */}
      <div className="w-full flex items-center justify-center h-auto">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={1000}
          // centerMode
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
          {[0, 1, 2, 3].map((_, index) => (
            <div className="w-full aspect-square flex items-center justify-center h-full">
              <Image
                src={"/images/poolBig.png"}
                alt={unit.title}
                height={2000}
                width={2000}
                className="w-full h-full transition-all duration-500"
                draggable="false"
              />
            </div>
          ))}

          <div className="w-full aspect-square flex items-center justify-center">
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

      <div className="w-1/2 mx-auto text-center mt-16">
        <h3>A Sanctuary of Pools for Every Mood and Moment</h3>
      </div>

      <section className="py-16 w-1/2 flex flex-col gap-2 mx-auto">
        <p>
          Dive into a world of aquatic elegance with our collection of{" "}
          <strong>nine onsite pools</strong>, each designed to elevate your
          experience—whether you're seeking invigorating laps, sun-drenched
          relaxation, or serene privacy.
        </p>

        <ul className="list-disc pl-6">
          <li>
            <strong>Olympic-Style Indoor Pool</strong>: Perfect for serious
            swimmers and wellness enthusiasts, this temperature-controlled haven
            offers year-round comfort and professional-grade dimensions.
          </li>
          <li>
            <strong>Main Lagoon Pool</strong>: The heart of our outdoor oasis,
            this expansive, resort-style pool invites guests to unwind amidst
            lush landscaping and gentle curves that evoke a tropical escape.
          </li>
          <li>
            <strong>Five Outdoor Pools</strong>: Strategically nestled near
            residential clusters, these pools offer easy access and varied
            atmospheres—from tranquil retreats to family-friendly fun.
          </li>
          <li>
            <strong>Three Private Villa Pools</strong>: Reserved exclusively for
            our villa residents, these secluded gems promise uninterrupted
            serenity and personalized luxury.
          </li>
          <li>
            <strong>Poolside Indulgence</strong>: The first two outdoor pools,
            located in the central amenities area, are complemented by a stylish{" "}
            <em>pool bar</em>, serving refreshing cocktails, gourmet bites, and
            shaded lounge seating—ideal for socializing or simply soaking in the
            ambiance.
          </li>
        </ul>

        <p>
          Whether you're starting your day with a swim, hosting sunset
          gatherings, or escaping into quiet reflection, our poolscape is
          crafted to meet every desire with grace and sophistication.
        </p>
      </section>

      <Services data={[]} />

      <Contact />
    </main>
  );
}
