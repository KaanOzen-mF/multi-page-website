import React from "react";
import DesignPageCard from "../DesignComponent/DesignPageCard";

const GraphicDesignPageCardContainer: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:ml-40 lg:mr-20">
      <DesignPageCard
        img="/src/assets/graphicDesign/image-change.jpg"
        title="TIM BROWN"
        description="A book cover designed for 
        Tim Brown’s new release, ‘Change’"
      />

      <DesignPageCard
        img="/src/assets/graphicDesign/image-boxed-water.jpg"
        title="Boxed Water"
        description="A simple packaging concept made for Boxed Water"
      />
      <DesignPageCard
        img="/src/assets/graphicDesign/image-science.jpg"
        title="science!"
        description="A poster made in collaboration with the Federal Art Project"
      />
    </div>
  );
};

export default GraphicDesignPageCardContainer;
