import React, { useState } from "react";
import Button from "../Button";
import { FaExclamationCircle } from "react-icons/fa";

// The ContactForm component manages the state of form inputs and handles their submission.
const ContactForm: React.FC = () => {
  // State to store the values of the form inputs.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  //State to store the form errors
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let errors = { name: "", email: "", message: "" };
    let formIsValid = true;

    // İsim alanı boş mu kontrol edin
    if (!formData.name.trim()) {
      errors.name = "Can't be empty";
      formIsValid = false;
    }

    // E-posta adresi geçerli mi kontrol edin
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please use a valid email address";
      formIsValid = false;
    }

    // Mesaj alanı boş mu kontrol edin
    if (!formData.message.trim()) {
      errors.message = "Can't be empty";
      formIsValid = false;
    }

    setFormErrors(errors);
    return formIsValid;
  };

  // Function to update the state when a form input changes.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  // Function to handle the form submission.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Eğer form geçerliyse, form gönderme işlemini burada yapın
      console.log("Form is valid and can be submitted");
    }
  };

  return (
    // Container for the contact form section.
    <div
      className="bg-peach bg-[url('/static/bg/bg-pattern-design-pages-intro-mobile.svg')] bg-center font-jost flex flex-col items-center justify-center px-6 pt-12
      md:mx-6 mt-8 md:rounded-2xl w-full lg:mx-48 lg:flex-row lg:py-0"
    >
      {/* Title and introduction for the contact section */}
      <div>
        <h1 className="font-medium text-2xl text-white leading-9 md:text-5xl text-center md:self-start">
          Contact Us
        </h1>
        <p className="text-white font-normal leading-7 text-center mt-4 md:leading-relaxed md:text-start">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      {/* The form element with its submit handler */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-8 mb-10 text-white w-mapWidth"
      >
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full bg-transparent border-b border-white placeholder-white px-3 py-5 focus:border-b-2 focus:border-white 
          focus:outline-none focus:font-medium relative block"
        />

        {formErrors.name && (
          <div className="absolute flex items-center text-center text-lightPeachWhite right-formNotfication top-nameTop italic text-sm md:text-l md:top-nameTopMd lg:top-nameTopLg lg:right-formNotficationLg">
            <FaExclamationCircle />
            <span className="ml-1">{formErrors.name}</span>
          </div>
        )}

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full bg-transparent border-b border-white px-3 py-5  placeholder-white focus:border-b-2 focus:border-white focus:outline-none focus:font-medium"
        />
        {formErrors.email && (
          <div className="absolute flex items-center text-center text-lightPeachWhite right-formNotfication top-emailTop italic text-sm md:text-l md:top-emailTopMd lg:top-emailTopLg lg:right-formNotficationLg">
            <FaExclamationCircle />
            <span className="ml-1">{formErrors.email}</span>
          </div>
        )}
        <input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full bg-transparent border-b border-white px-3 py-5  placeholder-white focus:border-b-2 focus:border-white focus:outline-none focus:font-medium"
        />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full bg-transparent border-b border-white px-3 py-5  placeholder-white focus:border-b-2 focus:border-white focus:outline-none focus:font-medium"
        />
        {formErrors.message && (
          <div className="absolute flex items-center text-center text-lightPeachWhite italic right-formNotfication top-messeageTop text-sm md:text-l md:top-messageTopMd lg:top-messageTopLg lg:right-formNotficationLg">
            <FaExclamationCircle />
            <span className="ml-1">{formErrors.message}</span>
          </div>
        )}
        <Button
          children={"Submit"} // Text displayed on the button
          className="bg-white md:w-1/4 md:self-end mt-6 text-black" // Styling applied to the button
        />
      </form>
    </div>
  );
};

export default ContactForm;
