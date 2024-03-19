import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  coordinates: L.LatLngExpression;
  zoomLevel: number;
}

const LocationMap: React.FC<MapProps> = ({ coordinates, zoomLevel }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current, { zoomControl: false }).setView(
        coordinates,
        zoomLevel
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coordinates).addTo(map).bindPopup("Designo Office").openPopup();

      // Cleanup function to remove map on unmount
      return () => {
        map.remove();
      };
    }
  }, [coordinates, zoomLevel]); // Only re-run the effect if coordinates or zoom level change

  return (
    <div
      className="mx-0 w-full md:mb-8 md:mx-6 md:rounded-2xl md:mt-12 md:w-mapWidth lg:w-mapLgWidth h-mapHeight lg:m-0 lg:justify-between"
      ref={mapRef}
    />
  );
};

export default LocationMap;
