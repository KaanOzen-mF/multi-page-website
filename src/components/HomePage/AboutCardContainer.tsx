import React from "react";
import AboutCard from "../AboutCardComponent/AboutCard";

// The AboutCardContainer component serves as a container for AboutCard components.
// It groups multiple AboutCard components to display various aspects of the company's ethos or values.
const AboutCardContainer: React.FC = () => {
  return (
    // Container for the about cards with flex layout for horizontal alignment on larger screens
    <div className="lg:flex lg:flex-row lg:px-40">
      {/* AboutCard component for "PASSIONATE". It outlines the company's dedication to in-depth brand research and merging art, design, and technology. */}
      <AboutCard
        title="PASSIONATE"
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        imageSrc="/aboutCard/passionate.svg" // Path to the image that visually represents passion
      />

      {/* AboutCard component for "RESOURCEFUL". It highlights the strategic purpose behind every project and the agile approach for superior results. */}
      <AboutCard
        title="RESOURCEFUL"
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        imageSrc="/aboutCard/resourceful.svg" // Path to the image that visually represents resourcefulness
      />

      {/* AboutCard component for "FRIENDLY". It emphasizes the company's focus on customer satisfaction and providing the best possible experience. */}
      <AboutCard
        title="FRIENDLY"
        description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        imageSrc="/aboutCard/friendly.svg" // Path to the image that visually represents friendliness
      />
    </div>
  );
};

export default AboutCardContainer;
