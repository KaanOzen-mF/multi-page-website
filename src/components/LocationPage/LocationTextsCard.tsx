import React from "react";
import LocationInfo from "./LocationInfo";
import LocationTitle from "./LocationTitle";
import LocationContactInfo from "./LocationContactInfo";

interface LocationTextsCardProps {
  locationTitle: string;
  locationInfoTitle: string;
  locationInfo1: string;
  locationInfo2: string;
  contactTitle: string;
  contactInfo1: string;
  contactInfo2: string;
}

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
    <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-lightPeachWhite py-16 px-6 text-center font-jost bg-center">
      <LocationTitle title={locationTitle} />
      <LocationInfo
        title={locationInfoTitle}
        info1={locationInfo1}
        info2={locationInfo2}
      />
      <LocationContactInfo
        contactTitle={contactTitle}
        contactInfo1={contactInfo1}
        contactInfo2={contactInfo2}
      />
    </div>
  );
};

export default LocationTextsCard;
