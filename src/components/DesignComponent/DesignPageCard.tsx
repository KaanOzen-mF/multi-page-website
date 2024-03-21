import React from "react";

// Define the prop types for the DesignPageCard component
interface DesignPageCardProps {
  img: string; // URL for the image to be displayed in the card
  title: string; // Title of the card
  description: string; // Description text for the card
}

// The DesignPageCard component is used to display a card with an image, title, and description.
const DesignPageCard: React.FC<DesignPageCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    // Container for the card with responsive and aesthetic design tailoring for small to large devices.
    <div
      className="font-jost m-6 sm:rounded-b-xl sm:rounded-t-xl  bg-lightPeachWhite 
      md:rounded-l-xl md:rounded-r-xl md:flex md:items-center md:justify-center
      lg:flex lg:flex-col lg:bg-white lg:w-upperQuarter lg:rounded-xl shadow-md transition duration-300 ease-in-out"
    >
      {/* The image for the card. It takes full width and has responsive rounding applied for different viewports. */}
      <img
        className="sm:rounded-t-xl md:rounded-l-xl lg:rounded-t-xl lg:rounded-b-none w-full md:w-half lg:w-full"
        src={img}
        alt={title}
      />

      {/* The text container with a title and description. Includes hover effects for background and text colors. */}
      <div
        className="group text-center p-6 flex flex-col justify-between sm:rounded-b-xl md:rounded-r-lg 
        lg:w-full lg:rounded-b-xl lg:rounded-t-none transition duration-300 ease-in-out bg-lightPeachWhite hover:bg-peach"
      >
        {/* The title of the card with responsive styling and hover effects. */}
        <h3 className="font-medium tracking-designCardSpacing text-peach uppercase text-xl leading-relaxed transition duration-300 ease-in-out group-hover:text-white">
          {title}
        </h3>
        {/* The description of the card, with hover effect changing text color to white. */}
        <p className="text-black text-base font-normal leading-relaxed transition duration-300 ease-in-out group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DesignPageCard;
