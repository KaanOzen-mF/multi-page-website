import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onCLick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`font-jost rounded-md px-4 py-3 hover:bg-lightPeach hover:text-white ${className}`}
      onClick={() => console.log("Button clicked")}
    >
      {children}
    </button>
  );
};

export default Button;
