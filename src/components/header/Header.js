import React from "react";
import Logo from "../../assets/images/altschool-logo-3.png";

export const Header = ({ title }) => {
  return (
    <header className="text-secondary text-xl text-center mt-4">
      <img src={Logo} alt="" />
      <h2>{title}</h2>
    </header>
  );
};
