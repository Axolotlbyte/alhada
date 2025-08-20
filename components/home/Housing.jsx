import Image from "next/image";
import Break from "../Break.jsx";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="flex group overflow-hidden flex-col items-center justify-center gap-6 py-4">
      <div className="w-full overflow-hidden">
        <Image
          src="/images/units/room.png"
          alt="Welcome Image"
          width={1400}
          height={700}
          className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="text-left flex flex-col gap-6 py-4">
        <h4 className="text-xl">{title}</h4>
        <p className="">
          A private, spacious home with elegant architecture, lush gardens, and
          premium amenities—perfect for luxurious family living and entertaining
        </p>
      </div>

      <div className="w-full flex justify-baseline">
        <button className="bg-[#354826] text-white font-normal text-sm px-6 py-2 hover:scale-105 transition-all duration-300">
          {" "}
          Learn More
        </button>
      </div>
    </div>
  );
};

const Housing = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto">
        <Break />
      </div>

      {/* title */}
      <div className="w-full text-center py-8">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="font-bold text-black mb-4">Wadi Al Hada Residences</h2>
          <p className="text- text-[1rem] md:text-xl text-gray-800">
            A refined sanctuary where modern luxury meets timeless comfort
          </p>
        </div>
      </div>

      <div className="grid-cols-1 md:grid-cols-3 w-11/12 mx-auto grid gap-4 md:gap-6 pb-8 md:py-4">
        {/* <div>
          <div className="w-full">
            <Image
              src="/images/units/room.png"
              alt="Welcome Image"
              width={1400}
              height={700}
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div className="text-center py-4">
            <h2 className="text-xl">Villas</h2>
            <p className="">
              A private, spacious home with elegant architecture, lush gardens,
              and premium amenities—perfect for luxurious family living and
              entertaining
            </p>
          </div>
        </div> */}
        <Card title={"Villa"} />
        <Card title={"Townhouse"} />
        <Card title={"Apartment"} />
      </div>
    </div>
  );
};

export default Housing;
