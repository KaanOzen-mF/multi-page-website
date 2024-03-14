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
    <div className="font-jost p-6">
      <img className="rounded-t-xl shadow-md" src={img} alt={title} />
      <div className="bg-lightPeach rounded-b-xl shadow-md p-6 text-center">
        <h3 className="font-medium tracking-designCardSpacing text-peach uppercase text-xl leading-relaxed">
          {title}
        </h3>
        <p className="text-black text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DesignPageCard;
