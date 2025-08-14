import Break from "../Break";
import Image from "next/image";

const CardWithCircle = ({ imageSrc, title, reverse, lId, elongated }) => {
  return (
    <div
      id={lId}
      className={
        "flex flex-col md:flex-row h-auto py-8 gap-4 items-center justify-center overflow-hidden" +
        (reverse ? " md:flex-row-reverse" : "")
      }
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-2/3 flex items-center justify-center aspect-[1/1.5] bg-red-300 rounded-full">
          <Image
            src={imageSrc ? imageSrc : ""}
            alt="Circle Image"
            width={2000}
            height={2000}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="w-full h-full flex text-center px-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">Luxurious Pools</h2>
          <p className="w-4/5 text-center">
            Step into calm and comfort with our beautifully designed pools.
            Surrounded by greenery and soft lighting, each space invites you to
            unwind in style.
            <br />
            Whether you're floating in a sleek infinity pool, lounging in a
            shaded cabana, or enjoying a quiet evening swim, every detail is
            crafted to make you feel pampered and refreshed.
          </p>
        </div>
      </div>
    </div>
  );
};

const Wellness = ({ lId }) => {
  return (
    <section
      id={lId}
      className="w-full flex flex-col bg-lime-100 py-8 items-center justify-center text-center"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Wellness Retreat</h2>
        <p>
          Find your balance with calming spaces designed to restore body and
          mind.
        </p>
      </div>
      <div className="w-full grid gap-4 py-4 pt-8 px-4 grid-cols-4">
        <div className="w-full h-auto bg-white">
          <Image
            src={"/images/wellness/gym.png"}
            alt="Gym Image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto flex items-center justify-center bg-white">
          <Image
            src={"/images/wellness/sauna.png"}
            alt="Gym Image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto bg-white">
          <Image
            src={"/images/wellness/spa.png"}
            alt="Gym Image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-auto bg-white">
          <Image
            src={"/images/wellness/yoga.png"}
            alt="Gym Image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const Village = () => {
  return (
    <section className="w-full flex flex-col items-center py-8">
      <Break />
      <div className="w-full text-center py-16">
        <div className="w-11/12 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            The Village Amenities
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            A refined sanctuary where modern luxury meets timeless comfort
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <Wellness lId={"gyms"} />
        <CardWithCircle lId={"pools"} imageSrc={"/images/poolBig.png"} />
        <Wellness lId={"games"} />
        <CardWithCircle
          imageSrc={"/images/restaurant.png"}
          reverse
          lId={"dining"}
        />
      </div>
    </section>
  );
};

export default Village;
