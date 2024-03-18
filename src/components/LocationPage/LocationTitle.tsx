import React from "react";

interface LocationTitleProps {
  title: string;
}
const LocationTitle: React.FC<LocationTitleProps> = ({ title }) => {
  return (
    <h2 className="font-medium text-3xl md:text-4xl text-peach uppercase self-start">
      {title}
    </h2>
  );
};

export default LocationTitle;
