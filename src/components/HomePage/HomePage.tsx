import React from "react";
import MainPage from "./MainPage";
import DesignCardContainer from "./DesignCardContainer";
import AboutCardContainer from "./AboutCardContainer";

const HomePage: React.FC = () => {
  return (
    <>
      <MainPage />
      <DesignCardContainer />
      <AboutCardContainer />
    </>
  );
};

export default HomePage;
