import React from "react";
import Button from "./Button";

interface CountryCardsProps {
  country: string;
  image: string;
}

const CountryCards: React.FC<CountryCardsProps> = ({ country, image }) => {
  return (
    <div className="font-jost flex flex-col justify-center items-center mt-32 pb-8">
      <img className="mb-8" src={`/src/assets/${image}`} alt="" />
      <p className="uppercase tracking-designCardSpacing leading-relaxed text-xl mb-8">
        {country}
      </p>
      <Button children="See Location" className="bg-peach text-white " />
    </div>
  );
};

export default CountryCards;
