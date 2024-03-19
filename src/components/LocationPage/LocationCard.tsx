import React from "react";
import LocationMap from "./LocationMap";
import LocationTextsCard from "./LocationTextsCard";

interface LocationCardProps {
  coordinates: L.LatLngExpression;
  zoomLevel: number;
  locationTitle: string;
  locationInfoTitle: string;
  locationInfo1: string;
  locationInfo2: string;
  contactTitle: string;
  contactInfo1: string;
  contactInfo2: string;
  index: number;
}
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
    <div
      className={`mb-12 lg:px-44 lg:flex lg:items-center lg:mt-4 lg:space-x-4 ${
        index % 2 === 1
          ? "lg:flex-row-reverse lg:space-x-reverse"
          : "lg:flex-row"
      }`}
    >
      <LocationMap coordinates={coordinates} zoomLevel={zoomLevel} />
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
