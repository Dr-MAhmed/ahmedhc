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
          <div className="flex items-center space-x-2 flex-wrap w-full md:w-auto">
            <ul className="top-link flex space-x-2 flex-wrap w-full md:w-auto justify-center md:justify-start">
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs">
                <a href="/about">About</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs">
                <a href="/doctors">Doctors</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs">
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Information with Centered Mode Toggle */}
          <div className="flex items-center space-x-1 flex-wrap w-full md:w-auto mt-2 md:mt-0 justify-center md:justify-end">
            <ul className="top-contact flex items-center space-x-1 w-full md:w-auto justify-center md:justify-end">
              <li className="text-blue-500 text-xs flex items-center space-x-1">
                <FontAwesomeIcon icon={faPhone} size="xs" className='h-3' />
                <span className="font-medium text-black dark:text-white text-xs">+92-303-5577-306</span>
              </li>
              {/* Centered Mode Toggle */}
              <li className="flex items-center text-sm text-blue-500">
                <ModeToggle />
              </li>
              <li className="text-blue-500 text-xs flex items-center space-x-1">
                <FontAwesomeIcon icon={faEnvelope} size='xs' className='h-3' />
                <a href="mailto:support@yourmail.com" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 text-xs">
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
