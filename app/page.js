import Contact from "@/components/home/Contact";
import Games from "@/components/home/Games";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Welcome from "@/components/home/Welcome";
import Pools from "@/components/home/Pools";
import Dining from "@/components/home/Dining";
import Gym from "@/components/home/Gym";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-outfit)] w-full bg-white">
      <main className="flex w-full flex-col row-start-2 items-center sm:items-start">
        <Hero />
        <Welcome />
        <Pools />
        <Gym />
        <Dining />
        <Games />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
