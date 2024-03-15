import React from "react";
import CountryCards from "../CountryCards";
import ContactForm from "./ContactForm";

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactForm />
      <CountryCards country="canada" image="canada.svg" />
      <CountryCards country="australia" image="australia.svg" />
      <CountryCards country="united Kingdom" image="unitedKingdom.svg" />
    </>
  );
};

export default ContactPage;
