import React from "react";
import LocationInfo from "./LocationInfo";
import LocationTitle from "./LocationTitle";
import LocationContactInfo from "./LocationContactInfo";

// Interface to define the props that the LocationTextsCard component will receive
interface LocationTextsCardProps {
  locationTitle: string; // Title for the location card
  locationInfoTitle: string; // Title for the location information section
  locationInfo1: string; // First line of information about the location
  locationInfo2: string; // Second line of information about the location
  contactTitle: string; // Title for the contact information section
  contactInfo1: string; // First line of contact information
  contactInfo2: string; // Second line of contact information
}

// The LocationTextsCard component assembles various pieces of textual information related to a specific location
const LocationTextsCard: React.FC<LocationTextsCardProps> = ({
  locationTitle,
  locationInfoTitle,
  locationInfo1,
  locationInfo2,
  contactTitle,
  contactInfo1,
  contactInfo2,
}) => {
  return (
    // Container for the location texts card with background and styling
    <div
      className="bg-[url('/public/static/bg/bg-pattern-design-pages-intro-mobile.svg')] bg-center bg-lightPeachWhite
     py-16 px-6 text-center font-jost md:px-24 md:mx-6 md:rounded-2xl md:text-start md:mb-32 lg:h-mapHeight lg:m-0 lg:w-mapWidth lg:px-64 lg:py-36"
    >
      {/* Component for displaying the title of the location */}
      <LocationTitle title={locationTitle} />

      {/* Container to group location information and contact information, arranged side by side on wider screens */}
      <div className="md:flex">
        {/* Component for displaying detailed location information */}
        <LocationInfo
          title={locationInfoTitle}
          info1={locationInfo1}
          info2={locationInfo2}
        />

        {/* Component for displaying contact information */}
        <LocationContactInfo
          contactTitle={contactTitle}
          contactInfo1={contactInfo1}
          contactInfo2={contactInfo2}
        />
      </div>
    </div>
  );
};

export default LocationTextsCard;
