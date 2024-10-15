'use client'; // Ensure this component runs in the client context
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  useEffect(() => {
    // GSAP animation for the rotating arcs
    gsap.to('.loader-arc-left', {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to('.loader-arc-right', {
      rotation: -360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
    });

    // GSAP animation for the heartbeat line pulse
    gsap.fromTo(
      '.heartbeat-line',
      { scaleX: 0.8, scaleY: 0.8 },
      { scaleX: 1.2, scaleY: 1.2, duration: 0.5, repeat: -1, yoyo: true, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-blue-500 dark:bg-blue-900 flex justify-center items-center z-50">
      <div className="relative w-24 h-24 flex justify-center items-center">
        {/* Left Arc */}
        <div className="loader-arc-left absolute w-24 h-24 border-t-4 border-t-transparent border-l-4 border-l-white rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        
        {/* Right Arc */}
        <div className="loader-arc-right absolute w-24 h-24 border-b-4 border-b-transparent border-r-4 border-r-white rounded-full" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}></div>

        {/* Heartbeat line in the center */}
        <div className="heartbeat-line relative w-10 h-10 flex justify-center items-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 12 8 12 10 15 14 9 16 12 21 12"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loader;
