import React from "react";
import MainPage from "./MainPage";
import DesignCardContainer from "./DesignCardContainer";
import AboutCardContainer from "./AboutCardContainer";

// The HomePage component serves as the entry point for the website's home page.
// It aggregates the main components that make up the home page's content.
const HomePage: React.FC = () => {
  return (
    // Fragment to group multiple components without adding extra nodes to the DOM.
    <>
      {/* MainPage component typically includes the hero section or primary content at the top of the home page. */}
      <MainPage />

      {/* DesignCardContainer holds a collection of DesignCard components, showcasing different design services or projects. */}
      <DesignCardContainer />

      {/* AboutCardContainer groups AboutCard components that detail the company's values, mission, or team. */}
      <AboutCardContainer />
    </>
  );
};

export default HomePage;
