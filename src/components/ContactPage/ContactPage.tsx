import React from "react";
import CountryCards from "../CountryCards";
import ContactForm from "./ContactForm";

// The ContactPage component serves as the main container for the contact section of the website.
const ContactPage: React.FC = () => {
  return (
    <>
      {/* ContactForm component is embedded to provide users with a form to submit their inquiries. */}
      <ContactForm />

      {/* Container for country cards displaying office locations. It adjusts layout based on screen size. */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-96">
        {/* CountryCards component instances for each location. Each card is passed a country name and an image filename as props. */}
        <CountryCards country="canada" image="canada.svg" />
        <CountryCards country="australia" image="australia.svg" />
        <CountryCards country="united Kingdom" image="unitedKingdom.svg" />
      </div>
    </>
  );
};

export default ContactPage;
