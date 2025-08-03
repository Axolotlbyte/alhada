import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero h-fit relative">
      <div className="text-center">
        {/* <h1 className="text-5xl font-bold">Explore</h1> */}
        <Image
          src="/images/site.png"
          alt="Explore Image"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover"
        />
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
