import React from "react";

// Define the prop types for the Button component
interface ButtonProps {
  children: React.ReactNode; // Content inside the button, can be text or other React elements
  className?: string; // Optional className for additional styling from the parent component
  onClick?: () => void; // Optional onClick handler for button click events
}

// The Button component is a reusable UI element that can display text or icons and trigger actions on click.
const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    // The button element with dynamic classes and an onClick event
    <button
      className={`font-jost rounded-md px-4 py-3 hover:bg-lightPeach hover:text-white ${className}`} // Apply default and additional classes
      onClick={onClick || (() => console.log("Button clicked"))} // Use the provided onClick handler or log a message if none is provided
    >
      {children} {/*Render the children inside the button */}
    </button>
  );
};

export default Button;
