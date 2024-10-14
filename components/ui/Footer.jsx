import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 dark:bg-blue-900 text-white dark:text-gray-300 py-4 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base font-medium">
          Copyright &copy; 2024 Ahmed Homeopathy Clinic. 
          <span className="hidden md:inline"> All Rights Reserved!</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
