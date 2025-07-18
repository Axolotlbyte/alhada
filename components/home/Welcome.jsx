"use client";
import Image from "next/image";
const Welcome = () => {
  return (
    <section>
      <div className="w-11/12 flex text-center flex-col py-8 md:py-16 gap-6 md:gap-8 mx-auto">
        <h1 className="w-full text-blue-900 drop-shadow-xl text-stroke py-6 md:py-8 font-bold text-3xl md:text-5xl">
          WELCOME TO WADI AL HADA RESORT
        </h1>

        <p className="text-lg md:text-2xl py-6 md:py-8 text-gray-700">
          Wadi al hada isn’t just a resort — It’s a warm, International
          community. Whether you’re here short-term or long term, you’ll find
          neighbours, friends, and support in every corner of our peaceful
          valley retreat.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row relative gap-4 md:gap-0 items-center md:items-stretch">
        <Image
          src="/images/room.png"
          alt="Welcome Image"
          width={800}
          height={600}
          className="w-10/12 md:w-1/3 aspect-square object-cover mx-auto md:mx-0"
        />
        <Image
          src="/images/pool.png"
          alt="Welcome Image"
          width={800}
          height={600}
          className="w-10/12 md:w-1/3 aspect-square object-cover object-top mx-auto md:mx-0"
        />
        <Image
          src="/images/gym.png"
          alt="Welcome Image"
          width={800}
          height={600}
          className="w-10/12 md:w-1/3 aspect-square object-cover object-top mx-auto md:mx-0"
        />
      </div>
      <div className="w-11/12 mx-auto py-8 md:py-10 flex flex-col gap-8 md:gap-12 items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Location that Speaks for itself
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          <div className="w-full md:w-1/2 p-3 border aspect-[2/1] overflow-clip flex justify-center items-center">
            <Image
              src="/images/droneview.png"
              alt="Welcome Image"
              width={1400}
              height={700}
              className="w-full border object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 px-2 mt-4 md:mt-0">
            <p className="text-lg md:text-2xl leading-relaxed font-bold text-left md:text-center">
              In the calm of the wadi, far from the noise — yet close to
              everything that matters.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1px black;
        }
      `}</style>
    </section>
  );
};

export default Welcome;
