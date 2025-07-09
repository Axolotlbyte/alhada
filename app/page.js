import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-outfit)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
