import React from "react";
import AboutCard from "../AboutCardComponent/AboutCard";

const AboutCardContainer: React.FC = () => {
  return (
    <div className="lg:flex lg:flex-row lg:px-40">
      <AboutCard
        title="PASSIONATE"
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        imageSrc="/src/assets/passionate.svg"
      />
      <AboutCard
        title="RESOURCEFUL"
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        imageSrc="/src/assets/resourceful.svg"
      />
      <AboutCard
        title="FRIENDLY"
        description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        imageSrc="/src/assets/friendly.svg"
      />
    </div>
  );
};

export default AboutCardContainer;
