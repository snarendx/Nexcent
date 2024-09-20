import React from "react";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <img src="NexcentWhite.svg" alt="Logo" className="h-10 mb-4" />
          <p className="text-sm">
            &copy; 2020 Nexcent ltd. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="h-5 w-5 hover:text-gray-300" />
            <FaDribbble className="h-5 w-5 hover:text-gray-300" />
            <FaTwitter className="h-5 w-5 hover:text-gray-300" />
            <FaYoutube className="h-5 w-5 hover:text-gray-300" />
          </div>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h4 className="text-white font-semibold mb-4 text-lg">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h4 className="text-white font-semibold mb-4 text-lg">Stay up to date</h4>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-gray-700 text-gray-300 p-2 rounded-md mb-2 sm:mb-0 sm:rounded-l-md sm:mr-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-gray-700 text-gray-300 p-2 rounded-md sm:rounded-r-md hover:bg-gray-500"
            >
              <PiTelegramLogoBold className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
