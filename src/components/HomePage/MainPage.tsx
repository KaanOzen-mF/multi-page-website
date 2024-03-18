import React from "react";
import Button from "../Button";

const MainPage: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-peach pt-24 px-6 overflow-hidden font-jost bg-cover bg-no-repeat 
      bg-[url('/src/assets/Oval-bg.png')] 
      md:bg-[url('/src/assets/tablet/homePage.svg')] md:bg-right md:bg-no-repeat md:bg-contain md:m-6 md:rounded-3xl 
      lg:bg-[url('/src/assets/desktop/homePAge.svg')]"
    >
      <div className="text-center md:p-6 md:px-16">
        <h3
          className="text-4xl font-medium mb-4  leading-9 text-white
          md:text-5xl md:leading-10 md:mb-6"
        >
          Award-winning custom designs and digital branding solutions
        </h3>
        <p className="text-base font-normal leading-6 text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button
          className="bg-white justify-center my-8 mx-12 font-normal tracking-widest
          md:my-12 md:mx-20 md:font-medium md:text-xl
          "
          children="LEARN MORE"
        />
      </div>

      <div className="flex justify-center mt-12 -mb-12 z-0 shadow-custom rounded-full">
        <img src="/src/assets/Group 5.png" alt="Frame" className="max-w-xs" />
      </div>
    </div>
  );
};

export default MainPage;
