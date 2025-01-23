// @ts-nocheck
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useEffect, useState } from "react";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  useEffect(() => {});
  return (
    <div className="flex justify-between shadow-2xl m-0.5 bg-gray-400">
      <div className="logo-container">
        <img className="w-36" src={logo} />
      </div>
      <div className="nav-items ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            You are {onlineStatus ? "Online ✅" : "Offline 🛑"}
          </li>
          <li className="px-4 cursor-pointer hover:text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 cursor-pointer  hover:text-white">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 cursor-pointer  hover:text-white">Cart</li>
          <li className="cursor-pointer  hover:text-white">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <button
            className="px-5 m-3 bg-amber-100"
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
