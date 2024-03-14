import React from "react";
import { useNavigate } from "react-router";

const NavbarLogo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div
        className="flex"
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="pr-2 w-full" src="/src/assets/Oval.png" alt="" />
        <p className="font-jost font-bold text-2xl tracking-widest">DESIGNO</p>
      </div>
    </div>
  );
};

export default NavbarLogo;
