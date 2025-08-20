import Image from "next/image";

const Break = () => {
  return (
    <div className="w-full flex gap-4 items-center justify-center">
      <hr className="w-full border-[#7E975D] border" />
      <Image
        src="/logo.svg"
        alt=""
        width={1400}
        height={700}
        className="w-12 h-auto object-cover"
      />
      <hr className="w-full border-[#7E975D] border" />
    </div>
  );
};

export default Break;