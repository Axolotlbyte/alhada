import Image from "next/image";

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
        <h2 className="text-xl">{title}</h2>
        <p className="">
          A private, spacious home with elegant architecture, lush gardens, and
          premium amenities—perfect for luxurious family living and entertaining
        </p>
      </div>

      <div className="w-full flex justify-baseline">
        <button className="bg-[#7E975D] text-white font-normal text-sm px-6 py-2 hover:scale-105 transition-all duration-300">
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
      <div className="w-full flex gap-4 items-center justify-center">
        <hr className="w-full border-[#7E975D] border" />
        <Image
          src="/icons/logoW.svg"
          alt=""
          width={1400}
          height={700}
          className="w-12 h-auto object-cover"
        />
        <hr className="w-full border-[#7E975D] border" />
      </div>
      <div className="grid-cols-1 md:grid-cols-3 w-11/12 mx-auto grid gap-4 md:gap-6 py-8 md:py-12">
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
