import React from "react";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS for map styling
import LocationCard from "./LocationCard";

// The LocationsPage component serves as a container for all LocationCard components,
// each representing a different office location for Designo.
const LocationsPage: React.FC = () => {
  return (
    <>
      {/* LocationCard for the Canada office. Each card includes the office's location details and contact information. */}
      <LocationCard
        coordinates={[43.6440842094166, -79.39456026061868]} // Latitude and Longitude for the map center
        zoomLevel={15} // Map zoom level
        locationTitle="Canada" // General location title
        locationInfoTitle="Designo Central Office" // Specific location title
        locationInfo1="3886 Wellington Street" // Address line 1
        locationInfo2="Toronto, Ontario M9C 3J5" // Address line 2
        contactTitle="Contact" // Contact section title
        contactInfo1="P : +1 253-863-8967" // Phone contact
        contactInfo2="M : contact@designo.co" // Email contact
        index={1} // Index used for layout styling
      />

      {/* LocationCard for the Australia office. Similar structure to the Canada card but with different location details. */}
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
        index={2}
      />

      {/* LocationCard for the United Kingdom office. Contains specific information for the UK location. */}
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
        index={3}
      />
    </>
  );
};

export default LocationsPage;
