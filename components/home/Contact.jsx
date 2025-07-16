import contactImg from "../../public/images/contact.png";

const Input = ({ type, placeholder, icon }) => {
  return (
    <div className="w-full flex items-center px-2 p-2 bg-black/50">
      <div className="w-4">{icon ? icon : null}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full bg-transparent text-white px-4 outline-none"
      />
    </div>
  );
};
const Contact = () => {
  return (
    <section
      style={{ backgroundImage: `url(${contactImg.src})` }}
      className="w-full bg-cover h-screen flex items-center justify-center"
    >
      <div className="flex flex-col p-4 gap-8 items-center justify-center bg-black/60 bg-opacity-60 text-center h-fit w-1/2 bg-opacity-20">
        <h1 className="text-2xl text-white font-bold">Contact Us</h1>
        <div className="flex w-full gap-4">
          <Input
            type="text"
            placeholder="First Name"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            }
          />
          <Input
            type="text"
            placeholder="Surname"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            }
          />
        </div>
        <div className="flex w-full gap-4">
          <Input
            type="email"
            placeholder="Email"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            }
          />
          <Input
            type="number"
            placeholder="Phone"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            }
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="What else can we help you with ?"
            className="w-full h-24 bg-black/50 text-white py-2 px-3 outline-none"
          ></textarea>
        </div>
        <button className="bg-primary hover:scale-105 transition-all active:scale-100 w-fit text-white font-bold py-3 px-4">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
