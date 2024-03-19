import React from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavbarLogo from "./NavbarLogo";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between items-center h-24 bg-orange-50 p-2 md:px-6 lg:px-48 lg:pt-12">
      <NavbarLogo />
      <HamburgerBtn />
    </nav>
  );
};

export default Navbar;
