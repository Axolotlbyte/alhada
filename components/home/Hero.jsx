"use client";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ img, title, lId, size }) => {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   element?.scrollIntoView({ behavior: "smooth" });
  // };

  const scroll2El = () => {
    window.scrollTo({
      top: document.getElementById(`${lId}`).offsetTop - 94,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => scroll2El()}
      className="w-full hover:scale-105 transition-all duration-300 active:scale-100 p-4 flex flex-col items-center justify-center font-bold gap-2 text-lg text-[#354826]"
    >
      <Image
        src={img}
        alt="Logo"
        width={240}
        height={240}
        className={
          "object-cover h-9 w-9"
          // +
          // (size ? ` h-${9} w-${9}` : " w-14 h-14")
        }
      />
      {title}
    </button>
  );
};

const Hero = () => {
  return (
    <section
      id={"hero"}
      style={{ backgroundImage: "url('/Hero.png')" }}
      className="flex items-center bg-fixed gap-6 bg-center bg-cover bg-no-repeat justify-end md:justify-normal w-full h-fit py-14 pt-30 flex-col relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      <div className="w-11/12 opacity-0 md:opacity-100 flex flex-col">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 h-fit flex flex-col gap-5 p-5 rounded-sm backdrop-blur-sm bg-white/70">
          <h1 className="leading-normal text-white font-bold ">
            LIVE FULLY.
            <br />
            NATURALLY.
            <br />
            LUXURIOUSLY.
          </h1>
          <span className=" text-lg">
            At Wadi Al Hada Resort — A Private Valley Where Life Flows with
            Comfort and Calm
          </span>
          <div className="flex w-full h-fit gap-3 ">
            <Link href="/explore">
              <button className="bg-[#354826] text-white text-bold px-6 py-3 hover:scale-105 transition-all duration-300">
                Explore
              </button>
            </Link>
            <button className="text-[#354826] underline">Learn more</button>
          </div>
        </div>
        {/* Navbar bottom */}
      </div>
      <div className="w-11/12 rounded-sm hidden md:flex  bg-white/70 py-4 bottom-5 backdrop-blur-xs">
        <Nav img={"/icons/pool.png"} size={"6"} lId={"pools"} title={"Pools"} />
        <Nav
          img={"/icons/dumbbell.png"}
          size={"6"}
          lId={"gyms"}
          title={"Gyms"}
        />
        <Nav
          img={"/icons/dining.png"}
          size={"6"}
          lId={"dining"}
          title={"Dining"}
        />
        <Nav
          img={"/icons/games.png"}
          size={"6"}
          lId={"games"}
          title={"Games"}
        />
        <Nav
          img={"/icons/services.png"}
          size={"6"}
          lId={"services"}
          title={"Services"}
        />
      </div>
    </section>
  );
};

export default Hero;
