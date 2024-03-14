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
      <DesignPageCard
        img="/src/assets/Transfer.png"
        title="transfer"
        description="Site for low-cost money transfers and sending money within seconds"
      />
      <DesignPageCard
        img="/src/assets/Photon.png"
        title="photon"
        description="A state-of-the-art music player with high-resolution audio and DSP effects"
      />
      <DesignPageCard
        img="/src/assets/Builder.png"
        title="builder"
        description="Connects users with local contractors based on their location"
      />
      <DesignPageCard
        img="/src/assets/Blog.png"
        title="blogr"
        description="Blogr is a platform for creating an online blog or publication"
      />
      <DesignPageCard
        img="/src/assets/Camp.png"
        title="camp"
        description="Get expert training in coding, data, design, and digital marketing"
      />
    </div>
  );
};

export default GraphicDesignPageCardContainer;
