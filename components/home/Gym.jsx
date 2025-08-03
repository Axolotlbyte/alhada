import Image from "next/image";

const Gym = () => {
  return (
    <section
      id="gyms"
      className="w-full min-h-screen overflow-hidden bg-[#005A5A]"
    >
      <div
        style={{ backgroundImage: `url("/images/gym.png")` }}
        className="w-full flex items-center justify-center h-auto p-14 bg-center "
      >
        <h1 className=" text-3xl text-nowrap md:text-5xl font-bold text-white">
          Wellness Re-imagined
        </h1>
      </div>
      {/* Main section */}

      {/* Mobile */}
      <div className="w-11/12 md:hidden relative py-6 mx-auto">
        <div className="w-full">
          <Image
            src={"/images/gym/lifting.png"}
            alt="Gym Plant"
            width={800}
            height={500}
            className="w-full rounded-sm h-auto object-cover"
          />

          <h2 className="pt-4 text-2xl md:text-4xl font-bold text-white">
            Well Equipped Gyms
          </h2>

          <div className="relative flex items-center">
            <p className="w-full py-10 text-white">
              Whether you’re lifting, stretching or simply unwinding - Wadi al
              hada supports your full wellness journey
            </p>
          </div>
        </div>
      </div>

      {/* Bigger screens */}
      <div className="flex-col-reverse hidden md:flex md:flex-row w-full">
        <div className="w-full relative h-[50vh] md:h-[170vh] justify-center flex flex-col">
          <h2 className="text-5xl p-5 px-6 font-bold text-white">
            {" "}
            Recharge <br />
            your mind <br />
            and body
          </h2>
          <Image
            src={"/images/gym/plant.png"}
            alt="Gym Plant"
            width={800}
            height={500}
            className="w-1/4 absolute top-[37%] h-auto object-cover"
          />
          <div className="h-[60vh] relative flex pl-5 items-center">
            <p className="w-1/2 absolute top-1/2 py-10 text-white">
              Whether you’re lifting, stretching or simply unwinding - Wadi al
              hada supports your full wellness journey
            </p>
          </div>
        </div>

        <div className="w-full scale-50 rotate-90 md:rotate-none md:scale-100 flex relative h-[100vw] md:h-[170vh] overflow-visible ">
          <div className="absolute scale-50 md:scale-75 lg:scale-80 xl:scale-100 hover:scale-110 transition overflow-hidden top-[10vh] right-[10vh] h-[50vh] w-[35vh] bg-blue-900">
            <Image
              src="/images/wellness/spa.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute scale-50 md:scale-75 lg:scale-80 xl:scale-100 hover:scale-110 transition  -rotate-45 right-[40vh] top-[25vh] h-[50vh] w-[35vh] bg-cyan-900">
            <Image
              src="/images/wellness/gym.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute scale-50 md:scale-75 lg:scale-80 xl:scale-100 hover:scale-110 transition  -rotate-90 right-[52vh] top-[52vh] h-[50vh] w-[35vh] bg-teal-900">
            <Image
              src="/images/wellness/sauna.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute scale-50 md:scale-75 lg:scale-80 xl:scale-100 hover:scale-110 transition  -rotate-135 right-[40vh] top-[80vh] h-[50vh] w-[35vh] bg-emerald-900">
            <Image
              src="/images/wellness/pool.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute scale-50 md:scale-75 lg:scale-80 xl:scale-100 hover:scale-110 transition -rotate-180 right-[10vh] top-[94vh] h-[50vh] w-[35vh] bg-green-900">
            <Image
              src="/images/wellness/yoga.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gym;
