import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Import Leaflet for map functionality
import "leaflet/dist/leaflet.css"; // Import Leaflet's default stylesheet

// Define the prop types for the MapProps interface
interface MapProps {
  coordinates: L.LatLngExpression; // Coordinates for the center of the map
  zoomLevel: number; // Initial zoom level of the map
}

// The LocationMap component displays a map centered on the given coordinates.
const LocationMap: React.FC<MapProps> = ({ coordinates, zoomLevel }) => {
  const mapRef = useRef<HTMLDivElement>(null); // Reference to the div element where the map will be instantiated

  useEffect(() => {
    if (mapRef.current) {
      // Ensure the ref is linked to an element
      const map = L.map(mapRef.current, { zoomControl: false }).setView(
        coordinates, // Center of the map
        zoomLevel // Zoom level
      );

      // Set up the map tiles using OpenStreetMap's free tile server
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19, // Maximum zoom level allowed
        // Attribution text required by OpenStreetMap's tile usage policy
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker to the map at the given coordinates and attach a popup to it
      L.marker(coordinates).addTo(map).bindPopup("Designo Office").openPopup();

      // Cleanup function to remove the map instance from the DOM when the component unmounts
      return () => {
        map.remove();
      };
    }
  }, [coordinates, zoomLevel]); // Effect dependencies, the effect will re-run if these values change

  // Return a div that will hold the map, with a ref attached to it for Leaflet to access
  return (
    <div
      className="mx-0 w-full md:mb-8 md:mx-6 md:rounded-2xl md:mt-12 md:w-mapWidth lg:w-mapLgWidth h-mapHeight lg:m-0 lg:justify-between"
      ref={mapRef}
    />
  );
};

export default LocationMap;
