import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-[80vh] w-full dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xs sm:text-base text-blue-600 dark:text-blue-300 uppercase mb-2 tracking-wider">
          Get To Know
        </h3>
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-800 dark:text-blue-400 mb-4">
          About Us
        </h2>
        {/* Adding the image below the text */}
        <div className="flex justify-center mb-2 sm:mb-4">
          <Image src="/beating.png" alt="Beating Heart" className="w-13 h-13 sm:w-13 sm:h-13"
          width={33}
          height={33}
          />
        
        </div>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">Ahmed Homeopathy Clinic</span>, where we combine experience with dedication to provide the best homeopathic care for our patients. Our clinic is a family-run practice that values trust, quality, and compassion.
        </p>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          With over <span className="font-semibold text-blue-600 dark:text-blue-400">27 years</span> of experience, my father has been practicing homeopathy since <span className="font-semibold text-blue-600 dark:text-blue-400">1997</span>, gaining vast knowledge and expertise in treating a variety of ailments. His passion for homeopathy is reflected in the positive outcomes of our patients.
        </p>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          I have been practicing homeopathy for <span className="font-semibold text-blue-600 dark:text-blue-400">6 years</span>, and I strive to uphold the values and standards set by my father. Together, we work tirelessly to ensure our patients receive the best possible care in a comfortable and welcoming environment.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          At <span className="font-semibold text-blue-600 dark:text-blue-400">Ahmed Homeopathy Clinic</span>, your health is our priority. We look forward to helping you achieve optimal health and wellness through personalized homeopathic treatments.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
