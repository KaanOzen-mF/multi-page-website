import React from "react";

// Define the prop types for the LocationInfo component
interface LocationInfoProps {
  title: string; // Title for the location info section
  info1: string; // The first line of information about the location
  info2: string; // The second line of information about the location
}

// The LocationInfo component displays information about a specific location, such as address or office hours.
const LocationInfo: React.FC<LocationInfoProps> = ({ title, info1, info2 }) => {
  return (
    // Container for the location information section, with margins adjusted for responsiveness
    <div className="mt-6 md:mr-16 md:text-start lg:mr-48">
      {/* Title for the location info, styled as bold and capitalized */}
      <p className="font-bold leading-10 capitalize">{title}</p>
      {/* First line of location information, capitalized */}
      <p className="font-normal capitalize">{info1}</p>
      {/* Second line of location information, displayed as normal text */}
      <p className="font-normal">{info2}</p>
    </div>
  );
};

export default LocationInfo;
