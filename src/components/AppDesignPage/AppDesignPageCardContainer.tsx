import React from "react";
import DesignPageCard from "../DesignComponent/DesignPageCard";

// AppDesignPageCardContainer groups the card components that showcase different app design projects.
const AppDesignPageCardContainer: React.FC = () => {
  return (
    // The container applies a grid layout on larger screens to display cards in a 3-column format.
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mx-40">
      {/* Individual DesignPageCard for the 'airfilter' project. */}
      <DesignPageCard
        img="/public/appDesign/image-airfilter.jpg" // The image URL for the card background.
        title="airfilter" // The title of the project.
        description="Solving the problem of poor indoor air quality by filtering the air" // Short description of the project.
      />

      {/* Individual DesignPageCard for the 'eyecam' project. */}
      <DesignPageCard
        img="/public/appDesign/image-eyecam.jpg"
        title="eyecam"
        description="Product that lets you edit your favorite photos and videos at any time"
      />

      {/* Individual DesignPageCard for the 'faceit' project. */}
      <DesignPageCard
        img="/public/appDesign/image-faceit.jpg"
        title="faceit"
        description="Get to meet your favorite internet superstar with the faceit app"
      />

      {/* Individual DesignPageCard for the 'todo' project. */}
      <DesignPageCard
        img="/public/appDesign/image-todo.jpg"
        title="todo"
        description="A todo app that features cloud sync with light and dark mode"
      />

      {/* Individual DesignPageCard for the 'loopstudios' project. */}
      <DesignPageCard
        img="/public/appDesign/image-loopstudios.jpg"
        title="loopstudios"
        description="A todo app that features cloud sync with light and dark mode"
      />
    </div>
  );
};

export default AppDesignPageCardContainer;
