import React from "react";
import DesignPageCard from "../DesignComponent/DesignPageCard";

const GraphicDesignPageCardContainer: React.FC = () => {
  return (
    <div>
      <DesignPageCard
        img="/src/assets/timbrown.png"
        title="TIM BROWN"
        description="A book cover designed for 
        Tim Brown’s new release, ‘Change’"
      />

      <DesignPageCard
        img="/src/assets/boxedwater.png"
        title="boxed water"
        description="A simple packaging concept made for Boxed Water"
      />
      <DesignPageCard
        img="/src/assets/science.png"
        title="science!"
        description="A poster made in collaboration with the Federal Art Project"
      />
    </div>
  );
};

export default GraphicDesignPageCardContainer;
