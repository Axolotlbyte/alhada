import Hero from "@/components/explore/Hero";
import Units from "@/components/explore/Units";
import Header from "@/components/Header";
import Contact from "@/components/home/Contact";

export default function Explore() {
  return (
    <div className="w-full grid overflow-hidden h-auto">
      <Header />
      <main>
        {/* <div className="w-full h-20 border-b border-black"></div> */}
        <Hero />
        <Units />
      </main>
      <Contact />
    </div>
  );
}
