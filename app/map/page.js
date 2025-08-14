// import dynamic from "next/dynamic";

// // Dynamically import the MapComponent with SSR disabled
// const MapComponent = dynamic(() => import("@/components/map/MapComponent"), {
//   ssr: false,
// });
import dynamic from "next/dynamic";
// import MapComponent from "@/components/map/MapComponent";
import MapWrapper from "@/components/map/MapWrapper";

export default function Map() {
  return (
    <div className="w-full h-screen">
      <MapWrapper />
    </div>
  );
}
