import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader"; // Import the component for the page header
import WebDesignPageCardContainer from "./WebDesignPageCardContainer"; // Import the container for web design cards
import DesignCard from "../DesignComponent/DesignCard"; // Import the component for individual design cards
import { useNavigate } from "react-router-dom"; // Import hook for programmatic navigation

// The WebDesign component serves as the main page for showcasing web design projects.
const WebDesign: React.FC = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes

  return (
    <>
      {/* DesignPageHeader component displays the title and description for the web design page */}
      <DesignPageHeader
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />

      {/* Container for web design project cards */}
      <WebDesignPageCardContainer />

      {/* Additional design categories (App and Graphic Design) represented as clickable cards */}
      <div className="lg:flex lg:flex-row lg:mx-40 lg:w-full lg:mt-24">
        {/* DesignCard for App Design. Clicking this card navigates to the App Design page */}
        <DesignCard
          title="APP DESIGN"
          backgroundImage="/public/design/image-app-design.jpg" // Background image for the card
          onProjectClick={() => {
            navigate("/app-design"); // Function to navigate to the app design page
          }}
          className="lg:w-half"
        />

        {/* DesignCard for Graphic Design. Clicking this card navigates to the Graphic Design page */}
        <DesignCard
          title="GRAPHIC DESIGN"
          backgroundImage="/public/design/image-graphic-design.jpg" // Background image for the card
          onProjectClick={() => {
            navigate("/graphic-design"); // Function to navigate to the graphic design page
          }}
          className="lg:w-half"
        />
      </div>
    </>
  );
};

export default WebDesign;
