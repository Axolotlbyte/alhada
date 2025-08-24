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
      name: "Amenities",
      link: "/explore/amenities",
      position: { top: "40%", left: "32%" },
    },
    {
      label: "2",
      name: "Apartments",
      link: "/explore/apartments",
      position: { top: "30%", left: "52%" },
    },
    {
      label: "3",
      name: "Townhouses",
      link: "/explore/townhouses",
      position: { top: "30%", left: "14%" },
    },
    {
      label: "4",
      name: "Villas",
      link: "/explore/villas",
      position: { top: "70%", left: "28%" },
    },
    {
      label: "5",
      name: "Pools",
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
      <div className="w-1/5 hidden md:flex h-auto absolute top-10 flex-col overflow-hidden gap-2 right-10 bg-white/30 backdrop-blur-xs rounded-sm">
        {buttons.map((button, index) => (
          <Link href={button.link} key={index} className="w-full">
            <div className="h-fit flex gap-2 group hover:bg-white/100 overflow-hidden items-center w-full bg-white/20">
              <div className="p-2 px-4 bg-[#c1a467]">{button.label}</div>
              <div className="w-full">
                <h6>{button.name}</h6>
              </div>
            </div>
          </Link>
        ))}
        {/* <div className="p-2 bg-white/80 rounded">
          <span className="">2</span>
        </div>
        <div className="p-2 bg-white/80 rounded">
          <span className="">3</span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
