import React from 'react';
// import '../AboutApp.css'; 
import mediaImage from '../assests/images/about.jpg'

const AboutApp = () => {
  return (
    <div className="about-app-container flex flex-col lg:flex-row p-8 md:w-full bg-white rounded-md">
      <div className=" lg:w-3/5 p-4 text-left">
        <h1 className="text-4xl font-bold mb-4">About Healthlink</h1>
        <p className="mb-4">
          Healthlink is a revolutionary platform designed to bridge the gap between health specialists and patients.
          Our mission is to provide seamless access to quality healthcare by connecting users with top-rated medical professionals with many years of experience in their fields with sincere concern about your.
        </p>
        <p className="mb-4">
          Whether you need a routine check-up, a specialized treatment, or a second opinion, Healthlink ensures that you can find and connect with experienced health specialists from the comfort of your home or on-the-go.
        </p>
        <p className="mb-4 hidden sm:block">
          Our platform offers a wide range of services, including virtual consultations, in-person visits, and personalized care plans.
          We are committed to making healthcare more accessible, efficient, and patient-centric.
        </p>
        <p className="mb-4 hidden sm:block">
          Join Healthlink today and take the first step towards better health and wellness. Your health is our priority.
        </p>
      </div>
      <div className="md:w-3/4 m-auto lg:w-2/5 p-4">
        <img src={mediaImage} alt="Healthlink" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default AboutApp;
