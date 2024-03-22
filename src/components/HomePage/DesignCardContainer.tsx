import React from "react";
import { useNavigate } from "react-router";
import DesignCard from "../DesignComponent/DesignCard";

// The Design component showcases different design services like Web, App, and Graphic design.
const Design: React.FC = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes.

  return (
    // Main container with top and bottom padding.
    <div className="mt-48 pb-24">
      {/* Flex container to arrange design cards. It wraps cards on smaller screens and aligns them in a row on larger screens. */}
      <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-4 lg:px-40">
        {/* DesignCard for Web Design. Occupies full width on larger screens and grows within the flex container. */}
        <DesignCard
          title="WEB DESIGN"
          backgroundImage="/static/design/image-web-design-large.jpg" // Background image for the card
          onProjectClick={() => navigate("/web-design")} // Navigation function to the web design page on click
          className="lg:w-full lg:flex-grow"
        />

        {/* Container for App and Graphic design cards, making them stack vertically on larger screens. */}
        <div className="lg:w-full lg:w-half lg:flex lg:flex-col lg:gap-4">
          {/* DesignCard for App Design. Occupies the full width and height of its container on larger screens. */}
          <DesignCard
            title="APP DESIGN"
            backgroundImage="/static/design/image-app-design.jpg" // Background image for the card
            onProjectClick={() => navigate("/app-design")} // Navigation function to the app design page on click
            className="lg:w-full lg:h-full"
          />

          {/* DesignCard for Graphic Design. Occupies the full width and height of its container on larger screens. */}
          <DesignCard
            title="GRAPHIC DESIGN"
            backgroundImage="/static/design/image-graphic-design.jpg" // Background image for the card
            onProjectClick={() => navigate("/graphic-design")} // Navigation function to the graphic design page on click
            className="lg:w-full lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
