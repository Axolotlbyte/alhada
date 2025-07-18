import Image from "next/image";

const Nav = ({ img, title }) => {
  return (
    <div className="w-full h-40 flex flex-col items-center justify-center font-bold gap-2 text-lg text-black">
      <Image
        src={img}
        alt="Logo"
        width={240}
        height={240}
        className="w-20 h-20 object-cover"
      />
      {title}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url('/Hero.png')" }}
      className="flex items-center justify-end md:justify-normal w-full h-screen flex-col relative"
    >
      <div className="w-11/12 my-6 md:mt-32 flex flex-col">
        <div className="w-full md:w-1/3 h-fit flex flex-col gap-5 p-5 backdrop-blur-sm bg-black/65">
          <h1 className="text-2xl md:text-4xl text-white font-bold ">
            LIVE FULLY.
            <br />
            NATURALLY.
            <br />
            LUXURIOUSLY.
          </h1>
          <span className="text-white text-lg">
            At Wadi Al Hada Resort — A Private Valley Where Life Flows with
            Comfort and Calm
          </span>
          <div className="flex w-full h-fit gap-3 ">
            <button className="bg-primary text-white text-bold px-6 py-3 hover:scale-105 transition-all duration-300">
              Explore
            </button>
            <button className="text-white underline">Learn more</button>
          </div>
        </div>
        {/* Navbar bottom */}
      </div>
      <div className="w-11/12 hidden md:flex absolute bg-white/50 h-40 bottom-5 backdrop-blur-xs">
        <Nav img={"/icons/pool.png"} title={"Pools"} />
        <Nav img={"/icons/dumbbell.png"} title={"Gyms"} />
        <Nav img={"/icons/dining.png"} title={"Dining"} />
        <Nav img={"/icons/games.png"} title={"Games"} />
        <Nav img={"/icons/services.png"} title={"Services"} />
      </div>
    </section>
  );
};

export default Hero;
