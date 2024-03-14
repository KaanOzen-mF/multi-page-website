import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader";
import GraphicDesignPageCardContainer from "./GraphicDesignPageCardContainer";

const GraphicDesign: React.FC = () => {
  return (
    <div>
      <DesignPageHeader
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <GraphicDesignPageCardContainer />
    </div>
  );
};

export default GraphicDesign;
