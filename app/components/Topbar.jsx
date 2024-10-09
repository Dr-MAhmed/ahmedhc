import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ModeToggle } from './theme-btn'; // Import the ModeToggle component

const Topbar = () => {
  return (
    <div className="topbar bg-white h-auto w-full border-b border-gray-200 dark:bg-gray-900 p-2 shadow-md">
      <div className="container mx-auto px-2 h-full">
        <div className="flex justify-between items-center h-full flex-wrap">
          {/* Left Section: Navigation Links */}
          <div className="flex items-center ml-6 space-x-2 flex-wrap w-full md:w-1/2">
            <ul className="top-link flex space-x-2 flex-wrap w-full md:w-auto justify-center md:justify-start">
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs md:text-sm">
                <a href="/about">About</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs md:text-sm">
                <a href="/doctors">Doctors</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs md:text-sm">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs md:text-sm">
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Information with Centered Mode Toggle */}
          <div className="flex items-center space-x-1 flex-wrap w-full md:w-auto mt-2 md:mt-0 justify-center md:justify-end">
            <ul className="top-contact flex items-center space-x-1 w-full md:w-auto justify-center md:justify-end">
              <li className="text-blue-500 text-xs md:text-sm flex items-center space-x-1">
                <FontAwesomeIcon icon={faPhone} size="xs" className="h-3 md:h-4" />
                <span className="font-medium text-black dark:text-white text-xs md:text-sm">+92-303-5577-306</span>
              </li>
              {/* Centered Mode Toggle */}
              <li className="flex items-center text-xs md:text-sm text-blue-500">
                <ModeToggle />
              </li>
              <li className="text-blue-500 text-xs md:text-sm flex items-center space-x-1">
                <FontAwesomeIcon icon={faEnvelope} size="xs" className="h-3 md:h-4" />
                <a href="mailto:support@yourmail.com" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs md:text-sm">
                  ahmedhc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
