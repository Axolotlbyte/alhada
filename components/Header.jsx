import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black/40 backdrop-blur-lg fixed h-24 z-50 top-0 left-0 w-screen text-white py-4">
      <div className="w-11/12 mx-auto flex">
        <div className="flex gap-4 items-center">
          <Image
            src="/logo.svg"
            alt="Wadi al Hada Logo"
            width={90}
            height={90}
            className=" w-16 h-16 inline-block"
          />
          <span className="text-2xl hidden md:block text-nowrap font-bold leading-relaxed ">
            WADI AL HADA RESORT
          </span>
        </div>
      
        <div className="w-full hidden md:block">
          <nav className="flex justify-end mt-4">
            <ul className="flex gap-8 text-sm">
              <li className="hover:scale-110 transition-transform duration-300">
                <a href="#home" className="">
                  About
                </a>
              </li>
              <li className="hover:scale-110 transition-transform duration-300">
                <a href="#services" className="">
                  Dining
                </a>
              </li>
              <li className="hover:scale-110 transition-transform duration-300">
                <a href="#services" className="">
                  Events
                </a>
              </li>
              <li className="hover:scale-110 transition-transform duration-300">
                <a
                  href="#contact"
                  className="hover:text-black hover:bg-white border border-white p-2 px-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
