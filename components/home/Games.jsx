import Image from "next/image";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="relative rounded-sm flex flex-col group overflow-hidden duration-300">
      <div className="w-full z-0 group-hover:scale-105 transition-transform h-48 md:h-80 bg-white">
        <Image
          src={imageSrc ? imageSrc : ""}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full absolute bg-black/20 flex items-center justify-center font-bold text-4xl">Squash</div>
      {/* <div className="text-lg z-10 md:text-xl font-bold p-2 md:p-4 bg-white text-black text-center w-full">
        {title}
      </div> */}
    </div>
  );
};

const Games = () => {
  return (
    <section id={"games"} className="w-full">
      {/* <div className="w-full flex flex-col md:flex-row h-[70vh] md:h-screen">
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
      </div> */}

      <div className="w-full text-center py-8">
        <div className="w-11/12 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Strike. Score. Celebrate.
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Our games lounge brings together fun, laughter and connection
          </p>
        </div>
      </div>

      <div className="w-full text-white overflow-hidden">
        <div className="w-11/12 grid grid-cols-2 gap-1 p-1 px-0 md:grid-cols-3 mx-auto">
          <Card imageSrc={"/images/billiard.png"} title={"Billiard"} />
          <Card imageSrc={"/images/bowlingSmall.png"} title={"Bowling"} />
          <Card imageSrc={"/images/foosball.png"} title={"Foosball"} />

          <Card imageSrc={"/images/billiard.png"} title={"Billiard"} />
          <Card imageSrc={"/images/bowlingSmall.png"} title={"Bowling"} />
          <Card imageSrc={"/images/foosball.png"} title={"Foosball"} />

          <Card imageSrc={"/images/billiard.png"} title={"Billiard"} />
          <Card imageSrc={"/images/bowlingSmall.png"} title={"Bowling"} />
          <Card imageSrc={"/images/foosball.png"} title={"Foosball"} />
        </div>
      </div>
    </section>
  );
};

export default Games;
