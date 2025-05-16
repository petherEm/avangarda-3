"use client";

import { useEffect, useRef } from "react";

interface MapProps {
  address: string;
}

export default function Map({ address }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current || !window.google) return;

    // Hotel location coordinates
    const hotelLocation = { lat: 52.88757, lng: 21.39105 };

    // Create the map using the custom style ID
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 15,
      center: hotelLocation,
      mapId: "abb0ed8fc5c75391", // Your custom style ID from Google Maps Cloud Console
      disableDefaultUI: true,
      zoomControl: true,
    });

    // Add a simple marker
    new window.google.maps.Marker({
      map,
      position: hotelLocation,
      title: "Hotel Avangarda",
    });
  };

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded overflow-hidden shadow-md"
    />
  );
}
