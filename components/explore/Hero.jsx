import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero h-fit relative">
      <div className="text-center relative">
        {/* <h1 className="text-5xl font-bold">Explore</h1> */}
        <Image
          src="/images/site.png"
          alt="Explore Image"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover"
        />

        {/* Village */}
        <button className="p-2 hover:scale-105 transition-all active:scale-100 absolute top-[40%] left-[32%] bg-[#c1a467] border aspect-square h-10 font-bold text-white border-white rounded-full">
          1
        </button>

        {/* Apartments */}
        <button className="p-2 hover:scale-105 transition-all active:scale-100 absolute top-[30%] left-[52%] bg-[#c1a467] border aspect-square h-10 font-bold text-white border-white rounded-full">
          2
        </button>

        {/* Townhouses */}
        <button className="p-2 hover:scale-105 transition-all active:scale-100 absolute top-[30%] left-[14%] bg-[#c1a467] border aspect-square h-10 font-bold text-white border-white rounded-full">
          3
        </button>

        {/* Pools */}
        <button className="p-2 hover:scale-105 transition-all active:scale-100 absolute top-[65%] left-[35%] bg-[#c1a467] border aspect-square h-10 font-bold text-white border-white rounded-full">
          4
        </button>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end">
        <button className="bg-white rounded-full text-black p-2 md:p-5">
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div> */}
    </section>
  );
};

export default Hero;
