import React from "react";

// Define the prop types for the LocationTitle component
interface LocationTitleProps {
  title: string; // Title text to be displayed
}

// The LocationTitle component is responsible for rendering the title of a location section.
const LocationTitle: React.FC<LocationTitleProps> = ({ title }) => {
  return (
    // The title element styled to match the design specifications
    <h2 className="font-medium text-3xl md:text-4xl text-peach uppercase self-start">
      {/* Display the title passed as a prop */}
      {title}
    </h2>
  );
};

export default LocationTitle;
