import Image from "next/image";

const Dining = () => {
  return (
    <section className="w-full flex flex-col gap-8 justify-center items-center py-8">
      <div className="w-11/12 text-center p-5 bg-red-800">
        <h1 className="text-5xl font-bold text-white">Dining</h1>
      </div>
      <div className="flex gap-16 w-11/12">
        {/* side one */}
        <div className="flex gap-8 w-full flex-col">
          <div className="">
            <Image
              src="/images/contact.png"
              alt="Dining"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className=" w-full aspect-video p-12 justify-between items-start flex flex-col bg-[#F7E2AB] ">
            <h2 className="text-5xl text-wrap">
              Explore a curated menu of global dishes
            </h2>
            <button className="underline text-lg text-white">Learn more</button>
          </div>
        </div>

        {/* side two */}
        <div className="flex flex-col h-full w-full">
          <div className="w-full">
            <h2 className="text-7xl font-bold text-center">
              A World of Flavours at Your Table
            </h2>
          </div>
          <div className="h-full w-full relative flex bg-gradient-to-b from-amber-800 to-cyan-900"></div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
