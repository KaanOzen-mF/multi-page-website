import React from "react";

// Interface for the component's props
interface DesignPageHeaderProps {
  title: string; // The title to be displayed in the header
  description: string; // The description text that accompanies the title
}

// The DesignPageHeader component displays a header section with a title and a description.
// It's typically used at the top of design-related pages.
const DesignPageHeader: React.FC<DesignPageHeaderProps> = ({
  title,
  description,
}) => {
  return (
    // The main container for the header with responsive background images and styling
    <div
      className="flex flex-col justify-center p-6 shadow-md h-80 text-center font-jost bg-[url('/public/bg/bg-pattern-design-pages-intro-mobile.svg')] bg-right-top bg-peach
      md:bg-[url('/public/bg/bg-pattern-design-pages-intro-tablet.svg')] md:bg-right-top md:p-24
      lg:mx-48 lg:mt-6 lg:rounded-2xl lg:mb-24"
    >
      {/* The title of the header, responsive with different font sizes for different screen sizes */}
      <h2 className="text-3xl md:text-5xl text-white font-medium leading-10 mb-4">
        {title}
      </h2>
      {/* The description text, with responsive padding and font styling for readability across devices */}
      <p className="text-white leading-6 text-sm md:font-normal md:px-32">
        {description}
      </p>
    </div>
  );
};

export default DesignPageHeader;
