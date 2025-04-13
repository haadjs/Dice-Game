import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_-removebg-preview.png";

const Navbar = () => {
  return (
    <div className="bg-red-800 shadow-md text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Dice Logo" className="w-20" />
        </Link>

        {/* Menu Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link
                to="/"
                className="text-red-700 font-semibold hover:text-red-900 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rules"
                className="text-red-700 font-semibold hover:text-red-900 transition"
              >
                Rules & Instructions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
