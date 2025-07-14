import Image from "next/image";

const ServiceCard = ({ reverse }) => {
  return (
    <div
      className={"w-full flex gap-10" + (reverse ? " flex-row-reverse" : "")}
    >
      <div className="w-full">
        <Image
          src="/images/contact.png"
          alt="Service Image"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="text-left flex flex-col gap-4 w-full">
        <h2 className="text-4xl font-bold">Laundry</h2>
        <p className="text-lg">
          Feel safe around the clock with gated access, surveillance, and
          trained security personnel dedicated to your peace of mind.
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-5">
      <div className="w-11/12 flex flex-col gap-12 mx-auto text-left">
        <h1 className="text-4xl py-8 font-bold">On-site services</h1>
        <ServiceCard />
        <ServiceCard reverse />
        <ServiceCard />
        <ServiceCard reverse />
      </div>
    </section>
  );
};

export default Services;
