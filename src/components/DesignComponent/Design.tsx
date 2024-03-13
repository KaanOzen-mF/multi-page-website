import React from "react";
import DesignCard from "./DesignCard";

const Design: React.FC = () => {
  return (
    <div className="mt-48">
      <DesignCard
        title="WEB DESIGN"
        backgroundImage="/src/assets/image-web-design.jpg"
        onProjectClick={() => {
          console.log("web design clicked");
        }}
      />
      <DesignCard
        title="APP DESIGN"
        backgroundImage="/src/assets/image-app-design.jpg"
        onProjectClick={() => {
          console.log("app design clicked");
        }}
      />
      <DesignCard
        title="GRAPHIC DESIGN"
        backgroundImage="/src/assets/image-graphic-design.jpg"
        onProjectClick={() => {
          console.log("graphic design clicked");
        }}
      />
    </div>
  );
};

export default Design;
