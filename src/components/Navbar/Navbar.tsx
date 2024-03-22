import React from "react";
import HamburgerBtn from "./HamburgerBtn"; // Import the HamburgerBtn component for mobile navigation
import NavbarLogo from "./NavbarLogo"; // Import the NavbarLogo component to display the logo

// The Navbar component serves as the navigation bar for the application.
const Navbar: React.FC = () => {
  return (
    // Main container for the navbar, styled to be flexible and responsive
    <nav className="flex flex-row justify-between items-center h-24 bg-orange-50 p-2 md:px-6 lg:px-48 lg:pt-12">
      <NavbarLogo /> {/* Logo section of the navbar */}
      <HamburgerBtn />
      {/* Hamburger button for mobile navigation, toggles the navigation menu */}
    </nav>
  );
};

export default Navbar;
