import React from 'react'
import MapVisualization from "@/components/peta-persebaran/MapVisualization";
import { dummyData } from '@/data/pesebaran-data';

function page() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <h1 style={{ textAlign: 'center', padding: '10px', position: 'relative', top: 10, left: '50%', transform: 'translateX(-50%)', zIndex: 1000, background: 'white', borderRadius: '5px' }}>
        Peta Persebaran Penyakit - Kabupaten Batang
      </h1>
      <MapVisualization data={dummyData} />
    </main>
  )
}

export default page