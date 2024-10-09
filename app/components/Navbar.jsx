"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from "./Dropdown";
import { ModeToggle } from './theme-btn';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <nav
        className={`bg-white h-20 w-full border-b border-gray-200 dark:bg-gray-900 dark:text-white ${
          isSticky ? 'fixed top-0 left-0 shadow-lg scale-105 opacity-95' : 'relative scale-100 opacity-100'
        } z-50 transform transition-all duration-700 ease-in-out`}
      >
        <div className='container mx-auto px-4 h-full'>
          <div className='flex justify-between items-center h-full'>
            <div className='flex items-center'>
              <Image 
                src="/logo.png"
                alt="A description of the image"
                width={50}
                height={30}
              />
              &nbsp;
              <span className='text-blue-500 text-lg font-semibold dark:text-blue-300'>Ahmed</span>&nbsp;
              <span className='text-lg font-semibold dark:text-white'>Homeo Clinic</span>
            </div>

            {/* Hamburger Menu */}
            <div className="block lg:hidden relative">
              <button onClick={toggleMenu} className="text-blue-500 dark:text-blue-300 focus:outline-none">
                <FontAwesomeIcon icon={faBars} className="h-6 w-6 relative" />
              </button>
              {/* Hamburger Menu Items */}
              <div className={`bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 absolute right-0 transform transition-transform duration-300 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'} origin-top z-40`}>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" legacyBehavior>
                      <a className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 block py-2 px-4 rounded transition-colors duration-300">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/doctors" legacyBehavior>
                      <a className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 block py-2 px-4 rounded transition-colors duration-300">
                        Doctors
                      </a>
                    </Link>
                  </li>
                  <Dropdown />
                  <li>
                    <Link href="/contact" legacyBehavior>
                      <a className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 block py-2 px-4 rounded transition-colors duration-300">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/appointment" legacyBehavior>
                      <a className="btn bg-blue-500 dark:bg-blue-300 dark:text-gray-700 py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-400 block text-center">
                        Appointment
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Menu */}
            <div className={`hidden lg:flex`}>
              <nav className="navigation">
                <ul className="nav menu flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                  <li className="group relative">
                    <Link href="/" legacyBehavior>
                      <a className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 py-2 px-4 inline-block transition-transform duration-300 transform group-hover:scale-110">
                        Home
                      </a>
                    </Link>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 dark:bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </li>

                  <li className="group relative">
                    <Link href="/doctors" legacyBehavior>
                      <a className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 py-2 px-4 inline-block transition-transform duration-300 transform group-hover:scale-110">
                        Doctors
                      </a>
                    </Link>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 dark:bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </li>

                  <Dropdown />

                  <li className="group relative">
                    <Link href="/contact" legacyBehavior>
                      <a className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 py-2 px-4 inline-block transition-transform duration-300 transform group-hover:scale-110">
                        Contact Us
                      </a>
                    </Link>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 dark:bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </li>

                  <li className="flex items-center">
                    <Link href="/appointment" legacyBehavior>
                      <a className="btn bg-blue-500 dark:bg-blue-300 text-white dark:text-gray-900 py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-400 transition-transform duration-300 transform hover:scale-105">
                        Appointment
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
