import React from "react";
import DesignPageCard from "../DesignComponent/DesignPageCard";

const AppDesignPageCardContainer: React.FC = () => {
  return (
    <>
      <DesignPageCard
        img="/src/assets/appDesign/image-airfilter.jpg"
        title="airfilter"
        description="Solving the problem of poor indoor air quality by filtering the air"
      />
      <DesignPageCard
        img="/src/assets/appDesign/image-eyecam.jpg"
        title="eyecam"
        description="Product that lets you edit your favorite photos and videos at any time"
      />
      <DesignPageCard
        img="/src/assets/appDesign/image-faceit.jpg"
        title="faceit"
        description="Get to meet your favorite internet superstar with the faceit app"
      />
      <DesignPageCard
        img="/src/assets/appDesign/image-todo.jpg"
        title="todo"
        description="A todo app that features cloud sync with light and dark mode"
      />
      <DesignPageCard
        img="/src/assets/appDesign/image-loopstudios.jpg"
        title="loopstudios"
        description="A VR experience app made for Loopstudios"
      />
    </>
  );
};

export default AppDesignPageCardContainer;
