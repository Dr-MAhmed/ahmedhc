'use client'; // Ensure this component runs in the client

import { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  useEffect(() => {
    // GSAP animation for the loader
    gsap.fromTo('.loader-circle', 
      { scale: 0 }, 
      { scale: 1, duration: 0.5, ease: 'bounce.out', repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-blue-600 flex justify-center items-center z-50">
      <div className="loader-circle w-24 h-24 border-8 border-gray-300 border-t-8 border-t-blue-400 rounded-full"></div>
    </div>
  );
};

export default Loader;
