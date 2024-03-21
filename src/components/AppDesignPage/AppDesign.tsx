import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader";
import AppDesignPageCardContainer from "./AppDesignPageCardContainer";
import DesignCard from "../DesignComponent/DesignCard";
import { useNavigate } from "react-router";

// The AppDesign component is the main component for showcasing the app design projects.
const AppDesign: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate to different routes programmatically.

  return (
    <>
      {/* DesignPageHeader is a reusable component that displays the header section for the design pages. */}
      <DesignPageHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />

      {/* Container for the app design projects, each represented by a card. */}
      <AppDesignPageCardContainer />

      {/* Lower section with cards for other design categories (Graphic and Web). */}
      <div className="lg:flex lg:flex-row lg:mx-40 lg:w-full lg:mt-24">
        {/* DesignCard is a reusable component for displaying a project category.
            This card is for Graphic Design. Clicking on this card navigates to the Graphic Design page. */}
        <DesignCard
          title="GRAPHIC DESIGN"
          backgroundImage="/src/assets/image-web-design.jpg"
          onProjectClick={() => {
            navigate("/graphic-design"); // Function to navigate to the graphic design page.
          }}
          className="lg:w-half"
        />

        {/* This DesignCard is for Web Design. Clicking on this card navigates to the Web Design page. */}
        <DesignCard
          title="WEB DESIGN"
          backgroundImage="/src/assets/image-web-design.jpg"
          onProjectClick={() => {
            navigate("/web-design"); // Function to navigate to the web design page.
          }}
          className="lg:w-half"
        />
      </div>
    </>
  );
};

export default AppDesign;
