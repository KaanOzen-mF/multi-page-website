import React from "react";

// Props definition for the AboutCard component
interface AboutCardProps {
  title: string; // Title of the card
  description: string; // Description for the card content
  imageSrc: string; // Image source URL
}

// Functional component for About section card
const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    // Container for the card with responsive design for mobile and desktop views
    <div className="flex flex-col md:flex-row justify-center items-center h-64 font-jost p-6 mt-48 mb-48 md:mb-9  md:mt-9">
      {/*Image element with dynamic source and alt text based on props*/}
      <img className="mb-8" src={imageSrc} alt={title} />
      {/* Text container with title and description, layout adjustments for responsive design */}
      <div className="flex flex-col items-center md:items-start md:ml-8">
        {/* Title styling with custom tracking and margin */}
        <h3 className="text-xl font-medium tracking-designCardSpacing  mb-12 md:mb-4">
          {title}
        </h3>
        {/* Description text with responsive text alignment and margin */}
        <p className="text-center font-normal leading-relaxed mb-48 md:mb-0 md:text-start">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
