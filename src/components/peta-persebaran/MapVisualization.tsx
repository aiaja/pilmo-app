"use client"; // Komponen ini hanya akan berjalan di client-side

import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DiseaseHotspot } from "@/data/pesebaran-data";

// Props untuk komponen peta, yaitu data persebaran
interface MapProps {
  data: DiseaseHotspot[];
}

const getZoneStyle = (intensity: number) => {
  let color = '';
  // Logika berdasarkan legenda yang diberikan
  if (intensity < 0.5) {
    color = '#1a9850'; // Hijau Tua
  } else if (intensity >= 0.5 && intensity < 1) {
    color = '#91cf60'; // Hijau
  } else if (intensity >= 1 && intensity < 2) {
    color = '#d9ef8b'; // Hijau Muda 
  } else if (intensity >= 2 && intensity < 3) {
    color = '#fee08b'; // Kuning
  } else if (intensity >= 3 && intensity < 5) {
    color = '#fc8d59'; // Oranye
  } else { // intensity >= 5
    color = '#d73027'; // Merah
  }

  // Membuat radius dinamis, semakin tinggi intensitas semakin besar radiusnya
  const radius = 250 + (intensity * 150);

  return { color, radius };
};

const MapVisualization: React.FC<MapProps> = ({ data }) => {
  // Koordinat pusat peta (Kabupaten Batang)
  const mapCenter: [number, number] = [-6.9147, 109.7308];

  return (
    <MapContainer
      center={mapCenter}
      zoom={11} // Level zoom awal
      style={{ height: "100%", width: "100%" }}
    >
      {/* Tile Layer dari OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Looping data untuk membuat lingkaran radius */}
      {data.map((hotspot) => (
        <Circle
          key={hotspot.id}
          center={[hotspot.lat, hotspot.lng]}
          radius={hotspot.radius} // Radius dari data
          pathOptions={{
            color: getZoneStyle(hotspot.intensity).color,
            fillColor: getZoneStyle(hotspot.intensity).color,
            fillOpacity: 0.4,
          }}
        >
          {/* Popup yang muncul saat lingkaran di-klik */}
          <Popup>
            <b>{hotspot.areaName}</b>
            <br />
            Jumlah Kasus: {hotspot.caseCount}
            <br />
            Radius Persebaran: {hotspot.radius / 1000} km
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default MapVisualization;