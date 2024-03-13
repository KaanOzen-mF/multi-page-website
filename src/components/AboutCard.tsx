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
    <div className="flex flex-col justify-center items-center h-64 font-jost p-6 mt-48 mb-48">
      <img className="mb-8" src={imageSrc} alt={title} />
      <h3 className="text-xl font-medium tracking-designCardSpacing  mb-12">
        {title}
      </h3>
      <p className="text-center font-normal leading-relaxed">{description}</p>
    </div>
  );
};

export default AboutCard;
