import Image from "next/image";

const ServiceCard = ({ reverse, img, title, desc }) => {
  return (
    <div
      className={"w-full flex flex-col md:flex-row gap-6 md:gap-10" + (reverse ? " md:flex-row-reverse" : "")}
    >
      <div className="w-full overflow-hidden">
        <Image
          src={img ? img : ""}
          alt="Service Image"
          width={800}
          height={600}
          className="w-full hover:scale-110 transition h-auto object-cover"
        />
      </div>
      <div className="text-left flex flex-col gap-4 w-full">
        <h2 className="text-4xl font-bold">{title ? title : ""}</h2>
        <p className="text-lg">{desc ? desc : ""}</p>
      </div>
    </div>
  );
};

const data = [
  {
    img: "/images/services/security.png",
    title: "24/7 Security",
    desc: "Feel safe around the clock with gated access, surveillance, and trained security personnel dedicated to your peace of mind.",
  },
  {
    img: "/images/services/laundry.png",
    title: "Laundry Services",
    desc: "Convenient on-site laundry facilities to keep your clothes fresh and clean without leaving the premises.",
  },
  {
    img: "/images/services/grocery.png",
    title: "On-site Grocery Store",
    desc: "Access to a well-stocked grocery store right where you live, making shopping easy and convenient.",
  },
  {
    img: "/images/services/parking.png",
    title: "Secure Parking",
    desc: "Safe and convenient parking options available for residents, ensuring your vehicle is protected at Wadi al Hada",
  },
  {
    img: "/images/services/barber.png",
    title: "Hair dressing",
    desc: "Professional hairdressing services available on-site, ensuring you always look your best.",
  },
];

const Services = () => {
  return (
    <section className="py-5">
      <div className="w-11/12 flex flex-col gap-12 mx-auto text-left">
        <h1 className="text-4xl py-8 font-bold">On-site services</h1>
        {data.map(({ img, title, desc }, index) => (
          <ServiceCard
            reverse={index % 2 !== 0}
            img={img}
            key={index}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
