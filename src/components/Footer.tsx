import React from "react";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-black font-jost text-white px-6 py-12 mt-48 lg:pl-40 lg:pr-24">
      <div
        className="flex flex-col items-center justify-center p-12 md:p-12 rounded-xl bg-peach  max-w-lg md:max-w-full w-full text-center -mt-48 mb-6 
      md:bg-[url('/public/bg/bg-pattern-design-pages-intro-tablet.svg')] md:bg-right lg:w-mapWidth lg:flex-row lg:justify-between"
      >
        <div className="lg:flex lg:flex-col lg:text-start">
          <h3 className="text-4xl font-medium leading-tight mb-6">
            Let’s talk about
            <br />
            your project
          </h3>
          <p className="mb-6">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <Button
          children="GET IN TOUCH"
          className="bg-white text-black font-medium py-2 px-4 rounded-md shadow-lg"
        />
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between w-full md:items-center lg:justify-between lg:w-mapWidth">
        <div className="mt-8 mb-6">
          <div className="flex items-center space-x-2">
            <img src="/public/logo/Oval.png" alt="" className="w-8 h-8" />
            <p className="text-2xl font-bold tracking-widest">DESIGNO</p>
          </div>
        </div>

        <div className="w-full bg-white bg-opacity-10 h-px my-8 md:hidden" />

        <ul className="flex flex-col md:flex-row items-center mb-12 md:mb-0 ">
          <li className="mb-4 md:mb-0">
            <Link to="/our-company">OUR COMPANY</Link>
          </li>
          <li className="mb-4 md:mb-0 md:ml-12">
            <Link to="/locations">LOCATIONS</Link>
          </li>
          <li className="mb-4 md:mb-0 md:ml-12">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex w-full bg-white bg-opacity-10 h-1 my-8 " />

      <div className="md:flex md:flex-row md:w-full md:justify-between lg:w-mapWidth lg:justify-between">
        <div className="flex flex-col md:flex-row items-center mt-6 text-center">
          <div className="md:mr-24 lg:mr-96  md:text-start">
            <p className="font-bold mb-2">Designo Central Office</p>
            <p className="mb-1">3886 Wellington Street</p>
            <p className="mb-4">Toronto, Ontario M9C 3J5</p>
          </div>
          <div className=" md:text-start">
            <p className="font-bold mb-2">Contact Us (Central Office)</p>
            <p className="mb-1">P : +1 253-863-8967</p>
            <p className="mb-4">M : contact@designo.co</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-6 mt-6 md:self-end">
          <FaFacebookSquare className="text-peach" />
          <FaYoutube className="text-peach" />
          <FaTwitter className="text-peach" />
          <FaPinterest className="text-peach" />
          <FaInstagram className="text-peach" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
