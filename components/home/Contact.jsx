import contactImg from "../../public/images/contact.png";

const Input = ({ type, placeholder }) => {
  return (
    <div className="w-full h-10 bg-black/50">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full bg-transparent text-white px-4 outline-none"
      />
    </div>
  )
}
const Contact = () => {
  return (
    <section
      style={{ backgroundImage: `url(${contactImg.src})` }}
      className="w-full bg-cover h-screen flex items-center justify-center"
    >
      <div className="flex flex-col p-4 gap-8 items-center justify-center bg-black/60 bg-opacity-60 text-center h-fit w-1/2 bg-opacity-20">
        <h1 className="text-2xl text-white font-bold">Contact Us</h1>
        <div className="flex w-full gap-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
        </div>
        <div className="flex w-full gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="number" placeholder="Phone" />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Message"
            className="w-full h-24 bg-black/50 text-white py-2 px-3 outline-none"
          ></textarea>
        </div>
        <button className="bg-primary w-fit text-white font-bold py-3 px-4">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
