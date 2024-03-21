import React from "react";
import LocationMap from "./LocationMap";
import LocationTextsCard from "./LocationTextsCard";

// Interface to type the props that LocationCard component will receive.
interface LocationCardProps {
  coordinates: L.LatLngExpression; // Coordinates for the location map
  zoomLevel: number; // Zoom level for the location map
  locationTitle: string; // Title of the location
  locationInfoTitle: string; // Subtitle for location information
  locationInfo1: string; // First line of location information
  locationInfo2: string; // Second line of location information
  contactTitle: string; // Title for the contact section
  contactInfo1: string; // First line of contact information
  contactInfo2: string; // Second line of contact information
  index: number; // Index to control the layout flip for alternate cards
}

// The LocationCard component displays a map alongside location and contact information.
const LocationCard: React.FC<LocationCardProps> = ({
  coordinates,
  zoomLevel,
  locationTitle,
  locationInfoTitle,
  locationInfo1,
  locationInfo2,
  contactTitle,
  contactInfo1,
  contactInfo2,
  index,
}) => {
  return (
    // Container for the location card with conditional styling for alternate layout flipping.
    <div
      className={`mb-12 lg:px-44 lg:flex lg:items-center lg:mt-4 lg:space-x-4 ${
        index % 2 === 1
          ? "lg:flex-row-reverse lg:space-x-reverse" // For odd index cards, flip the layout
          : "lg:flex-row" // For even index cards, keep the standard layout
      }`}
    >
      {/* LocationMap component to render the map based on provided coordinates and zoom level */}
      <LocationMap coordinates={coordinates} zoomLevel={zoomLevel} />

      {/* LocationTextsCard component to display textual information about the location and contact details */}
      <LocationTextsCard
        locationTitle={locationTitle}
        locationInfoTitle={locationInfoTitle}
        locationInfo1={locationInfo1}
        locationInfo2={locationInfo2}
        contactTitle={contactTitle}
        contactInfo1={contactInfo1}
        contactInfo2={contactInfo2}
      />
    </div>
  );
};

export default LocationCard;
