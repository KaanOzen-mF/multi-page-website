import React from "react";

interface LocationContactInfoProps {
  contactTitle: string;
  contactInfo1: string;
  contactInfo2: string;
}

const LocationContactInfo: React.FC<LocationContactInfoProps> = ({
  contactTitle,
  contactInfo1,
  contactInfo2,
}) => {
  return (
    <div className="mt-6">
      <p className="font-bold leading-10 capitalize">{contactTitle}</p>
      <p className="font-normal capitalize">{contactInfo1}</p>
      <p className="font-normal">{contactInfo2}</p>
    </div>
  );
};

export default LocationContactInfo;
