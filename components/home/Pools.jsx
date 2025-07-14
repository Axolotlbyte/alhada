import Image from "next/image";

const Pools = () => {
  return (
    <section className="w-full flex h-[calc(100vh-96px)]">
      <div className="w-1/12 bg-[#F7E2AB]"></div>
      <div className="w-full relative flex items-center bg-blue-700">
        <Image
          src="/images/poolBig.png"
          alt="Pool"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
        <div className="w-1/3 absolute left-6 top-6 h-11/12 bg-black/30"></div>
      </div>
    </section>
  );
};

export default Pools;
