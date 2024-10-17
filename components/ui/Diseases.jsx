'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Diseases = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled by examining the HTML classList
    const darkModeEnabled = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeEnabled);

    // Add an event listener to handle dark mode changes dynamically
    const observer = new MutationObserver(() => {
      const darkModeEnabled = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkModeEnabled);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="p-5 sm:p-10 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div id="diff" className="p-3 sm:p-5 rounded-lg bg-inherit text-center">
          <h3 className="text-md sm:text-lg text-blue-600 dark:text-blue-300 uppercase mb-2">Since 1997</h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-blue-400 mb-2">We Treat</h2>
          <h4 className="text-[18px] sm:text-[22px] text-blue-500 dark:text-blue-200 mb-4 sm:mb-6">
            We Are Always Ready to Help You & Your Family.
          </h4>

          <div className="flex justify-center mb-4 sm:mb-8">
            <Image
              src="/beating.png"
              alt="Beating Heart"
              className="w-13 h-13 sm:w-13 sm:h-13"
              width={33}
              height={33}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 cursor-pointer">
            {treatmentData.map((treatment, index) => (
             <article
             key={index}
             className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 dark:hover:shadow-blue-300/20"
           >                      
                <div className="overflow-hidden rounded-md mb-4">
                  <Image
                    src={isDarkMode ? treatment.darkImageSrc : treatment.lightImageSrc}
                    alt={treatment.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-3xl font-semibold text-blue-700 dark:text-blue-500 mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-blue-900 dark:text-blue-300">{treatment.description}</p>
                </div>
                <div className="flex gap-4 mt-4 items-center justify-center">
                  <a
                    href={treatment.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    Video
                  </a>
                  <a
                    href={treatment.aboutLink}
                    className="bg-gray-200 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    About
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const treatmentData = [
  {
    title: 'IBS',
    description:
      'Irritable bowel syndrome is a common condition that affects the digestive system. It causes symptoms like stomach cramps, bloating, diarrhoea, and constipation.',
    darkImageSrc: '/ibs.png',
    lightImageSrc: '/treatments/ibs.jpg',
    videoLink: 'https://www.youtube.com/watch?v=VguvMntPhgU',
    aboutLink: '/irritable_bowel_syndrome_ibs',
  },
  {
    title: 'IBD',
    description:
      'Inflammatory bowel disease (IBD) is a term for chronic inflammation of the gastrointestinal (GI) tract caused by Crohn\'s disease and Ulcerative Colitis.',
    darkImageSrc: '/ibd.png',
    lightImageSrc: '/treatments/ibd.jpg',
    videoLink: 'https://www.youtube.com/watch?v=xUlmFZSxsLw',
    aboutLink: '/inflammatory_bowel_disease_ibd',
  },
  {
    title: 'Anal Fistula',
    description:
      'Most fistulas are the consequence of an anal abscess. Trauma, tuberculosis, cancer, sexually transmitted infections may cause a tiny amount of fistulas too.',
    darkImageSrc: '/analfistula.png',
    lightImageSrc: '/treatments/analfistula.jpg',
    videoLink: 'https://www.youtube.com/watch?v=hGVUI6-RnoU',
    aboutLink: '/Anal_Fistula',
  },
  {
    title: 'PCOS',
    description:
      'Polycystic ovaries contain a large number of harmless follicles. These sacs are often unable to release an egg, which means ovulation does not take place.',
    darkImageSrc: '/pcos.png',
    lightImageSrc: '/treatments/pcos.jpg',
    videoLink: 'https://www.youtube.com/watch?v=foPbMCG8HQE',
    aboutLink: '/Polycystic_ovary_syndrome_PCOS',
  },
  {
    title: 'Thyroids',
    description:
      'Thyroid gland’s disorder can be the result of hyper/hypo-thyroidism. The ratio of thyroid disorders is quite higher in women than in men.',
    darkImageSrc: '/thyroid.png',
    lightImageSrc: '/treatments/thyroid.jpg',
    videoLink: 'https://www.youtube.com/channel/UCDl4Dk38VGZoSS3htAk-_KQ',
    aboutLink: '/Thyroids',
  },
  {
    title: 'Ovarian Cyst',
    description:
      'Ovarian Cyst is common in women who are pregnant or who haven’t gone through menopause (ceasing of menstruation) yet.',
    darkImageSrc: '/ovariancyst.png',
    lightImageSrc: '/treatments/ovariancyst.png',
    videoLink: 'https://www.youtube.com/watch?v=ZLsQ_p0HscU',
    aboutLink: '/Ovary_Cyst',
  },
  {
    title: 'Fatty Liver',
    description:
      'Fatty Liver occurs when the body produces too much fat or doesn’t metabolize it efficiently, and the excess fat is stored in liver cells.',
    darkImageSrc: '/fattyliver.png',
    lightImageSrc: '/treatments/fattyliver.jpg',
    videoLink: 'https://www.youtube.com/watch?v=QS8cwzuTxxE',
    aboutLink: '/Fatty_Liver',
  },
  {
    title: 'Ulcer',
    description:
      'Untreated Peptic Ulcer may result in internal bleeding that leads to anaemia. Severe bleeding may cause bloody vomit or stool.',
    darkImageSrc: '/ulcer.png',
    lightImageSrc: '/treatments/ulcer.jpg',
    videoLink: 'https://www.youtube.com/watch?v=woEtfMW9EOE',
    aboutLink: '/Ulcer',
  },
  {
    title: 'Kidney Stone',
    description:
      'Kidney stones form when minerals in the urine crystallize, causing discomfort and possible blockages in the urinary tract.',
    darkImageSrc: '/kidneystone.png',
    lightImageSrc: '/treatments/kidneystone.jpg',
    videoLink: 'https://www.youtube.com/watch?v=01tKoQGZzXM',
    aboutLink: '/Kidney_Stone',
  },
  {
    title: 'Sciatica',
    description:
      'Sciatica is a term used to describe pain that radiates down each leg along the path of the sciatic nerve. Sciatica typically impacts one side of the body.',
    darkImageSrc: '/sciatica.png',
    lightImageSrc: '/treatments/sciatica.jpg',
    videoLink: 'https://www.youtube.com/watch?v=bFOWZa0Lg1s',
    aboutLink: '/Sciatica',
  },
  {
    title: 'Rheumatoid Arthritis',
    description:
      'Rheumatoid arthritis is an autoimmune disorder that leads to joint inflammation, pain, and degeneration of the joint tissue.',
    darkImageSrc: '/rarthritis.jpg',
    lightImageSrc: '/treatments/rarthritis.jpg',
    videoLink: 'https://www.youtube.com/watch?v=T2ea0fYPlO0',
    aboutLink: '/Arthritis',
  },
  {
    title: 'Dysminorrhea',
    description:
      'Dysmenorrhea is severe menstrual pain caused by uterine contractions, leading to cramping and discomfort in the lower abdomen.',
    darkImageSrc: '/dysminorrhea.png',
    lightImageSrc: '/treatments/dysminorrhea.jpg',
    videoLink: 'https://www.youtube.com/watch?v=T2ea0fYPlO0',
    aboutLink: '/Dysminorrhea',
  },
];




export default Diseases