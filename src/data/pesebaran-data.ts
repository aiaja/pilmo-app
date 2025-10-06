// Definisikan tipe data untuk setiap titik persebaran
export interface DiseaseHotspot {
  id: number;
  lat: number;
  lng: number;
  radius: number; // Radius dalam meter
  intensity: number;
  areaName: string;
  caseCount: number;
}

// Data dummy persebaran di sekitar Kabupaten Batang
// Koordinat pusat Batang sekitar: -6.9147, 109.7308
export const dummyData: DiseaseHotspot[] = [
  {
    id: 1,
    lat: -6.9174,
    lng: 109.7332,
    radius: 1500, // 1.5 km
    areaName: "Alun-alun Batang",
    caseCount: 12,
    intensity: 2.3
  },
  {
    id: 2,
    lat: -6.9021,
    lng: 109.7751,
    areaName: "Kecamatan Tulis",
    caseCount: 8,
    radius: 1200, // 1.2 km,
    intensity: 1
  },
  {
    id: 3,
    lat: -7.0253,
    lng: 109.8315,
    areaName: "Kecamatan Bawang",
    caseCount: 5,
    radius: 2000, // 2 km,
    intensity: 0.8
  },
  {
    id: 4,
    lat: -6.9389,
    lng: 109.7005,
    areaName: "Kecamatan Warungasem",
    caseCount: 15,
    radius: 1800, // 1.8 km,
    intensity: 5
  },
  {
    id: 5,
    lat: -6.8520,
    lng: 109.7390,
    areaName: "Pantai Sigandu",
    caseCount: 3,
    radius: 1000, // 1 km,
    intensity: 0.5
  },
];