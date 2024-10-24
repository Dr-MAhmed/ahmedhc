'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Checkbox } from "@/components/ui/checkbox";
import LottieIcon from '@/components/ui/LottieIcon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DNA } from 'react-loader-spinner';

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toastMargin, setToastMargin] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xkgngkbv', { // Replace with your actual Formspree endpoint
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          subscribe: false, // Reset subscribe checkbox
        });
      } else {
        toast.error("There was an error sending your message.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  //Toast Container handling code
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setToastMargin('30%'); // Margin for small devices
      } else {
        setToastMargin('20%'); // Margin for larger devices
      }
    };

    // Set initial margin
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='main'>
      {/* 1st part */}
      <div className="relative">
        <Image
          src="/breadbg.png"
          alt="Breadcrumb Background"
          layout="responsive"
          width={1920}
          height={600}
          className="object-cover w-full h-[300px] z-10"
        />
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-sm sm:text-base">
            <Link href="/" className="hover:text-blue-900">
              Home
            </Link>
            {' '} &gt; Contact Us
          </p>
        </div>
      </div> {/* 1st part end */}

      {/* 2nd part */}
      <div className="relative z-20 pt-8 pb-16 bg-blue-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Google Map Section */}
            <div className="flex-1 h-[530px] md:h-[500px] bg-gray-300 dark:bg-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.392975214273!2d73.11073377611717!3d31.430846651558834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226972dc47be39%3A0x933b62ae47f3845f!2sAhmed%20Homeopathic%20Clinic!5e0!3m2!1sen!2s!4v1729622260788!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form Section */}
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-blue-400 mb-4 text-center">Contact With Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">If you have any questions please feel free to contact us.</p>
              <div className="flex justify-center mb-4">
                <Image
                  src="/beating.png"
                  alt="Beating Heart"
                  className="w-13 h-13 sm:w-13 sm:h-13"
                  width={33}
                  height={33}
                />
              </div>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="p-2 border border-blue-400 dark:border-blue-600 rounded w-full focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="p-2 border border-blue-400 dark:border-blue-600 rounded w-full focus:outline-none"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="p-2 border border-blue-400 dark:border-blue-600 rounded w-full focus:outline-none"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="p-2 border border-blue-400 dark:border-blue-600 rounded w-full focus:outline-none"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="p-2 border border-blue-400 dark:border-blue-600 rounded w-full h-28 focus:outline-none mb-4"
                ></textarea>
                <div className="flex flex-col items-center mb-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`py-3 px-8 sm:px-12 rounded-sm w-full md:w-[300px] lg:w-[400px] text-center transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${isLoading ? 'bg-blue-600' : 'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800'}`}
                  >
                    {isLoading ? (
                      <DNA
                        visible={true}
                        height="24"
                        width="24"
                        ariaLabel="dna-loading"
                        wrapperStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'blue' }}
                        wrapperClass="dna-wrapper"
                      />
                    ) : (
                      'Send'
                    )}
                  </button>


                  <label className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-5">
                    <Checkbox
                      checked={formData.subscribe}
                      onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked })}
                      name="subscribe"
                    />
                    &nbsp; <span className='sm:text-base md:text-[14px] text-xs-for-small-devices'>Do you want to subscribe to our Newsletter?</span>
                  </label>

                </div>
              </form>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                style={{
                  marginTop: toastMargin,
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          </div>

          {/* Individual Information */}
          <div className="flex flex-col md:flex-row justify-between mt-8 gap-2">
            {/* Contact Info: Call */}
            <div className="flex items-center space-x-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <LottieIcon animationPath="/callAnimation.json" />
              <div>
                <h3 className="font-semibold sm:text-base md:text-lg text-blue-800 dark:text-blue-400">+(92) 303-557-7306</h3>
                <p className="text-gray-600 dark:text-gray-300">ahmedhc@gmail.com</p>
              </div>
            </div>

            {/* Contact Info: Address */}
            <div className="flex items-center space-x-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <LottieIcon animationPath="/mapAnimation.json" />
              <div>
                <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-400">Saddar Chowk, Mansoorabad</h3>
                <p className="text-gray-600 dark:text-gray-300">Faisalabad, Pakistan</p>
              </div>
            </div>

            {/* Contact Info: Hours */}
            <div className="flex items-center space-x-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <LottieIcon animationPath="/clockAnimation.json" />
              <div>
                <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-400">Monday - Saturday: 7pm - 10pm</h3>
                <p className="text-gray-600 dark:text-gray-300">Sunday Closed</p>
              </div>
            </div>
          </div>
          {/* Individual Information End */}
        </div>
      </div> {/* 2nd part end */}
    </section>
  );
};

export default ContactUs;