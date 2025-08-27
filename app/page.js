"use client";
import { useState, useEffect } from "react";
import Contact from "@/components/home/Contact";
import Games from "@/components/home/Games";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Welcome from "@/components/home/Welcome";
import Pools from "@/components/home/Pools";
import Dining from "@/components/home/Dining";
import Gym from "@/components/home/Gym";
import Header from "@/components/Header";
import Housing from "@/components/home/Housing";
import Village from "@/components/home/Village";
// import Image from "next/image";

export default function Home() {
  const scroll2El = (lId) => {
    window.scrollTo({
      top: document.getElementById(`${lId}`),
      behavior: "smooth",
    });
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      img: "/images/services/security.png",
      title: "24/7 Security",
      desc: "Feel safe around the clock with gated access, surveillance, and trained security personnel dedicated to your peace of mind.",
    },
    {
      img: "/images/services/laundry.png",
      title: "Laundry Services",
      desc: "Convenient on-site laundry facilities to keep your clothes fresh and clean without leaving the premises.",
    },
    {
      img: "/images/services/grocery.png",
      title: "On-site Grocery Store",
      desc: "Access to a well-stocked grocery store right where you live, making shopping easy and convenient.",
    },
    {
      img: "/images/services/parking.png",
      title: "Secure Parking",
      desc: "Safe and convenient parking options available for residents, ensuring your vehicle is protected at Wadi al Hada",
    },
    {
      img: "/images/services/barber.png",
      title: "Hair dressing",
      desc: "Professional hairdressing services available on-site, ensuring you always look your best.",
    },
  ];

  return (
    <div className="font-[family-name:var(--font-outfit)] w-full bg-white">
      <Header home />
      <main className="flex w-full flex-col row-start-2 items-center sm:items-start">
        <Hero />
        <Welcome />
        <Housing />
        <Village />
        <Services data={services} />
        <Contact />

        {scrollY > 800 ? (
          <button
            className={
              "flex fixed bottom-5 right-5 bg-[#384740]/70 backdrop-blur rounded-full text-white items-center justify-center p-3 hover:scale-105 transition-transform duration-300 ease-in-out active:scale-100"
            }
            onClick={() => scroll2El("hero")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        ) : null}
      </main>
    </div>
  );
}
