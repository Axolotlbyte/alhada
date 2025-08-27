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



const Services = ({data}) => {
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
