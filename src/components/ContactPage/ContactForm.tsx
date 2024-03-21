import React, { useState } from "react";
import Button from "../Button";

// The ContactForm component manages the state of form inputs and handles their submission.
const ContactForm: React.FC = () => {
  // State to store the values of the form inputs.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Function to update the state when a form input changes.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle the form submission.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementation for what happens on form submit goes here (e.g., sending data to an API).
  };

  return (
    // Container for the contact form section.
    <div
      className="bg-peach bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-center font-jost flex flex-col items-center justify-center px-6 pt-12
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
          className="w-full bg-transparent border-b border-white placeholder-white px-3 py-5 focus:border-b-2 focus:border-white focus:outline-none focus:font-medium"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full bg-transparent border-b border-white px-3 py-5  placeholder-white focus:border-b-2 focus:border-white focus:outline-none focus:font-medium"
        />
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
        <Button
          children={"Submit"} // Text displayed on the button
          className="bg-white md:w-1/4 md:self-end mt-6 text-black" // Styling applied to the button
        />
      </form>
    </div>
  );
};

export default ContactForm;
