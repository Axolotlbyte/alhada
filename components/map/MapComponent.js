"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";

const imageUrl = "/images/map/map.jpg"; // Replace with your image path
const imageBounds = [[0, 0], [9150, 11275]]; // [height, width]


export default function MapComponent() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      bounds={imageBounds}
      style={{ height: "600px", width: "100%" }}
      maxZoom={5}
      minZoom={-80}
      zoom={0}
      scrollWheelZoom={true}
      touchZoom={true} 
      doubleClickZoom={true} 
      dragging={true}
    >
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
    </MapContainer>
  );
}
