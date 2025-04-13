import React from "react";
import { Link } from "react-router";
import logo from '../assets/logo_-removebg-preview.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-red-800 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="text-red-500 font-bold">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-red-500 font-bold">
                <Link to={"rules"}>Rules-Instruction</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-center ml-4">
            <img
              src={logo}
              alt=""
              width={90}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
