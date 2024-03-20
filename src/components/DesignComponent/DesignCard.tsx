import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface DesignCardProps {
  title: string;
  backgroundImage: string;
  onProjectClick: () => void;
  className?: string;
}

const DesignCard: React.FC<DesignCardProps> = ({
  title,
  backgroundImage,
  onProjectClick,
  className,
}) => {
  return (
    <div
      className={`group relative m-6 rounded-lg shadow-lg h-64 overflow-hidden font-jost md:mb-16 md:py-12 ${className} hover:bg-peach flex justify-center items-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity group-hover:bg-peach"></div>
      </div>

      <div className="relative p-4 flex flex-col items-center justify-center h-full z-10">
        <p className="text-2xl md:text-4xl font-bold md:font-medium tracking-designCardSpacing text-white ">
          {title}
        </p>
        <button
          className="mt-4 flex items-center text-white text-l md:text-xl md:tracking-designCardSpacing font-medium uppercase focus:outline-none"
          onClick={onProjectClick}
        >
          VIEW PROJECT
          <MdKeyboardArrowRight className="text-peach text-lg ml-2 md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default DesignCard;
