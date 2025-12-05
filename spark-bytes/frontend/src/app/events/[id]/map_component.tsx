// src/components/EventMap.tsx

"use client";

import { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

type EventMapProps = {
  location: string;
};

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "0.75rem",
};

// Optional: fallback center (BU CDS building)
const DEFAULT_CENTER = { lat: 42.3505, lng: -71.1054 };

export default function EventMap({ location }: EventMapProps) {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  // Geocode the location string → coordinates
  useEffect(() => {
    if (!isLoaded) return;

    async function geocode() {
      try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.results?.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoords({ lat, lng });
        } else {
          console.warn("Location not found — using fallback coordinates.");
          setCoords(DEFAULT_CENTER);
        }
      } catch (err) {
        console.error(err);
        setCoords(DEFAULT_CENTER);
      }
    }

    geocode();
  }, [location, isLoaded]);

  if (loadError) return <p>Map failed to load.</p>;
  if (!isLoaded) return <p>Loading map library...</p>;
  if (!coords) return <p>Finding location...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={15}>
      <Marker position={coords} />
    </GoogleMap>
  );
}
