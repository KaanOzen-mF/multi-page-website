import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader";
import WebDesignPageCardContainer from "./WebDesignPageCardContainer";
import DesignCard from "../DesignComponent/DesignCard";
import { useNavigate } from "react-router-dom";

const WebDesign: React.FC = () => {
  const navigate = useNavigate(); // Initialize useHistory
  return (
    <>
      <DesignPageHeader
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <WebDesignPageCardContainer />
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
          navigate("/graphic-design"); // Navigate to grapic design page
        }}
      />
    </>
  );
};

export default WebDesign;
