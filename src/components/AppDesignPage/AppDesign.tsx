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

      <div className="lg:flex lg:flex-row lg:mx-40 lg:w-full">
        <DesignCard
          title="GRAPHIC DESIGN"
          backgroundImage="/src/assets/image-web-design.jpg"
          onProjectClick={() => {
            navigate("/graphic-design"); // Navigate to graphic design page
          }}
          className="lg:w-half"
        />
        <DesignCard
          title="WEB DESIGN"
          backgroundImage="/src/assets/image-web-design.jpg"
          onProjectClick={() => {
            navigate("/web-design"); // Navigate to web design page
          }}
          className="lg:w-half"
        />
      </div>
    </>
  );
};

export default AppDesign;
