import Healthlink from '../assests/images/healtlink.png'
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-stone-200 text-slate-700 bg-white">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <div className="flex items-center">
          <div className="w-28 text-2xl">
            <img src={Healthlink} alt="Healthlink logo" className='w-full'/>
          </div>
        </div>
        <div className="hidden space-x-4 text-xl font-serif md:flex">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Health Talk</a>
          <a href="#" className="hover:text-gray-300">Get App</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fade-in">
          <div className="flex flex-col items-end p-4 text-lg font-serif space-y-2">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Appointment</a>
            <a href="#" className="hover:text-gray-300">Login</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
