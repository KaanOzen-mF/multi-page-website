import React from "react";

interface DesignPageCardProps {
  img: string;
  title: string;
  description: string;
}

const DesignPageCard: React.FC<DesignPageCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div
      className="font-jost m-6 sm:rounded-b-xl sm:rounded-t-xl 
    md:rounded-l-xl md:rounded-r-xl md:flex md:items-center md:justify-center 
    bg-lightPeachWhite 
    lg:flex lg:flex-col lg:bg-white lg:w-upperQuarter lg:rounded-xl shadow-md transition duration-300 ease-in-out"
    >
      <img
        className="sm:rounded-t-xl md:rounded-l-xl lg:rounded-t-xl rounded-b-none w-full md:w-1/2 lg:w-full"
        src={img}
        alt={title}
      />

      <div
        className="group text-center p-6 flex flex-col justify-between sm:rounded-b-xl md:rounded-r-lg 
      lg:w-full lg:rounded-b-xl transition duration-300 ease-in-out bg-lightPeachWhite hover:bg-peach"
      >
        <h3 className="font-medium tracking-designCardSpacing text-peach uppercase text-xl leading-relaxed transition duration-300 ease-in-out group-hover:text-white">
          {title}
        </h3>
        <p className="text-black text-base font-normal leading-relaxed transition duration-300 ease-in-out group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DesignPageCard;
