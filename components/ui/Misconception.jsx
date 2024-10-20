import React from 'react';
import Image from 'next/image';

const Misconception = () => {
  return (
    <section className="dark:bg-gray-900 text-black dark:text-white py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-[10px] sm:text-lg text-blue-600 dark:text-blue-300 uppercase mb-2 tracking-wider">
          Addressing the
        </h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-blue-400 mb-4">
          Common Misconception About Homeopathy
        </h2>
        <div className="flex justify-center mb-4 sm:mb-8">
            <Image
              src="/beating.png"
              alt="Beating Heart"
              className="w-13 h-13 sm:w-13 sm:h-13"
              width={33}
              height={33}
            />
          </div>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          There is a misconception in society that <span className="font-semibold text-blue-600 dark:text-blue-400">Homeopathic treatment</span> is less effective and a very slow way of treatment. In fact, it is not only effective in acute diseases but also shows remarkable results in chronic, life-threatening disorders.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          The philosophy behind this is to <span className="font-semibold text-blue-600 dark:text-blue-400">pick the right symptoms</span> and choose the right medicine with the right potency.
        </p>
      </div>
    </section>
  );
};

export default Misconception;
