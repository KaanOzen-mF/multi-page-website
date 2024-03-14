import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader";
import GraphicDesignPageCardContainer from "./GraphicDesignPageCardContainer";
import DesignCard from "../DesignComponent/DesignCard";
import { useNavigate } from "react-router-dom";

const GraphicDesign: React.FC = () => {
  const navigate = useNavigate(); // Initialize useHistory
  return (
    <div>
      <DesignPageHeader
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <GraphicDesignPageCardContainer />
      <DesignCard
        title="APP DESIGN"
        backgroundImage="/src/assets/image-app-design.jpg"
        onProjectClick={() => {
          navigate("/app-design"); // Navigate to web design page
        }}
      />
      <DesignCard
        title="WEB DESIGN"
        backgroundImage="/src/assets/image-web-design.jpg"
        onProjectClick={() => {
          navigate("/web-design"); // Navigate to web design page
        }}
      />
    </div>
  );
};

export default GraphicDesign;
