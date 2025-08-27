import Break from "@/components/Break.jsx";
import Header from "@/components/Header";
import Contact from "@/components/home/Contact";
import ScrollToTop from "@/components/scrollToTop";
import Image from "next/image";

// const vision = () => {
//   return <div></div>;
// };

export default function About() {
  return (
    <div className="w-full h-auto">
      <Header />
      <div className="h-auto w-full pb-16">
        {/* Hero Section */}
        <div
          id="hero"
          className="w-full relative overflow-hidden flex items-center justify-center h-fit"
        >
          <Image
            src="/images/site.png"
            alt="Explore Image"
            width={2000}
            height={2000}
            className="w-full h-auto object-cover"
          />

          <Image
            src="/invertedLogo.png"
            alt="Explore Image"
            width={2000}
            height={2000}
            className="w-[53%] rotate-180 h-auto opacity-30 object-cover absolute -top-[19%] -left-[1%]"
          />
          <Image
            src="/invertedLogo.png"
            alt="Explore Image"
            width={2000}
            height={2000}
            className="w-[53%] rotate-180 h-auto opacity-30 object-cover absolute -top-[19%] -right-[1%]"
          />

          <Image
            src="/invertedLogo.png"
            alt="Explore Image"
            width={2000}
            height={2000}
            className="w-[53%]  h-auto opacity-30 object-cover absolute -bottom-[19%] -left-[1%]"
          />
          <Image
            src="/invertedLogo.png"
            alt="Explore Image"
            width={2000}
            height={2000}
            className="w-[53%]  h-auto opacity-30 object-cover absolute -bottom-[19%] -right-[1%]"
          />
          <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full bg-[#839563]/90">
            {/* <Image
              src="/icons/logoWhite.svg"
              alt="Wadi al Hada Logo"
              width={90}
              height={90}
              className="w-1/2 h-1/2 inline-block"
            /> */}
            <h1 style={{ color: "white" }} className="text-white">
              About Us
            </h1>
          </div>
        </div>

        {/* vision */}
        <div className="w-11/12 text-center mx-auto py-16 relative overflow-hidden flex flex-col gap-6">
          <h2>Our Vision</h2>
          <p>
            To create Riyadh’s premier Western-style compound resort—an enclave
            of elegance, comfort, and cosmopolitan living. We envision a vibrant
            community where timeless architecture, curated amenities, and lush
            landscapes offer residents a seamless blend of privacy, leisure, and
            connection. Rooted in international standards and inspired by local
            charm, our resort is a sanctuary for families, professionals, and
            global citizens seeking a refined lifestyle in the heart of the
            Kingdom
          </p>
          <div className="absolute inset-0 w-full opacity-10 top-0 -z-0 h-96 md:h-[600px]">
            <Image
              src="/logo.svg"
              alt="Welcome Image"
              width={4000}
              height={4000}
              className="w-full h-full select-none object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* Story */}
        <div className="w-11/12 text-center flex flex-col gap-6 mx-auto">
          <Break />
          <h2>Our Story</h2>
          <div className="w-11/12 md:w-3/5 mx-auto grid gap-4">
            <p>
              <b>From Wadi to Sanctuary Once</b>, this land was a quiet wadi—an
              ancient valley carved by time and seasonal rains, where desert
              winds whispered through acacia trees and migrating birds paused in
              their journey. It was raw, untouched, and brimming with potential.
              We saw not just a stretch of earth, but a canvas for something
              extraordinary. Through careful planning and respectful reshaping,
              the wadi was transformed—not erased, but reimagined. Construction
              began with a deep commitment to preserving the natural contours
              and ecological spirit of the land. Native flora was protected,
              water pathways were honored, and the terrain was sculpted to
              cradle a new kind of living: one that feels both grounded and
              elevated. Today, that vision stands realized. A Place to Call Home
              Our compound is more than a collection of buildings—it’s a
              thoughtfully designed community where Western and non-Western
              residents alike can feel truly at home. Whether you're here for
              work, family, or adventure, you’ll find a space that reflects your
              lifestyle and respects your individuality.
            </p>
            <h4>Pools & Recreation</h4>
            <p>
              Crystal-clear pools shimmer under the Riyadh sun, inviting
              relaxation and play. From lap pools to splash zones, water is a
              central element—cooling, calming, and connecting.
            </p>
            <h4>Games & Amenities</h4>
            <p>
              Every corner of the resort is designed for joy and connection.
              Tennis courts, fitness centers, playgrounds, and shaded walking
              paths create a rhythm of life that balances activity with
              serenity. Indoor lounges and outdoor gathering spaces foster
              community, while private nooks offer quiet retreat. Housing That
              Feels Right Our residences blend Western architectural
              sensibilities with local materials and climate-conscious design.
              Spacious layouts, natural light, and modern finishes make each
              home a haven—secure, stylish, and smart. <br />A Vision of
              Belonging We built this place with one guiding belief: that
              everyone deserves to feel safe, seen, and settled. Whether you're
              from Riyadh or Rio, London or Lahore, our doors are open. This is
              a compound where cultures meet, friendships form, and life unfolds
              with ease.
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <ScrollToTop />
    </div>
  );
}
