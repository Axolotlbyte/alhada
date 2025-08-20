import Image from "next/image";
import Break from "../Break.jsx";

const ServiceCard = ({ reverse, img, title, desc }) => {
  return (
    <div
      className={
        "w-full flex flex-col text-black md:flex-row gap-6 md:gap-10" +
        (reverse ? " md:flex-row-reverse" : "")
      }
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
      <div className="text-left text-black flex flex-col gap-4 w-full">
        <h4 className="text-black font-bold">{title ? title : ""}</h4>
        <p className="text-black">{desc ? desc : ""}</p>
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
    <section id={"services"} className="py-13 w-full flex flex-col gap-4">
      <div className="w-11/12 mx-auto">
        <Break />
      </div>
      <div className="w-11/12 flex flex-col gap-12 mx-auto text-left">
        <h2 className="pb-8 font-bold text-black text-center">
          On-site services
        </h2>
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
