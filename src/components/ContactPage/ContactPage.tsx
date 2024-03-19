import React from "react";
import CountryCards from "../CountryCards";
import ContactForm from "./ContactForm";

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactForm />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-96">
        <CountryCards country="canada" image="canada.svg" />
        <CountryCards country="australia" image="australia.svg" />
        <CountryCards country="united Kingdom" image="unitedKingdom.svg" />
      </div>
    </>
  );
};

export default ContactPage;
