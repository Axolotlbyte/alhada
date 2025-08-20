import Image from "next/image";
import Link from "next/link";

const NavButton = ({ label, link, position }) => {
  return (
    <Link href={link}>
      <button
        style={{ top: position.top, left: position.left }}
        className="p-1 md:p-2 text-xs md:text-lg hover:scale-105 transition-all active:scale-100 absolute bg-[#c1a467] border aspect-square h-6 flex items-center justify-center md:h-10 font-bold text-white border-white rounded-full"
      >
        {label}
      </button>
    </Link>
  );
};

const Hero = () => {
  const buttons = [
    {
      label: "1",
      link: "/explore/amenities",
      position: { top: "40%", left: "32%" },
    },
    {
      label: "2",
      link: "/explore/apartments",
      position: { top: "30%", left: "52%" },
    },
    {
      label: "3",
      link: "/explore/townhouses",
      position: { top: "30%", left: "14%" },
    },
    {
      label: "4",
      link: "/explore/villas",
      position: { top: "70%", left: "28%" },
    },
    {
      label: "5",
      link: "/explore/pools",
      position: { top: "65%", left: "35%" },
    },
  ];

  return (
    <section className="hero h-fit relative">
      <div className="text-center relative">
        {/* <h1 className="text-5xl font-bold">Explore</h1> */}
        <Image
          src="/images/site.png"
          alt="Explore Image"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover"
        />

        {buttons.map((button, index) => (
          <NavButton
            position={button.position}
            label={button.label}
            link={button.link}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
