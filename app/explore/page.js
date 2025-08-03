import Hero from "@/components/explore/Hero";
import Units from "@/components/explore/Units";

export default function Explore() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-20 border-b border-black"></div>
      <Hero />
      <Units />
    </div>
  );
}
