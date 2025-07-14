import Image from "next/image";

const Dining = () => {
  return (
    <section className="w-full flex flex-col gap-8 justify-center items-center py-8">
      <div className="w-11/12 text-center p-5 bg-red-800">
        <h1 className="text-5xl font-bold text-white">Dining</h1>
      </div>
      {/* <div className="flex items-stretch gap-16 w-11/12">
     
        <div className="flex gap-8 w-full h-full flex-col">
          <div className="pt-8 flex-1 h-full flex">
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
            <div className="flex w-full items-baseline justify-between">
              <button className="underline text-lg text-black">
                Learn more
              </button>

              <button className="p-5 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

   
        <div className="flex flex-col gap-8 h-full w-full">
          <div className="w-full">
            <h2 className="text-7xl font-bold text-center">
              A World of Flavours at Your Table
            </h2>
          </div>
          <div className="h-full w-full relative flex bg-gradient-to-b from-amber-800 to-cyan-900">
            <Image
              src="/images/food.png"
              alt="Dining"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div> */}

      <div className="flex gap-16 w-11/12 items-stretch">
        {/* side one */}
        <div className="flex-1 gap-16 justify-between flex flex-col h-full">
          <div className="pt-8 w-full h-full flex-1 flex">
            <Image
              src="/images/restaurant.png"
              alt="Dining"
              width={500}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-video p-12 justify-between items-start flex flex-col bg-[#F7E2AB]">
            <h2 className="text-5xl text-wrap">
              Explore a curated menu of global dishes
            </h2>
            <div className="flex w-full items-baseline justify-between">
              <button className="underline text-lg text-black">
                Learn more
              </button>
              <button className="p-5 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* side two */}
        <div className="flex-1 flex flex-col gap-8 h-full">
          <div className="w-full">
            <h2 className="text-7xl font-bold text-center">
              A World of Flavours at Your Table
            </h2>
          </div>
          <div className="flex-1 w-full relative flex">
            <Image
              src="/images/food.png"
              alt="Dining"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
