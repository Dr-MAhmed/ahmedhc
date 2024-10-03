'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; // Import the useTheme hook for theme detection

const Slider = () => {
  const { theme } = useTheme(); // Access the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect theme changes
  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const slides = [
    {
      id: 1,
      image: isDarkMode ? '/sliderrbg1.png' : '/sliderr1x.png', // Use the image with the background removed for dark mode
      title: 'We Provide Medical Services That You Can Trust!',
      description:
        'We offer reliable medical services focused on trust, quality care, and effective homeopathic treatments.',
      buttons: [
        { label: 'Get Appointment', link: '#' },
        { label: 'About Us', link: '#', primary: true },
      ],
    },
    {
      id: 2,
      image: isDarkMode ? '/sliderrbg2.png' : '/sliderr3x.png', // Use the image with the background removed for dark mode
      title: 'Your Health, Our Priority!',
      description:
        'Your health is our top priority, offering personalized care and natural healing with homeopathy.',
      buttons: [
        { label: 'Get Appointment', link: '#', primary: true },
      ],
    },
    {
      id: 3,
      image: isDarkMode ? '/sliderrbg4.png' : '/sliderr4x.png', // Use the image with the background removed for dark mode
      title: 'We Use Homeopathy To Cure Illness!',
      description:
        'Effective natural remedies using homeopathy to heal various illnesses.',
      buttons: [
        { label: 'Contact Now', link: '#', primary: true },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="slider relative w-full h-[60vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`single-slider absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="container mx-auto h-full flex items-center">
            <div className="text-gray-800 dark:text-white max-w-lg">
              <h1
                className={`text-4xl font-bold mb-4 transition-transform duration-700 ${
                  index === currentSlide
                    ? 'transform translate-y-0'
                    : 'transform -translate-y-full'
                }`}
              >
                {slide.title.split(' ').map((word, idx) =>
                  word.includes('Medical') || word.includes('Trust!') || word.includes('Health') || word.includes('Priority') || word.includes('Homeopathy') || word.includes('Cure')? (
                    <span key={idx} className="text-blue-400">
                      {word}{' '}
                    </span>
                  ) : (
                    `${word} `
                  )
                )}
              </h1>
              <p
                className={`mb-6 transition-transform duration-700 ${
                  index === currentSlide
                    ? 'transform translate-y-0'
                    : 'transform -translate-y-full'
                }`}
              >
                {slide.description}
              </p>
              <div className="flex space-x-4">
                {slide.buttons.map((button, btnIndex) => (
                  <a
                    key={btnIndex}
                    href={button.link}
                    className={`btn py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-400 block text-center transition-transform duration-700 ${
                      index === currentSlide
                        ? 'transform translate-y-0'
                        : 'transform translate-y-full'
                    } ${
                      button.primary
                        ? 'bg-blue-500 text-gray-200 dark:bg-blue-500 dark:text-black'
                        : 'bg-gray-800 text-gray-200 dark:bg-blue-500 dark:text-black'
                    }`}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="absolute inset-y-0 left-8 flex items-center">
        <button
          onClick={prevSlide}
          className="bg-blue-500 p-4 text-gray-200 rounded-full"
        >
          &#60;
        </button>
      </div>
      <div className="absolute inset-y-0 right-8 flex items-center">
        <button
          onClick={nextSlide}
          className="bg-blue-500 p-4 text-gray-200 rounded-full"
        >
          &#62;
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Slider;