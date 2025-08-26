"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({ home }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scroll2El = (id) => {
    window.scrollTo({
      top: document.getElementById(`${id}`).offsetTop - (home ? 94 : 0),
      behavior: "smooth",
    });
  };

  return (
    <header
      className={
        " transition-all duration-500 ease-in-out min-h-24 z-[10000] top-0 left-0 w-full py-4" +
        (isOpen ? " h-80 overflow-hidden" : " h-24") +
        (home
          ? " bg-white backdrop-blur-lg fixed text-[#354826]"
          : " text-[#354826] border-b")
      }
    >
      <div className="w-11/12 mx-auto flex">
        <Link href={"/"}>
          <div className="flex gap-4 items-center">
            <Image
              src="/logo.svg"
              alt="Wadi al Hada Logo"
              width={90}
              height={90}
              className=" w-16 h-16 inline-block"
            />
            <h4 className="text-2xl select-none hidden md:block text-nowrap font-bold leading-relaxed ">
              WADI AL HADA RESORT
            </h4>
          </div>
        </Link>

        <div className="w-full flex items-center justify-end md:hidden">
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="w-full hidden md:block">
          <nav className="flex justify-end mt-4">
            <ul className="flex items-center gap-8 text-sm">
              {/* <li className="hover:scale-110 transition-transform duration-300">
                <Link href={"/about"}>About</Link>
              </li> */}
              {/* <li className="hover:scale-110 transition-transform duration-300">
                <a href="#services" className="">
                  Dining
                </a>
              </li> */}
              {/* <li className="hover:scale-110 transition-transform duration-300">
                <a href="#services" className="">
                  Events
                </a>
              </li> */}
              <li
                onClick={() => scroll2El("contact")}
                className="hover:scale-110 transition-transform duration-300"
              >
                <button className=" hover:bg-[#354826] hover:text-white border border-black p-2 px-4">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isOpen ? (
        <>
          <Link href={"/about"}>
            <div className="h-14 mt-2 flex items-center justify-center border-b w-full bg-white">
              About
            </div>
          </Link>
          <Link href={"/dining"}>
            <div className="h-14 flex items-center justify-center w-full border-b bg-white">
              Dining
            </div>
          </Link>
          <Link href={"/explore"}>
            <div className="h-14 flex items-center justify-center w-full border-b bg-white">
              Explore
            </div>
          </Link>
          {/* <div className="h-14 flex items-center justify-center w-full border-b bg-white">
            Events
          </div> */}
          <div className="h-14 flex items-center justify-center w-full border-b bg-white">
            Contact
          </div>{" "}
        </>
      ) : null}
    </header>
  );
};

export default Header;
