const units = [
  {
    img: "/images/units/townhouse.png",
    title: "Townhouses",
    desc: "Spacious multi-level homes with private gardens and modern amenities.",
  },
  {
    img: "/images/units/4bed.png",
    title: "4 Bedroom Apartment",
    desc: "Luxury apartments with four bedrooms, perfect for large families.",
  },
  {
    img: "/images/units/3bed.png",
    title: "3 Bedroom Apartment",
    desc: "Comfortable three-bedroom units with open living spaces.",
  },
  {
    img: "/images/units/2bed.png",
    title: "2 Bedroom Apartment",
    desc: "Ideal for small families or couples, featuring two bedrooms.",
  },
  {
    img: "/images/units/1bed.png",
    title: "1 Bedroom Apartment",
    desc: "Cozy one-bedroom apartments for singles or couples.",
  },
];

const Units = () => {
  return (
    <section className="w-full h-fit py-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-2xl md:text-4xl py-4 font-bold text-black mb-8">Browse Units</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={unit.img}
                alt={unit.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {unit.title}
                </h3>
                <p className="text-gray-700 text-sm">{unit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Units;
