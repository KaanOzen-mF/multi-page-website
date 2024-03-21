import React from "react";

// Define the prop types for LocationContactInfo component
interface LocationContactInfoProps {
  contactTitle: string; // The title for the contact section
  contactInfo1: string; // The first line of contact information
  contactInfo2: string; // The second line of contact information
}

// The LocationContactInfo component displays the contact information for a location.
const LocationContactInfo: React.FC<LocationContactInfoProps> = ({
  contactTitle,
  contactInfo1,
  contactInfo2,
}) => {
  return (
    // Container for the contact information section, with top margin and right margin on medium screens
    <div className="mt-6 md:mr-16 md:text-start">
      {/* Contact section title with bold and capitalized styling */}
      <p className="font-bold leading-10 capitalize">{contactTitle}</p>
      {/* First line of contact information, capitalized */}
      <p className="font-normal capitalize">{contactInfo1}</p>
      {/* Second line of contact information without capitalization */}
      <p className="font-normal">{contactInfo2}</p>
    </div>
  );
};

export default LocationContactInfo;
