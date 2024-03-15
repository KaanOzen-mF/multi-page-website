import React from "react";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet's CSS is imported
import LocationCard from "./LocationCard";

const LocationsPage: React.FC = () => {
  return (
    <>
      <LocationCard
        coordinates={[43.6440842094166, -79.39456026061868]}
        zoomLevel={15}
        locationTitle="Canada"
        locationInfoTitle="Designo Central Office"
        locationInfo1="3886 Wellington Street"
        locationInfo2="Toronto, Ontario M9C 3J5"
        contactTitle="Contact"
        contactInfo1="P : +1 253-863-8967"
        contactInfo2="M : contact@designo.co"
      />
      <LocationCard
        coordinates={[-30.329305870226793, 149.7882077103273]}
        zoomLevel={15}
        locationTitle="Australia"
        locationInfoTitle="Designo AU Office"
        locationInfo1="19 Balonne Street"
        locationInfo2="New South Wales 2443"
        contactTitle="Contact"
        contactInfo1="P : (02) 6720 9092"
        contactInfo2="M : contact@designo.au"
      />
      <LocationCard
        coordinates={[51.73276183232242, -3.8618141088743254]}
        zoomLevel={15}
        locationTitle="United Kingdom"
        locationInfoTitle="Designo UK Office"
        locationInfo1="13  Colorado Way"
        locationInfo2="Rhyd-y-fro SA8 9GA"
        contactTitle="Contact"
        contactInfo1="P : 078 3115 1400"
        contactInfo2="M : contact@designo.uk"
      />
    </>
  );
};

export default LocationsPage;
