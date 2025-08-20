import Break from "../Break.jsx";
import Link from "next/link";

const units = [
  {
    img: "/images/units/room.png",
    title: "Villas",
    desc: "Spacious multi-level homes with private gardens and modern amenities.",
  },
  {
    img: "/images/units/room.png",
    title: "Townhouses",
    desc: "Spacious multi-level homes with private gardens and modern amenities.",
  },
  {
    img: "/images/units/room.png",
    title: "Apartments",
    desc: "Luxury apartments with four bedrooms, perfect for large families.",
  },
  {
    img: "/images/units/room.png",
    title: "Amenities",
    desc: "Comfortable three-bedroom units with open living spaces.",
  },
  {
    img: "/images/units/room.png",
    title: "Pools",
    desc: "Ideal for small families or couples, featuring two bedrooms.",
  },
];

const Units = () => {
  return (
    <section className="w-full h-fit py-10">
      <div className="w-11/12 mx-auto">
        <Break />
        <h2 className="text-2xl md:text-4xl py-4 font-bold text-black mb-8">
          Browse
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <Link href={`/explore/${unit.title.toLowerCase()}`} key={idx}>
              <div
                key={idx}
                className="bg-white hover:scale-105 transition rounded-sm shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={unit.img}
                  alt={unit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h5 className="text-xl font-bold mb-2">{unit.title}</h5>
                  <p className=" text-sm">{unit.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Units;
