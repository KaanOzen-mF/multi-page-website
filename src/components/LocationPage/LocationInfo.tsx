import React from "react";

interface LocationInfoProps {
  title: string;
  info1: string;
  info2: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ title, info1, info2 }) => {
  return (
    <div className="mt-6">
      <p className="font-bold leading-10 capitalize">{title}</p>
      <p className="font-normal capitalize">{info1}</p>
      <p className="font-normal">{info2}</p>
    </div>
  );
};

export default LocationInfo;
