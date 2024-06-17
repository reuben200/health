import React from 'react';
import android from '../assests/images/playstore.webp'
import appstore from '../assests/images/app-store.png'
import Logo from '../assests/images/logo-full.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className='flex flex-col justify-center items-center'>
            <img 
                    src={Logo} 
                    alt="Logo" 
                    className="w-48 rounded-full mx-auto "
                />
            <h2 className="text-2xl font-semibold mb-2">Quote on Health</h2>
            <p className="text-lg italic">"Health is not just about the absence of disease, but a state of complete physical, mental, and social well-being."</p>
          </div>
          <div className='flex flex-col justify-center text-center'>
          <img 
              src="https://images.pexels.com/photos/7578800/pexels-photo-7578800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Doctor" 
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Open Hours</h2>
            <p className="text-lg">24/7</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-center items-center my-5 mobile-download">
                        <button className="w-[60%] android">
                        <img src={android} alt="Playstore logo" className=' w-64 hover:animate-bounce' />
                        </button>
                        <button className="w-[60%] android">
                        <img src={appstore} alt="Playstore logo" className=' w-64 hover:animate-bounce'/>
                        </button>
                </div>
                <h1 className="text-3xl font-bold text-center">Download the App</h1>
            </div>
        </div>

        <div className="text-center mt-8">
          <p>&copy; {currentYear} Healthlink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
