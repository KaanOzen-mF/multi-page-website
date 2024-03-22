import React from "react";
import Button from "./Button"; // Import the reusable Button component

// Define the prop types for CountryCards component
interface CountryCardsProps {
  country: string; // The name of the country to display
  image: string; // The filename for the country's image
}

// The CountryCards component displays a card for each country with an image, country name, and a button to see more details.
const CountryCards: React.FC<CountryCardsProps> = ({ country, image }) => {
  return (
    // Container for the country card with center alignment and padding
    <div className="font-jost flex flex-col justify-center items-center mt-32 pb-8">
      {/* Image representing the country */}
      <img
        className="mb-8 w-6/12"
        src={`/static/countryCard/${image}`}
        alt={`${country} image`}
      />
      {/* Country name displayed in uppercase with tracking and leading for better readability */}
      <p className="uppercase tracking-designCardSpacing leading-relaxed text-xl mb-8 md:text-2xl">
        {country}
      </p>

      {/* Reusable Button component for viewing the country's location */}
      <Button
        children="See Location"
        className="bg-peach text-white md:text-xl uppercase"
      />
    </div>
  );
};

export default CountryCards;
