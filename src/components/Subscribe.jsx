import React, { useState } from 'react';
import axios from 'axios';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('There was an error subscribing. Please try again.');
    }
  };

  return (
    <div className=" min-h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/7578800/pexels-photo-7578800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Subscribe
            </button>
          </div>
          {message && <p className="mt-4 text-white">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
