import Image from "next/image";

const Gym = () => {
  return (
    <section className="w-full min-h-screen bg-[#005A5A]">
      <div
        style={{ backgroundImage: `url("/images/gym.png")` }}
        className="w-full flex items-center justify-center h-auto p-14 bg-center "
      >
        <h1 className="text-5xl font-bold text-white">Wellness Re-imagined</h1>
      </div>
      {/* Main section */}
      <div className="w-full flex relative h-[170vh] overflow-hidden">
        <div className="absolute top-[10vh] right-[10vh] h-[50vh] w-[35vh] bg-blue-900">
          <Image
            src="/images/wellness/spa.png"
            alt="Gym Equipment"
            width={500}
            height={500}
            className="object-cover absolute top-0 left-0 h-full w-full"
          />
          <div className="relative">
            <div className="absolute -rotate-45 -left-[35vh] top-[10vh] h-[50vh] w-[35vh] bg-cyan-900">
              <Image
                src="/images/wellness/gym.png"
                alt="Gym Equipment"
                width={500}
                height={500}
                className="object-cover absolute top-0 left-0 h-full w-full"
              />
              <div className="relative">
                <div className="absolute -rotate-45 -left-[35vh] top-[10vh] h-[50vh] w-[35vh] bg-teal-900">
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
      </div>
    </section>
  );
};

export default Gym;
