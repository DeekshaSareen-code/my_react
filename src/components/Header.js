// @ts-nocheck
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useEffect, useState, useContext } from "react";
import React from "react";
import UserContext from "../utils/userContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

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
          <li className="px-4 cursor-pointer  hover:text-white bold">
            <Link to={"/cart"}>Cart( {cartItems.length})</Link>
          </li>
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
          <li className="px-4 bold text-black">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
