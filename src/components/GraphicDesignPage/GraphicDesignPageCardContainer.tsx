import React from "react";
import DesignPageCard from "../DesignComponent/DesignPageCard";

const GraphicDesignPageCardContainer: React.FC = () => {
  return (
    <div>
      <DesignPageCard
        img="/src/assets/Express.png"
        title="Exspress"
        description="A multi-carrier shipping website for ecommerce businesses"
      />
    </div>
  );
};

export default GraphicDesignPageCardContainer;
