import React from "react";
import { useNavigate } from "react-router"; // Import useNavigate
import DesignCard from "../DesignComponent/DesignCard";

const Design: React.FC = () => {
  const navigate = useNavigate(); // Initialize useHistory

  return (
    <div className="mt-48 pb-24">
      <DesignCard
        title="WEB DESIGN"
        backgroundImage="/src/assets/image-web-design.jpg"
        onProjectClick={() => {
          navigate("/web-design"); // Navigate to web design page
        }}
      />
      <DesignCard
        title="APP DESIGN"
        backgroundImage="/src/assets/image-app-design.jpg"
        onProjectClick={() => {
          navigate("/app-design"); // Navigate to app design page
        }}
      />
      <DesignCard
        title="GRAPHIC DESIGN"
        backgroundImage="/src/assets/image-graphic-design.jpg"
        onProjectClick={() => {
          navigate("/graphic-design"); // Navigate to graphic design page
        }}
      />
    </div>
  );
};

export default Design;
