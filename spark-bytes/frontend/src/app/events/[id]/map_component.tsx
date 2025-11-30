// src/components/EventMap.tsx

"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

type EventMapProps = {
  lat: number;
  lng: number;
};

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "0.75rem",
};

// This component accepts coordinates as attributes: <EventMap lat={event.latitude} lng={event.longitude} />

export default function EventMap({ lat, lng }: EventMapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (loadError) return <p>Map failed to load.</p>;
  if (!isLoaded) return <p>Loading map...</p>;

  const center = { lat, lng };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
