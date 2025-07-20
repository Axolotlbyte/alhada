import Image from "next/image";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col hover:scale-105 transition-transform duration-300">
      <div className="w-full h-48 md:h-80 bg-white">
        <Image
          src={imageSrc ? imageSrc : ""}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-lg md:text-xl font-bold p-2 md:p-4 bg-white text-black text-center w-full">
        {title}
      </div>
    </div>
  );
};

const Games = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col md:flex-row h-[70vh] md:h-screen">
        <div className="w-full md:w-2/3 h-[30vh] md:h-screen bg-indigo-700 relative flex flex-col items-center justify-center">
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 md:static md:translate-y-0 md:top-1/4 md:right-10">
            <h2 className="text-3xl md:text-6xl leading-relaxed font-extrabold text-white text-center md:text-left px-4">
              STRIKE.
              <br />
              SCORE.
              <br />
              CELEBRATE.
              <br />
            </h2>
          </div>
          <p className="text-lg text-white w-1/2 font-semibold">
            Our games lounge brings together fun, laughter and connection
          </p>
        </div>
        <div className="w-full h-[40vh] md:h-screen">
          <Image
            src="/images/bowling.png"
            alt="Games Image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-900 via-cyan-600 via-40% to-teal-500 text-white py-6 md:py-10">
        <div className="w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-auto py-6 md:py-10">
          <Card imageSrc={"/images/billiard.png"} title={"Billiard"} />
          <Card imageSrc={"/images/bowlingSmall.png"} title={"Bowling"} />
          <Card imageSrc={"/images/foosball.png"} title={"Foosball"} />
        </div>
      </div>
    </section>
  );
};

export default Games;
