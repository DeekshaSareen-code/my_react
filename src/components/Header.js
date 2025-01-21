// @ts-nocheck
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useEffect, useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {});
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
