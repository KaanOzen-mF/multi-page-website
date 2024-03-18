import React from "react";

interface AboutCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-64 font-jost p-6 mt-48 mb-48 md:mb-9  md:mt-9">
      <img className="mb-8" src={imageSrc} alt={title} />
      <div className="flex flex-col items-center md:items-start md:ml-8">
        <h3 className="text-xl font-medium tracking-designCardSpacing  mb-12 md:mb-4">
          {title}
        </h3>
        <p className="text-center font-normal leading-relaxed mb-48 md:mb-0 md:text-start">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
