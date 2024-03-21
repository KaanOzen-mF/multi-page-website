import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// The HamburgerBtn component is used to toggle a mobile navigation menu.
const HamburgerBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open
  const node = useRef<HTMLDivElement>(null); // Ref for the component's root node to detect clicks outside

  // Function to toggle the menu open state
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu if clicked outside of the component
  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  // Effect hook to add/remove event listener for detecting clicks outside the component
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Cleanup function to remove event listener on component unmount or before re-running the effect
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Dependency array to re-run the effect when 'isOpen' state changes

  return (
    <div ref={node} className="relative">
      {/* Hamburger button that toggles the menu open state */}
      <button
        onClick={handleClick}
        className="focus:outline-none sm:flex md:hidden"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        {/* Animated bars of the hamburger icon that change layout when the menu is open */}
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

      {/* Dropdown menu that appears when the hamburger button is clicked (menu is open) */}
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

      {/* Full-size navigation menu for larger screens; hidden on smaller screens */}
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
