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
    <div className="font-jost m-6 sm:rounded-b-xl sm:rounded-t-xl md:rounded-l-xl md:rounded-r-xl  md:flex md:items-center md:justify-center bg-lightPeachWhite">
      <img
        className="sm:rounded-t-xl md:rounded-l-xl shadow-md w-full md:w-1/2"
        src={img}
        alt={title}
      />
      <div className="bg-lightPeachWhite sm:rounded-b-xl md:rounded-r-lg shadow-md text-center">
        <h3 className="font-medium tracking-designCardSpacing text-peach uppercase text-xl leading-relaxed">
          {title}
        </h3>
        <p className="text-black text-base font-normal leading-relaxed px-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DesignPageCard;
