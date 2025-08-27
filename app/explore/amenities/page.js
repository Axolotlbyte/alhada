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
          src={"/images/drone/events.jpg"}
          height={2000}
          width={2000}
          alt={unit.title}
          className="w-full h-auto object-cover"
          draggable="false"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col py-6 pt-16 items-center justify-center w-11/12">
        <h1>Amenities</h1>
        <p>
          Thoughtfully curated amenities that elevate everyday living into a
          seamless blend of comfort, luxury, and connection.
        </p>
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
        <h3>Comprehensive Amenities</h3>
        <p>
          Designed to enrich daily life and elevate every experience, our
          amenities area offers a seamless fusion of comfort, recreation,
          productivity, and indulgence. 
        </p>
      </div>

      <section className="amenities-area w-1/2 mx-auto text-center flex flex-col gap-4">

        <div className="amenities-section grid gap-4">
          <h4> Essentials & Everyday Convenience</h4>
          <p>
            Residents enjoy effortless access to practical services including
            modern laundry facilities and a well-stocked minimart for daily
            necessities. These conveniences ensure that even routine tasks are
            handled with ease, allowing more time for what truly matters.
          </p>

          <h4> Dining, Bars & Social Spaces</h4>
          <p>
            Culinary variety awaits with a selection of restaurants offering
            both casual and fine dining experiences. The pool bar invites
            sun-soaked relaxation with refreshing beverages, while the sports
            bar provides a lively setting to catch the latest games and
            socialize with fellow residents. Each venue is designed to foster
            community and indulgence.
          </p>

          <h4> Pools & Aquatic Escapes</h4>
          <p>
            The lagoon pool offers a resort-style retreat surrounded by lush
            landscaping, perfect for leisurely afternoons and family fun. For
            year-round enjoyment, the indoor pool provides a tranquil,
            climate-controlled environment ideal for swimming, wellness, or
            quiet reflection.
          </p>

          <h4> Outdoor & Indoor Sports Facilities</h4>
          <p>
            Whether you're a seasoned athlete or simply enjoy staying active,
            our sports facilities cater to every preference. Outdoor courts
            include basketball, paddle, and tennis, all professionally
            maintained for optimal play. Indoors, a full-sized basketball court
            ensures uninterrupted activity regardless of weather.
          </p>

          <h4> Entertainment & Games</h4>
          <p>
            For relaxed recreation, the entertainment zone features a bowling
            alley, billiards lounge, and foosball tables—perfect for friendly
            competition or unwinding with friends and family. These spaces bring
            playful energy and casual luxury to the heart of the community.
          </p>

          <h4> Business & Event Spaces</h4>
          <p>
            Productivity and celebration coexist in our versatile business and
            event facilities. Private offices offer a quiet, professional
            setting for focused work, while elegant meeting halls and a spacious
            events area accommodate everything from corporate gatherings to
            personal milestones. Each space is equipped to support both
            efficiency and inspiration.
          </p>

          <p>
            Altogether, this amenities area reflects a commitment to holistic
            living—where every detail supports a lifestyle of ease, connection,
            and elevated experience. Whether you're working, relaxing,
            entertaining, or exploring, you'll find the perfect space to thrive.
          </p>
        </div>
      </section>

      <Services />

      <Contact />
    </main>
  );
}
