import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-screen bg-white shadow-md z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-14 h-14 sm:w-12 sm:h-12 md:w-16 md:h-16" />
        </Link>

        <ul className="hidden md:flex gap-5 items-center ml-auto">
          <li>
            <Link to="/" className="no-underline text-lg text-blue-400 hover:text-xl">Home</Link>
          </li>
          <li>
            <Link to="/Mainabout" className="no-underline text-lg text-gray-700">About</Link>
          </li>
          <li>
            <Link to="/sermon" className="no-underline text-lg text-gray-700">Sermon</Link>
          </li>
          <li>
            <Link to="/contact" className="no-underline text-lg text-gray-700">Contact</Link>
          </li>
          <button
            type="button"
            className="py-1 px-3 bg-blue-400 text-white rounded-md hover:bg-gray-800"
            onClick={() => navigate("/donate")}
          >
            Donate
          </button>
        </ul>

        <button className="md:hidden text-xl text-gray-700 focus:outline-none" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>

      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>}

      <div className={`fixed top-0 left-0 h-full w-60 max-w-[100vw] bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 overflow-x-hidden`}>
        <div className="p-5">
          <button className="text-xl text-gray-700 mb-4" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>

          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="text-lg no-underline text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/Mainabout" className="text-lg no-underline text-gray-700" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/sermon" className="text-lg no-underline text-gray-700" onClick={() => setMenuOpen(false)}>Sermon</Link>
            </li>
            <button type="button" className="py-2 px-4 bg-blue-400 text-white rounded-md hover:bg-gray-800" onClick={() => { setMenuOpen(false); navigate("/donate"); }}>
              Donate
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
