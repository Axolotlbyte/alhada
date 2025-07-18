import Image from "next/image";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col hover:scale-105 transition-transform duration-300">
      <div className="w-full h-80 bg-white">
        <Image
          src={imageSrc ? imageSrc : ""}
          alt="Bowling"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-xl font-bold p-4 bg-white text-black text-center w-full">
        {title}
      </div>
    </div>
  );
};
const Games = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col md:flex-row h-screen">
        <div className=" w-full md:w-2/3 h-screen bg-indigo-700 relative">
          <div className="absolute top-1/2 mx-auto left-0 right-0 md:top-1/4 md:-right-54 bottom-0">
            <h2 className=" text-5xl md:text-6xl leading-relaxed font-extrabold text-white">
              STRIKE.
              <br />
              SCORE.
              <br />
              CELEBRATE.
              <br />
            </h2>
          </div>
        </div>
        <div className="w-full h-screen">
          <Image
            src="/images/bowling.png"
            alt="Games Image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-900 via-cyan-600 via-40% to-teal-500 text-white py-10">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-3 gap-2 md:gap-8 mx-auto py-10">
          <Card imageSrc={"/images/billiard.png"} title={"Billiard"} />
          <Card imageSrc={"/images/bowlingSmall.png"} title={"Bowling"} />
          <Card imageSrc={"/images/foosball.png"} title={"Foosball"} />
        </div>
      </div>
    </section>
  );
};

export default Games;
