"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrollY, setScrollY] = useState(0);

  const scroll2El = (lId) => {
    window.scrollTo({
      top: document.getElementById(`${lId}`),
      behavior: "smooth",
    });
  };

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
    <>
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
    </>
  );
}
