import React from "react";
import { useNavigate } from "react-router";
import DesignCard from "../DesignComponent/DesignCard";

const Design: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-48 pb-24">
      <div className="lg:flex  lg:flex-wrap  lg:justify-center  lg:gap-4  lg:px-40">
        <DesignCard
          title="WEB DESIGN"
          backgroundImage="/src/assets/home/image-web-design-large.jpg"
          onProjectClick={() => navigate("/web-design")}
          className="lg:w-full lg:flex-grow"
        />
        <div className=" lg:w-full lg:w-half  lg:flex  lg:flex-col  lg:gap-4">
          <DesignCard
            title="APP DESIGN"
            backgroundImage="/src/assets/image-app-design.jpg"
            onProjectClick={() => navigate("/app-design")}
            className=" lg:w-full  lg:h-full"
          />
          <DesignCard
            title="GRAPHIC DESIGN"
            backgroundImage="/src/assets/image-graphic-design.jpg"
            onProjectClick={() => navigate("/graphic-design")}
            className=" lg:w-full  lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
