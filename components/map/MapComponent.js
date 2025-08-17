"use client";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ImageOverlay,
} from "react-leaflet";
import L from "leaflet";

const imageUrl = "/images/map/map.jpg";
const imageBounds = [
  [0, 0],
  [9150, 11275],
];

const AmenitiesIcon = L.divIcon({
  className: "custom-label label-text-map",
  html: "<div>Amenities</div>",
  iconSize: [80, 40],
});

const SecurityIcon = L.divIcon({
  className: "custom-label label-text-map",
  html: "<div>Security Main Gate</div>",
  iconSize: [140, 40],
});

const AdminIcon = L.divIcon({
  className: "custom-label label-text-map",
  html: "<div>Admin Building</div>",
  iconSize: [100, 40],
});

const ZoneNineIcon = L.divIcon({
  className: "custom-label label-text-map",
  html: "<div>Zone 9 Pool</div>",
  iconSize: [80, 40],
});

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
      attributionControl={false}
    >
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
      <Marker position={[4800, 6200]} icon={AmenitiesIcon} />
      <Marker position={[2000, 7850]} icon={SecurityIcon} />
      <Marker position={[3300, 9850]} icon={AdminIcon} />
      <Marker position={[4600, 4200]} icon={ZoneNineIcon} />
    </MapContainer>
  );
}
