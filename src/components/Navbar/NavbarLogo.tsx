import React from "react";
import { useNavigate } from "react-router";

// The NavbarLogo component displays the logo and allows navigation to the home page when clicked.
const NavbarLogo: React.FC = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  return (
    // Container for the logo, styled as clickable
    <div className="flex cursor-pointer">
      {/* Clickable area to trigger navigation to the home page */}
      <div
        className="flex"
        onClick={() => {
          navigate("/"); // Navigate to the root route ("/") when the logo is clicked
        }}
      >
        {/* Logo image */}
        <img
          className="pr-2 w-full"
          src="/src/assets/Oval.png"
          alt="Designo Logo"
        />
        {/* Text part of the logo */}
        <p className="font-jost font-bold text-2xl tracking-widest">DESIGNO</p>
      </div>
    </div>
  );
};

export default NavbarLogo;
