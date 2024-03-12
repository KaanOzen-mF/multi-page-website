import React from "react";

const NavbarLogo: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex">
        <img className="pr-2 w-full" src="/src/assets/Oval.png" alt="" />
        <p className="font-jost font-bold text-2xl tracking-widest">DESIGNO</p>
      </div>
    </div>
  );
};

export default NavbarLogo;
