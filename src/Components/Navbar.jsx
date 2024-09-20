import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black/5">
      <nav className="container mx-auto flex justify-between items-center p-8 pl-20 md:pl-0">
        <img src="Nexcent.svg" alt="Illustration" className="md:ml-4" />
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-4 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-20 md:top-auto p-4 md:p-0 text-center`}
        >
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/service" onClick={toggleMenu}>Service</Link>
          </li>
          <li>
            <Link to="/feature" onClick={toggleMenu}>Feature</Link>
          </li>
          <li>
            <Link to="/product" onClick={toggleMenu}>Product</Link>
          </li>
          <li>
            <Link to="/testimonial" onClick={toggleMenu}>Testimonial</Link>
          </li>
          <li>
            <Link to="/faq" onClick={toggleMenu}>FAQ</Link>
          </li>
        </ul>
        <div className="space-x-2 hidden md:block">
          <button className="text-green-600">Login</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
