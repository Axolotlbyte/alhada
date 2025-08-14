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

  return (
    <div className="font-[family-name:var(--font-outfit)] w-full bg-white">
      <Header home />
      <main className="flex w-full flex-col row-start-2 items-center sm:items-start">
        <Hero />
        <Welcome />
        <Housing />
        {/* <Pools />
        <Gym />
        <Dining />
        <Games /> 
        <Services /> */}

        <Village />
        <Services />
        <Contact />

        {scrollY > 800 ? (
          <button
            className={
              "flex fixed bottom-5 right-5 bg-black/50 backdrop-blur rounded-full text-white items-center justify-center p-3 hover:scale-105 transition-transform duration-300 ease-in-out active:scale-100"
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
