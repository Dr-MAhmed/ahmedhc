import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ModeToggle } from './theme-btn';

const Topbar = () => {
  return (
    <div className="topbar bg-white h-auto w-full border-b border-gray-200 dark:bg-gray-900 p-2">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full flex-wrap">
          {/* Left Section: Navigation Links */}
          <div className="flex items-center space-x-6 flex-wrap w-full md:w-auto">
            <ul className="top-link flex space-x-6 flex-wrap w-full md:w-auto justify-center md:justify-start">
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300">
                <a href="/about">About</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300">
                <a href="/doctors">Doctors</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300">
                <a href="/faq">FAQ</a>
              </li>
              <li className="text-blue-500 text-sm flex items-center space-x-2 md:hidden">
                <ModeToggle />
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-6 flex-wrap w-full md:w-auto mt-4 md:mt-0 justify-center md:justify-end">
            <ul className="top-contact flex space-x-6 flex-wrap items-center w-full md:w-auto justify-center md:justify-end">
              <li className="text-blue-500 text-sm flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} size="sm" className='h-5' />
                <span className="font-medium text-black dark:text-white">+92-303-5577-306</span>
              </li>
              <li className="text-blue-500 text-sm flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} size='sm' className='h-5' />
                <a href="mailto:support@yourmail.com" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300">
                  ahmedhc@gmail.com
                </a>
              </li>
              <li className="text-blue-500 text-sm flex items-center space-x-2 hidden md:flex">
                <ModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
