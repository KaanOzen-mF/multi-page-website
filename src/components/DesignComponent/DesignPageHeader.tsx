import React from "react";

interface DesignPageHeaderProps {
  title: string;
  description: string;
}

const DesignPageHeader: React.FC<DesignPageHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col justify-center p-6 shadow-md h-80 text-center font-jost bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-right-top bg-peach">
      <h2 className="text-3xl text-white font-semibold mb-4">{title}</h2>
      <p className="text-white  leading-6 text-sm">{description}</p>
    </div>
  );
};

export default DesignPageHeader;
