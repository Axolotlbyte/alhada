"use client";
import Image from "next/image";
const Welcome = () => {
  return (
    <section>
      <div className="w-11/12 flex text-center flex-col py-16 gap-8 mx-auto">
        <h1 className="w-full text-blue-900 drop-shadow-xl  text-stroke py-8 font-bold text-5xl">
          WELCOME TO WADI AL HADA RESORT
        </h1>

        <p className="text-2xl py-8 text-gray-700">
          Wadi al hada isn’t just a resort — It’s a warm, International
          community. Whether you’re here short-term or long term, you’ll find
          neighbours, friends, and support in every corner of our peaceful
          valley retreat.
        </p>
      </div>
      <div className="w-full flex relative">
        <Image
          src="/images/room.png"
          alt="Welcome Image"
          width={800}
          height={600}
          className="w-1/3 aspect-square object-cover"
        />
        <Image
          src="/images/pool.png"
          alt="Welcome Image"
          width={800}
          height={600}
          className="w-1/3 aspect-square object-cover object-top"
        />
        <Image
          src="/images/gym.png"
          alt="Welcome Image"
          width={800}
          height={600}
          className="w-1/3 aspect-square object-cover object-top"
        />
      </div>
      <div className="w-11/12 py-10 flex flex-col gap-12 items-center justify-center text-center">
        <h2 className="text-5xl font-bold">Location that Speaks for itself</h2>
        <div className="w-1/2 p-3 border-1 aspect-rect overflow-clip flex justify-center items-center">
          <Image
            src="/images/droneview.png"
            alt="Welcome Image"
            width={1400}
            height={700}
            className="w-full border object-cover"
          />
        </div>
      </div>
      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1px black;
        }
        .aspect-rect {
          aspect-ratio: 2 / 1;
        }
      `}</style>
    </section>
  );
};

export default Welcome;
