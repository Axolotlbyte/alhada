import Break from "../Break";
import Image from "next/image";

const CardWithCircle = ({ imageSrc, title, reverse, lId, desc, elongated }) => {
  return (
    <div
      id={lId}
      className={
        "flex flex-col md:flex-row h-auto text-black py-8 gap-4 items-center justify-center overflow-hidden" +
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
          <h3 className="font-bold">
            {/* Luxurious Pools */}
            {title ? title : "Luxurious Pools"}
          </h3>
          <p className="w-4/5 text-center ">{desc ? desc : ""}</p>
        </div>
      </div>
    </div>
  );
};

const Wellness = ({ lId, title, desc }) => {
  return (
    <section
      id={lId}
      className="w-full flex flex-col text-black bg-[#a3c78a] py-8 items-center justify-center text-center"
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-black">
          {title ? title : "Wellness Retreat"}
        </h3>
        <p className="text-black">
          {/* Find your balance with calming spaces designed to restore body and
          mind. */}
          {desc ? desc : ""}
        </p>
      </div>
      <div className="w-full grid gap-4 py-4 pt-8 px-4 grid-cols-2 md:grid-cols-4">
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
    <section className="w-full text-black flex flex-col items-center py-8">
      <Break />
      <div className="w-full text-center py-16">
        <div className="w-11/12 max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-black mb-4">The Village Amenities</h2>
          <p className=" text-gray-800">
            A refined sanctuary where modern luxury meets timeless comfort
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <Wellness
          lId={"gyms"}
          title={"Wellness Retreat"}
          desc={
            "Find your balance with calming spaces designed to restore body and mind."
          }
        />
        <CardWithCircle
          lId={"pools"}
          imageSrc={"/images/poolBig.png"}
          desc={
            "Step into calm and comfort with our beautifully designed pools. Surrounded by greenery and soft lighting, each space invites you to unwind in style. Whether you're floating in a sleek infinity pool, lounging in a shaded cabana, or enjoying a quiet evening swim, every detail is crafted to make you feel pampered and refreshed."
          }
        />
        <Wellness
          lId={"games"}
          title={"Park & Play"}
          desc={"A Sanctuary for Sport, Play, and Connection"}
        />
        <CardWithCircle
          title={"Fine Dining"}
          imageSrc={"/images/restaurant.png"}
          reverse
          desc={
            "Wadi Al Hada Restaurant offers a relaxed yet refined dining experience where flavor and ambiance come together effortlessly. With a menu inspired by global cuisines and crafted from fresh, seasonal ingredients, every dish is designed to satisfy both casual cravings and elevated tastes. From energizing breakfasts to elegant dinners, the atmosphere invites guests to slow down and savor."
          }
          lId={"dining"}
        />
      </div>
    </section>
  );
};

export default Village;
