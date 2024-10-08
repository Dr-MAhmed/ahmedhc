'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Slider = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const slides = [
    {
      id: 1,
      image: isDarkMode
        ? 'https://res.cloudinary.com/domkn0iif/image/upload/e_brightness:-20/e_contrast:30/v1728293053/ahmedhc/crous3_vvkxdr.jpg'
        : 'https://res.cloudinary.com/domkn0iif/image/upload/v1728293053/ahmedhc/crous3_vvkxdr.jpg',
      title: 'We Provide Medical Services That You Can Trust!',
      description: 'We offer reliable medical services focused on trust, quality care, and effective homeopathic treatments.',
      buttons: [
        { label: 'Get Appointment', link: '/appointment' },
        { label: 'About Us', link: '/about', primary: true },
      ],
    },
    {
      id: 2,
      image: isDarkMode
        ? 'https://res.cloudinary.com/domkn0iif/image/upload/e_brightness:-20/e_contrast:30/v1728293051/ahmedhc/crousal2_us4hat.jpg'
        : 'https://res.cloudinary.com/domkn0iif/image/upload/v1728293051/ahmedhc/crousal2_us4hat.jpg',
      title: 'Your Health, Our Priority!',
      description: 'Your health is our top priority, offering personalized care and natural healing with homeopathy.',
      buttons: [
        { label: 'Get Appointment', link: '/appointment', primary: true },
        { label: 'Contact Us', link: '/contact' },
      ],
    },
    {
      id: 3,
      image: isDarkMode
        ? 'https://res.cloudinary.com/domkn0iif/image/upload/e_brightness:-20/e_contrast:30/v1728293051/ahmedhc/crous1_qqunsw.jpg'
        : 'https://res.cloudinary.com/domkn0iif/image/upload/v1728293051/ahmedhc/crous1_qqunsw.jpg',
      title: 'We Use Homeopathy To Cure Illness!',
      description: 'Effective natural remedies using homeopathy to heal various illnesses.',
      buttons: [
        { label: 'Contact Now', link: '/contact', primary: true },
        { label: 'Learn More', link: '/' },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="slider relative w-full h-[60vh] px-4 md:px-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`single-slider absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Light background for small devices */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-white/70 dark:bg-blue-300/70 transform text-blue-500 md:hidden"></div>

          <div className="container mx-auto h-full flex items-center justify-center md:justify-start relative px-4 sm:px-6">
            <div className="text-gray-800 dark:text-black max-w-lg text-center md:text-left z-10">
              <h1
                className={`text-2xl md:text-4xl font-bold mb-4 md:mb-6 transition-transform duration-700 ${
                  index === currentSlide ? 'transform translate-y-0' : 'transform -translate-y-full'
                }`}
              >
                {slide.title.split(' ').map((word, idx) =>
                  word.includes('Medical') ||
                  word.includes('Trust!') ||
                  word.includes('Health') ||
                  word.includes('Priority') ||
                  word.includes('Homeopathy') ||
                  word.includes('Cure') ? (
                    <span key={idx} className="text-blue-600">
                      {word}{' '}
                    </span>
                  ) : (
                    `${word} `
                  )
                )}
              </h1>
              <p
                className={`mb-6 md:mb-8 transition-transform duration-700 ${
                  index === currentSlide ? 'transform translate-y-0' : 'transform -translate-y-full'
                }`}
              >
                {slide.description}
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                {slide.buttons.map((button, btnIndex) => (
                  <a
                    key={btnIndex}
                    href={button.link}
                    className={`btn py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-400 block text-center transition-transform duration-700 ${
                      index === currentSlide ? 'transform translate-y-0' : 'transform translate-y-full'
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
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center hidden md:flex">
        <button onClick={prevSlide} className="bg-blue-500 p-2 text-gray-200 rounded-full">
          &#60;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center hidden md:flex">
        <button onClick={nextSlide} className="bg-blue-500 p-2 text-gray-200 rounded-full">
          &#62;
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
