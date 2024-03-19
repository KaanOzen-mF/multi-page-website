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
    <div
      className=" bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')]  bg-center bg-lightPeachWhite
     py-16 px-6 text-center font-jost md:px-24 md:mx-6 md:rounded-2xl md:text-start md:mb-32 lg:h-mapHeight lg:m-0 lg:w-mapWidth lg:px-64 lg:py-36 "
    >
      <LocationTitle title={locationTitle} />
      <div className="md:flex">
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
    </div>
  );
};

export default LocationTextsCard;
