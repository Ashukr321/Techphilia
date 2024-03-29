import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import "./NavStyles.css";
import Marquee from "./Marquee"; // Import Marquee component

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="nav w-full fixed h-16 justify-between align-center flex z-20">
        <div className=" w-full justify-between px-1 mx-auto lg:max-w-7xl md:items-center md:flex md:px-1">
          <div>
            <div className="flex mt-2 md:mt-2 items-center justify-between py-0 md:py-0 md:block">
              <Link to="/home" className="nav_logo">
                TECHPHILIA 7.0
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="blue"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="blue"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={` flex m-5 justify-self-center  rounded-md md:block md:mt-0 ${
                navbar ? "block" : "hidden"
              } ${isMobile ? "md-navbar" : ""}`}
            >
              <ul className="items-center p-4 mt-4 justify-center  md:flex md:space-x-6 md:space-y-0">
                <Link to={"/home"}>
                  <li className="nav_link_li p-2   ">
                    <Link
                      to={"/home"}
                      onClick={() => setNavbar(false)}
                      className=" hover:tracking-wider"
                    >
                      Home
                    </Link>
                  </li>
                </Link>
                <li className="nav_link_li  p-2    ">
                  <Link
                    to={"/events"}
                    onClick={() => setNavbar(false)}
                    className=" hover:tracking-wider"
                  >
                    Event
                  </Link>
                </li>
                <Link to={"/gallery"}>
                  <li className="nav_link_li  p-2   ">
                    <Link
                      to={"/gallery"}
                      onClick={() => setNavbar(false)}
                      className=" hover:tracking-wider"
                    >
                      Gallery
                    </Link>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="nav_link_li  p-2   ">
                    <Link
                      to={"/about"}
                      onClick={() => setNavbar(false)}
                      className=" hover:tracking-wider"
                    >
                      About
                    </Link>
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li className="nav_link_li  p-2  ">
                    <Link
                      to={"/contact"}
                      onClick={() => setNavbar(false)}
                      className=" hover:tracking-wider"
                    >
                      Contact
                    </Link>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <Marquee /> {/* Including Marquee component */}

      </nav>
    </div>
  );
}
