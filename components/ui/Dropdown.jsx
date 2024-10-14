"use client"
import React, { useState } from 'react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        <ul
          className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-gray-800 dark:text-white shadow-sm hover:text-blue-400 cursor-pointer"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <li className="flex items-center">
            Options
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="/appointment"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-400"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Appointment
            </a>
            <a
              href="/timetable"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-400"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Time Table
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="/pricing"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-400"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Our Pricing
            </a>
            <a
              href="/faq"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-400"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </div>
  );
}