import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader";
import AppDesignPageCardContainer from "./AppDesignPageCardContainer";
import DesignCard from "../DesignComponent/DesignCard";
import { useNavigate } from "react-router";

const AppDesign: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <DesignPageHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <AppDesignPageCardContainer />
      <DesignCard
        title="WEB DESIGN"
        backgroundImage="/src/assets/image-app-design.jpg"
        onProjectClick={() => {
          navigate("/web-design"); // Navigate to web design page
        }}
      />
      <DesignCard
        title="GRAPHIC DESIGN"
        backgroundImage="/src/assets/image-web-design.jpg"
        onProjectClick={() => {
          navigate("/graphic-design"); // Navigate to graphic design page
        }}
      />
    </>
  );
};

export default AppDesign;
