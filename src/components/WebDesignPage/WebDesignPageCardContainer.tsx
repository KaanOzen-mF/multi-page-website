import React from "react";
import DesignPageCard from "../DesignComponent/DesignPageCard";

// The WebDesignPageCardContainer component serves as a container for multiple DesignPageCard components related to web design projects.
const WebDesignPageCardContainer: React.FC = () => {
  return (
    // Container that applies a grid layout on larger screens to display the design cards in a more structured manner.
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mx-40">
      {/* DesignPageCard for the 'Exspress' project */}
      <DesignPageCard
        img="/public/webDesignPageCard/Express.png" // Image source for the card background
        title="Exspress" // Title of the project
        description="A multi-carrier shipping website for ecommerce businesses" // Short description of the project
      />

      {/* DesignPageCard for the 'Transfer' project */}
      <DesignPageCard
        img="/public/webDesignPageCard/Transfer.png" // Image source for the card background
        title="transfer" // Title of the project
        description="Site for low-cost money transfers and sending money within seconds" // Short description of the project
      />

      {/* DesignPageCard for the 'Photon' project */}
      <DesignPageCard
        img="/public/webDesignPageCard/Photon.png" // Image source for the card background
        title="photon" // Title of the project
        description="A state-of-the-art music player with high-resolution audio and DSP effects" // Short description of the project
      />

      {/* Additional DesignPageCards for other projects ('Builder', 'Blogr', 'Camp') follow the same pattern */}
    </div>
  );
};

export default WebDesignPageCardContainer;
