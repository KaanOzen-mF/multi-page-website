import React from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavbarLogo from "./NavbarLogo";

const Navbar: React.FC = () => {
  return (
    <div className="flex bg-orange-50 pl-2 pt-2">
      <NavbarLogo />
      <HamburgerBtn />
    </div>
  );
};

export default Navbar;
