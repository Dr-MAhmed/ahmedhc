import React from 'react';

const HomeoSection2 = () => {
  return (
    <section className="p-5 sm:p-10 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div id="diff" className="p-3 sm:p-5 rounded-lg bg-inherit text-center">
        <h3 className="text-md sm:text-lg text-blue-600 dark:text-blue-300 uppercase mb-2">Get To Know</h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-blue-400 mb-2">The Difference</h2>
        <h4 className="text-[18px] sm:text-[22px] text-blue-500 dark:text-blue-200 mb-4 sm:mb-6">All Homeopathic Remedies Are Tested On Human.</h4>

        {/* Adding the image below the text */}
        <div className="flex justify-center mb-4 sm:mb-8">
          <img src="/beating.png" alt="Beating Heart" className="w-13 h-13 sm:w-13 sm:h-13" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6 sm:mt-8">
          {['homeopathy', 'allopathy', 'naturopathy', 'acupuncture'].map((type, index) => (
            <div
              key={type}
              className="flex flex-col items-center w-[250px] sm:w-[300px] h-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-blue-200 dark:border-blue-700 transition-transform transform hover:scale-105"
            >
              <div className="bg-blue-700 dark:bg-blue-900 w-full py-4 sm:py-6">
                <picture>
                  <source srcSet={`/${type}.png`} type="image/webp" />
                  <img
                    src={`/${type}.png`}
                    alt={type}
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto filter invert"
                  />
                </picture>
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-lg sm:text-xl font-bold capitalize text-blue-700 dark:text-blue-300 mb-2 sm:mb-3">{type}</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {type === 'homeopathy' && 'Treats disease with drugs having effects similar to the symptoms.'}
                  {type === 'allopathy' && 'Treats disease with drugs having effects opposite to the symptoms.'}
                  {type === 'naturopathy' && 'Diseases can be treated without the use of drugs by controlling diet, exercise, and massage.'}
                  {type === 'acupuncture' && 'Needles are inserted in the skin at specific points along what are considered to be lines of energy.'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ul className="list-disc pl-4 sm:pl-6 mt-8 sm:mt-10 text-gray-700 dark:text-gray-300 text-left max-w-full sm:max-w-6xl mx-auto space-y-3 sm:space-y-4">
          <li className="flex items-start gap-2 w-full">
            <span className="text-blue-600 dark:text-blue-400">✔️</span>
            <span>Homeopathy is a common type of medicine used by more than 200 million individuals globally to cure both severe and chronic conditions. It is focused on the ‘like cures like’ concept.</span>
          </li>
          <li className="flex items-start gap-2 w-full">
            <span className="text-blue-600 dark:text-blue-400">✔️</span>
            <span>Homeopathic medicines (remedies) are made from natural sources (e.g., plants, minerals) and are environmentally friendly.</span>
          </li>
          <li className="flex items-start gap-2 w-full">
            <span className="text-blue-600 dark:text-blue-400">✔️</span>
            <span>Homeopathic treatment relies on the dynamic concept of potentization.</span>
          </li>
          <li className="flex items-start gap-2 w-full">
            <span className="text-blue-600 dark:text-blue-400">✔️</span>
            <span>Homeopathic treatment works on the root cause rather than suppressing the disease.</span>
          </li>
          <li className="flex items-start gap-2 w-full">
            <span className="text-blue-600 dark:text-blue-400">✔️</span>
            <span>Homeopathy relies on a theory that if the disease is suppressed, it will enter into another layer.</span>
          </li>
          <li className="flex items-start gap-2 w-full">
            <span className="text-blue-600 dark:text-blue-400">✔️</span>
            <span>Homeopathy treats patients and works on a theory that first removes the root cause of the disease.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeoSection2;
