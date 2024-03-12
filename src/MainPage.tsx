import React from "react";
import Button from "./components/Button";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-6 pl-6 pr-6 bg-peach relative">
      <div className="text-center">
        <h3 className="text-4xl font-medium mb-4  leading-9 text-white">
          Award-winning custom designs and digital branding solutions
        </h3>
        <p className="text-base font-normal leading-6 text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button
          className="bg-white justify-center my-8 mx-12 font-normal tracking-widest"
          children="LEARN MORE"
        />
      </div>

      <div className="mt-8">
        <img
          src="/src/assets/Group 5.png"
          alt="Frame"
          className="max-w-xs mx-auto"
        />
      </div>
    </div>
  );
};

export default MainPage;
