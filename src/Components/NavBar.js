import React from "react";
import logo from "../assets/logo/shop-logo-good-600w-1290022027.webp";
import cart from "../assets/logo/icons8-fast-cart-24.png";
import search from "../assets/logo/icons8-find-67.png";
import home from "../assets/logo/icons8-home-24.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-[#2874F0] p-3">
        <div>
          <img className="w-[50px]" src={logo} alt="logo" />
        </div>
        <div className="hidden sm:block sm:flex sm:bg-[#ffffff]">
          <input
            className="outline-none py-3 pl-3 pr-10"
            type="text"
            placeholder="Enter name"
          />
          <img className="w-[40px] m-2" src={search} alt="search icon" />
        </div>
        <div className="flex justify-center items-center">
          <Link to="/home">
            <img className="hover:w-[30px] mr-10" src={home} alt="home icon" />
          </Link>
          <Link to="/cart">
            <img className="hover:w-[30px]" src={cart} alt="cart logo" />
          </Link>
        </div>
      </nav>
      <div className="flex justify-between items-center bg-[#CAD5E2] text-[#03203C] py-4 px-3">
        <button className="font-bold text-md">Mobile</button>
        <button className="font-bold text-md">Fashion</button>
        <button className="font-bold text-md">Electronics</button>
        <button className="font-bold text-md">Furniture</button>
        <button className="font-bold text-md">Appliances</button>
        <button className="font-bold text-md">Toys</button>
      </div>
    </>
  );
};

export default NavBar;
