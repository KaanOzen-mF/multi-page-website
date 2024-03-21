import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader";
import GraphicDesignPageCardContainer from "./GraphicDesignPageCardContainer";
import DesignCard from "../DesignComponent/DesignCard";
import { useNavigate } from "react-router-dom";

// The GraphicDesign component serves as the main page for showcasing graphic design projects.
const GraphicDesign: React.FC = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div>
      {/* DesignPageHeader component displaying the title and description for the graphic design page */}
      <DesignPageHeader
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />

      {/* Container for graphic design project cards */}
      <GraphicDesignPageCardContainer />

      {/* Additional design categories (App and Web Design) represented as clickable cards */}
      <div className="lg:flex lg:flex-row lg:mx-40 lg:w-full lg:mt-24">
        {/* DesignCard for App Design. Clicking this card navigates to the App Design page. */}
        <DesignCard
          title="APP DESIGN"
          backgroundImage="/public/design/image-app-design.jpg"
          onProjectClick={() => {
            navigate("/app-design"); // Function to navigate to the app design page
          }}
          className="lg:w-half"
        />

        {/* DesignCard for Web Design. Clicking this card navigates to the Web Design page. */}
        <DesignCard
          title="WEB DESIGN"
          backgroundImage="/public/design/image-web-design.jpg"
          onProjectClick={() => {
            navigate("/web-design"); // Function to navigate to the web design page
          }}
          className="lg:w-half"
        />
      </div>
    </div>
  );
};

export default GraphicDesign;
