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

// default location in case of geocoding failure (BU CDS building)
const DEFAULT_CENTER = { lat: 42.3500229, lng: -71.1031113 };

export default function EventMap({ location }: EventMapProps) {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
});

  // geocode the location string into coordinates
  useEffect(() => {
    async function geocode() {
      const trimmed = location.trim();

      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        trimmed
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY}`;

      try {
        console.log("Geocoding request for:", trimmed, url);

        const res = await fetch(url);
        const data = await res.json();

        console.log("Geocoding response:", data);

        if (data.status === "OK" && data.results?.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoords({ lat, lng });
        } else {
          console.warn(
            "Location not found — using fallback coordinates. Status:",
            data.status,
            "Error message:",
            data.error_message
          );
          setCoords(DEFAULT_CENTER);
        }
      } catch (err) {
        console.error("Geocoding error:", err);
        setCoords(DEFAULT_CENTER);
      }
    }

    if (location) {
      geocode();
    }
  }, [location]);

  if (loadError) return <p>Map failed to load.</p>;
  if (!isLoaded) return <p>Loading map library...</p>;
  if (!coords) return <p>Finding location...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={15}>
      <Marker position={coords} />
    </GoogleMap>
  );
}
