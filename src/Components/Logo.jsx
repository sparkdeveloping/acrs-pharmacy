import React from "react";
import logo from "../logo.svg";

function Logo() {
  return (
    <div className="horizontal-box">
      <img src={logo} alt="Logo" />
      <h2 className="pharmacy-text">Pharmacy</h2>
    </div>
  );
}

export default Logo;
