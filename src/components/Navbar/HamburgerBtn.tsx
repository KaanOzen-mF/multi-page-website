import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HamburgerBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={node} className="relative">
      <button
        onClick={handleClick}
        className="focus:outline-none sm:flex md:hidden"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out h-hamburgerBtnH w-hamburgerBtnW rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
          h-hamburgerBtnH w-hamburgerBtnW rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
          h-hamburgerBtnH w-hamburgerBtnW rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-1000 top-12">
          <div className="bg-black text-white p-5 ">
            <nav className="text-2xl font-jost font-normal">
              <ul>
                <li className="mb-8">
                  <Link to="/our-company">OUR COMPANY</Link>
                </li>
                <li className="mb-8">
                  <Link to="/locations">LOCATIONS</Link>
                </li>
                <li className="">
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <nav className="hidden sm:hidden md:flex">
        <ul className="md:flex md:flex-row items-center justify-around">
          <li className="mb-8 md:mb-0">
            <Link to="/our-company">OUR COMPANY</Link>
          </li>
          <li className="mb-8 md:mb-0 md:ml-8">
            <Link to="/locations">LOCATIONS</Link>
          </li>
          <li className="md:ml-8">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerBtn;
