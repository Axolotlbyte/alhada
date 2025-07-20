import Image from "next/image";

const Gym = () => {
  return (
    <section className="w-full min-h-screen overflow-hidden bg-[#005A5A]">
      <div
        style={{ backgroundImage: `url("/images/gym.png")` }}
        className="w-full flex items-center justify-center h-auto p-14 bg-center "
      >
        <h1 className="text-5xl font-bold text-white">Wellness Re-imagined</h1>
      </div>
      {/* Main section */}
      <div className="w-1/2 h-full flex bg-blue-50"></div>
      {/* <div className="w-full scale-50 rotate-90 md:rotate-none md:scale-100 flex relative h-[170vh] overflow-hidden">
        <div className="absolute top-[10vh] right-[10vh] h-[50vh] w-[35vh] bg-blue-900">
          <Image
            src="/images/wellness/spa.png"
            alt="Gym Equipment"
            width={500}
            height={500}
            className="object-cover absolute top-0 left-0 h-full w-full"
          />
          <div className="relative">
            <div className="absolute -rotate-45 -left-[35vh] top-[14vh] h-[50vh] w-[35vh] bg-cyan-900">
              <Image
                src="/images/wellness/gym.png"
                alt="Gym Equipment"
                width={500}
                height={500}
                className="object-cover absolute top-0 left-0 h-full w-full"
              />
              <div className="relative">
                <div className="absolute -rotate-45 -left-[25vh] top-[15vh] h-[50vh] w-[35vh] bg-teal-900">
                  <Image
                    src="/images/wellness/sauna.png"
                    alt="Gym Equipment"
                    width={500}
                    height={500}
                    className="object-cover absolute top-0 left-0 h-full w-full"
                  />
                  <div className="relative">
                    <div className="absolute -rotate-45 -left-[35vh] top-[10vh] h-[50vh] w-[35vh] bg-emerald-900">
                      <Image
                        src="/images/wellness/pool.png"
                        alt="Gym Equipment"
                        width={500}
                        height={500}
                        className="object-cover absolute top-0 left-0 h-full w-full"
                      />
                      <div className="relative">
                        <div className="absolute -rotate-45 -left-[35vh] top-[10vh] h-[50vh] w-[35vh] bg-green-900">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="w-full relative h-[50vh] md:h-[170vh] justify-center flex flex-col">
          <h2 className="text-5xl p-5 px-6 font-bold text-white">
            {" "}
            Recharge <br />
            your mind <br /> and body
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
          <div className="absolute hover:scale-110 transition overflow-hidden top-[10vh] right-[10vh] h-[50vh] w-[35vh] bg-blue-900">
            <Image
              src="/images/wellness/spa.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute hover:scale-110 transition  -rotate-45 right-[40vh] top-[25vh] h-[50vh] w-[35vh] bg-cyan-900">
            <Image
              src="/images/wellness/gym.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute hover:scale-110 transition  -rotate-90 right-[52vh] top-[52vh] h-[50vh] w-[35vh] bg-teal-900">
            <Image
              src="/images/wellness/sauna.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute hover:scale-110 transition  -rotate-135 right-[40vh] top-[80vh] h-[50vh] w-[35vh] bg-emerald-900">
            <Image
              src="/images/wellness/pool.png"
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-cover absolute top-0 left-0 h-full w-full"
            />
          </div>
          <div className="absolute hover:scale-110 transition -rotate-180 right-[10vh] top-[94vh] h-[50vh] w-[35vh] bg-green-900">
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
