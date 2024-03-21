import React from "react";
import Button from "../Button";

// The MainPage component is the primary introduction section of the homepage.
const MainPage: React.FC = () => {
  return (
    // Main container for the MainPage content with background styling and layout adjustments for different screen sizes.
    <div
      className="flex flex-col items-center justify-center bg-peach pt-24 px-6 overflow-hidden font-jost bg-cover bg-no-repeat 
      bg-[url('/public/Oval-bg.png')] 
      md:bg-[url('/public/homePage.svg')] md:bg-right md:bg-no-repeat md:bg-contain md:m-6 md:rounded-3xl 
      lg:bg-[url('/public/homePage.svg')] lg:mx-48 lg:flex-row"
    >
      {/* Text content container with responsive padding and width adjustments. */}
      <div className="text-center md:p-6 md:px-16 lg:w-1/2">
        {/* Heading for the MainPage with responsive size adjustments. */}
        <h3
          className="text-4xl font-medium mb-4  leading-9 text-white
          md:text-5xl md:leading-10 md:mb-6"
        >
          Award-winning custom designs and digital branding solutions
        </h3>
        {/* Paragraph describing the services offered with responsive styling. */}
        <p className="text-base font-normal leading-6 text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        {/* Button component for 'Learn More' action with responsive styling. */}
        <Button
          className="bg-white justify-center my-8 mx-12 font-normal tracking-widest
          md:my-12 md:mx-20 md:font-medium md:text-xl"
          children="LEARN MORE"
        />
      </div>

      {/* Container for the main feature image with custom shadow and responsive positioning. */}
      <div className="flex justify-center mt-12 -mb-12 z-0 shadow-custom rounded-full">
        <img src="/public/Group 5.png" alt="Frame" className="max-w-xs" />
      </div>
    </div>
  );
};

export default MainPage;
