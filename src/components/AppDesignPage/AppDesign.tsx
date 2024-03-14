import React from "react";
import DesignPageHeader from "../DesignComponent/DesignPageHeader";
import AppDesignPageCardContainer from "./AppDesignPageCardContainer";

const AppDesign: React.FC = () => {
  return (
    <>
      <DesignPageHeader
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <AppDesignPageCardContainer />
    </>
  );
};

export default AppDesign;
