import React from "react";
import DesignPageCard from "../DesignComponent/DesignPageCard";

// The GraphicDesignPageCardContainer component is responsible for laying out the individual project cards related to graphic design.
const GraphicDesignPageCardContainer: React.FC = () => {
  return (
    // Container for the design cards, using a grid layout on larger screens for a cohesive look.
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:ml-40 lg:mr-20">
      {/* DesignPageCard for the 'TIM BROWN' project */}
      <DesignPageCard
        img="/public/graphicDesign/image-change.jpg" // Image source for the card background
        title="TIM BROWN" // Title of the project
        description="A book cover designed for Tim Brown’s new release, ‘Change’" // Short description of the project
      />

      {/* DesignPageCard for the 'Boxed Water' project */}
      <DesignPageCard
        img="/public/graphicDesign/image-boxed-water.jpg" // Image source for the card background
        title="Boxed Water" // Title of the project
        description="A simple packaging concept made for Boxed Water" // Short description of the project
      />

      {/* DesignPageCard for the 'science!' project */}
      <DesignPageCard
        img="/public/graphicDesign/image-science.jpg" // Image source for the card background
        title="science!" // Title of the project
        description="A poster made in collaboration with the Federal Art Project" // Short description of the project
      />
    </div>
  );
};

export default GraphicDesignPageCardContainer;
