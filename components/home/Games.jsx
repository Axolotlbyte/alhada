import Image from "next/image";

const Games = () => {
  return (
    <section className="w-full">
      <div className="w-full flex h-screen">
        <div className="w-2/3 h-screen bg-blue-900"></div>
        <div className="w-full h-screen">
          <Image
            src="/images/contact.png"
            alt="Games Image"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-900 via-cyan-600 via-40% to-teal-500 text-white py-10">
        <div className="w-10/12 grid grid-cols-3 gap-8 mx-auto py-10">
          <div className="w-full h-80 bg-white"></div>
          <div className="w-full h-80 bg-white"></div>
          <div className="w-full h-80 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Games;
