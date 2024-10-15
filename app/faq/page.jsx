// components/FAQ.js
'use client';
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State for active tab index
  const [expandedQuestion, setExpandedQuestion] = useState(null); // State for expanded question

  const faqs = [
    // Homeopathy FAQs
    [
      {
        question: "What is homeopathy?",
        answer: "Homeopathy is a system of alternative medicine that uses highly diluted substances to trigger the body’s natural healing processes.",
      },
      {
        question: "How does homeopathy work?",
        answer: "Homeopathy works on the principle of 'like cures like', where a substance causing symptoms in a healthy person is used to treat similar symptoms in a sick person.",
      },
      {
        question: "Is homeopathy safe?",
        answer: "Yes, homeopathic treatments are generally considered safe due to their highly diluted nature, minimizing the risk of side effects.",
      },
      {
        question: "How long does treatment take?",
        answer: "The duration of treatment varies depending on the individual and the condition being treated.",
      },
      {
        question: "Can it be used with regular medicine?",
        answer: "Yes, homeopathy can be used alongside conventional medicine, but it’s best to consult your healthcare provider first.",
      },
      {
        question: "What conditions can homeopathy treat?",
        answer: "Homeopathy can be used to treat a variety of conditions, including allergies, migraines, chronic pain, and digestive issues.",
      },
      {
        question: "Are homeopathic remedies regulated?",
        answer: "In many countries, homeopathic remedies are regulated as over-the-counter medications, but regulations may vary.",
      },
      {
        question: "Is homeopathy suitable for children?",
        answer: "Yes, homeopathy is often used for children and is considered safe for treating common ailments like colds and teething.",
      },
      {
        question: "What are homeopathic dilutions?",
        answer: "Homeopathic dilutions involve diluting a substance in water or alcohol multiple times, enhancing its healing properties.",
      },
      {
        question: "Can it help chronic issues?",
        answer: "Homeopathy is commonly used for chronic conditions, but treatment effectiveness varies from person to person.",
      },
      {
        question: "Are there side effects to its remedies?",
        answer: "Side effects are rare, but some individuals may experience a temporary worsening of symptoms before improvement.",
      },
      {
        question: "How do I take homeopathic remedies?",
        answer: "Homeopathic remedies are usually taken as pellets, liquid, or tablets, placed under the tongue or dissolved in water.",
      },

    ],

    // Allopathy FAQs
    [
      {
        question: "What is allopathy?",
        answer: "Allopathy is a system of medicine that treats disease using remedies that produce effects different from the symptoms of the disease.",
      },
      {
        question: "How are meds developed?",
        answer: "Allopathic medicines are developed through rigorous clinical testing and scientific research to ensure their safety and efficacy.",
      },
      {
        question: "Are there side effects?",
        answer: "Yes, allopathic medications can have side effects, which vary based on the medication and individual response.",
      },
      {
        question: "Doctor training process?",
        answer: "Allopathic doctors typically complete a medical degree, residency training, and obtain a license to practice medicine.",
      },
      {
        question: "Can it cure diseases?",
        answer: "Allopathic treatments aim to cure diseases or manage symptoms, depending on the condition.",
      },
      {
        question: "What is the role of surgery in allopathy?",
        answer: "Surgery in allopathy is used to treat or remove the cause of disease, often when medication alone is insufficient.",
      },
      {
        question: "Are antibiotics part of allopathy?",
        answer: "Yes, antibiotics are a key component of allopathic medicine, used to treat bacterial infections.",
      },
      {
        question: "How is pain treated?",
        answer: "Pain is often managed with medications such as analgesics, anti-inflammatory drugs, or opioid-based medications.",
      },
      {
        question: "Is vaccination part of it?",
        answer: "Vaccination is a critical aspect of allopathic medicine to prevent infectious diseases.",
      },
      {
        question: "Does it treat chronic issues?",
        answer: "Yes, allopathic medicine is widely used for managing chronic conditions like diabetes, hypertension, and arthritis.",
      },
      {
        question: "Handling drug interactions?",
        answer: "Doctors carefully review medications to prevent drug interactions and adjust treatment plans as necessary.",
      },
      {
        question: "How are side effects managed?",
        answer: "Side effects are monitored, and medications are adjusted to minimize adverse effects.",
      },
      {
        question: "What is the role of diagnostic tests?",
        answer: "Diagnostic tests are crucial in allopathy to identify diseases and plan treatments.",
      },

    ],

    // Naturopathy FAQs
    [
      {
        question: "What is naturopathy?",
        answer: "Naturopathy is a holistic approach to health care that emphasizes prevention, treatment, and optimal health through natural therapies.",
      },
      {
        question: "What therapies used?",
        answer: "Naturopathy may include herbal medicine, acupuncture, nutritional counseling, and lifestyle modifications.",
      },
      {
        question: "Is naturopathy safe?",
        answer: "Naturopathy is generally safe, especially when practiced by a trained and licensed naturopathic doctor.",
      },
      {
        question: "How effective is naturopathy?",
        answer: "The effectiveness of naturopathy can vary depending on the condition being treated and the individual’s response.",
      },
      {
        question: "Can it work with other meds?",
        answer: "Yes, naturopathy can complement conventional medicine, but it’s important to inform all healthcare providers involved.",
      },
      {
        question: "Naturopathy’s diet view?",
        answer: "Naturopathy emphasizes a balanced diet rich in whole foods, aiming to improve health through nutrition.",
      },
      {
        question: "Thoughts on mental health?",
        answer: "Naturopathy takes a holistic approach, addressing physical, emotional, and mental factors to improve well-being.",
      },
      {
        question: "Can it help chronic issues?",
        answer: "Naturopathy can be effective in managing chronic illnesses by focusing on lifestyle and natural treatments.",
      },
      {
        question: "Personalized treatments?",
        answer: "Yes, naturopathic treatments are tailored to the individual's health needs, lifestyle, and specific conditions.",
      },
      {
        question: "Detox’s role in it?",
        answer: "Detoxification is often used to cleanse the body of toxins and improve overall health in naturopathic practice.",
      },
      {
        question: "Does it include exercise?",
        answer: "Exercise is a key component in naturopathy, used to enhance physical health and support mental well-being.",
      },
      {
        question: "Is naturopathy evidence-based?",
        answer: "Some naturopathic practices are supported by research, while others rely on traditional use.",
      },
      {
        question: "Can naturopathy help with stress?",
        answer: "Yes, naturopathy includes stress-reducing techniques like meditation and herbal remedies.",
      },

    ],

    // Acupuncture FAQs
    [
      {
        question: "What is acupuncture?",
        answer: "Acupuncture is a traditional Chinese medicine practice that involves inserting thin needles into specific points on the body to promote healing.",
      },
      {
        question: "Is acupuncture painful?",
        answer: "Most people experience little to no pain during acupuncture. The needles used are very thin and cause minimal discomfort.",
      },
      {
        question: "What conditions can acupuncture treat?",
        answer: "Acupuncture is used to treat various conditions, including pain, stress, digestive issues, and more.",
      },
      {
        question: "How many sessions are needed?",
        answer: "The number of sessions needed varies by individual and condition. A typical treatment plan may involve multiple sessions.",
      },
      {
        question: "Is acupuncture safe?",
        answer: "When performed by a trained practitioner, acupuncture is generally considered safe with minimal side effects.",
      },
      {
        question: "How does acupuncture work?",
        answer: "Acupuncture works by stimulating specific points on the body to balance energy flow and promote natural healing.",
      },
      {
        question: "Can it mix with other care?",
        answer: "Yes, acupuncture can be used alongside other treatments, but it is best to consult with your healthcare provider.",
      },
      {
        question: "What are the benefits of acupuncture?",
        answer: "Benefits of acupuncture include pain relief, stress reduction, improved digestion, and enhanced immune function.",
      },
      {
        question: "Is there Science backing it?",
        answer: "Scientific studies support the effectiveness of acupuncture for certain conditions, such as chronic pain and anxiety.",
      },
      {
        question: "How to prep for sessions?",
        answer: "It’s recommended to wear comfortable clothing, have a light meal, and avoid caffeine before an acupuncture session.",
      },
      {
        question: "Any risks involved?",
        answer: "Risks are minimal when performed by a qualified practitioner, but may include minor bleeding or bruising at needle sites.",
      },
      {
        question: "Can children undergo acupuncture?",
        answer: "Acupuncture can be safely used for children, but it should be performed by a practitioner experienced in pediatric care.",
      },
      {
        question: "How long does a session last?",
        answer: "An acupuncture session typically lasts between 30 to 60 minutes.",
      },
    ],
  ];


  return (
    <div className="py-6 px-3 bg-gray-100 dark:bg-gray-800 min-h-[753px] w-full max-w-3xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-sm sm:text-lg text-blue-700 dark:text-blue-400 mb-1">Let's answer some questions</h2>
        <h3 className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-gray-300">FAQs</h3>
        <div className="flex justify-center my-3">
          <img src="/beating.png" alt="Beating Heart" className="w-13 h-13 sm:w-13 sm:h-13" />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4 max-w-xs mx-auto sm:flex sm:justify-center sm:gap-2">
          {['Homeopathy', 'Allopathy', 'Naturopathy', 'Acupuncture'].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-xs sm:text-sm md:text-base font-medium py-1 px-3 rounded-lg transition-colors duration-300 ease-in-out ${
                activeIndex === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 p-4 sm:p-5 rounded-md shadow-md transition-all duration-300 ease-in-out">
        {faqs[activeIndex].map((faq, index) => (
          <div key={index} className="border-b last:border-b-0">
            <h4
              onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
              className="cursor-pointer py-2 flex justify-between items-center text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-lg transition-colors duration-300"
            >
              <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
              <span
                className={`ml-2 transition-transform duration-300 ${
                  expandedQuestion === index ? 'rotate-180' : ''
                }`}
              >
                &#9662; {/* Down arrow icon */}
              </span>
            </h4>
            {expandedQuestion === index && (
              <p className="text-gray-700 dark:text-gray-300 pl-4 mb-3 text-xs sm:text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;