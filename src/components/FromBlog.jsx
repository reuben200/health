import React, { useState } from 'react';
import { doctors } from '../mockData';


  
  const FromBlog = () => {

    return (
      <div className="bg-white py-24 sm:py-32 font-serif rounded-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some Services within the App</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Book a Session with us and chat with a specialist.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {doctors.map((doctor) => (
              <article key={doctor.id} className="flex w-64 flex-col items-start justify-between text-left mx-auto space-y-1">
                <div className="image w-full h-40 object-contain">
                    <img src={doctor.href} alt="" className='w-full rounded-md' />
                </div>
                <div className="group relative">
                  {/* <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={doctor.href}>
                      <span className="absolute inset-0" />
                      {doctor.name}                      
                    </a>
                  </h3>
                  <text>{doctor.specialization}</text> */}
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{doctor.info}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={doctor.href} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={doctor.author.href}>
                        <span className="absolute inset-0" />
                        {/* {doctor.name} */}
                      </a>
                    </p>
                    <p className="text-gray-600 font-bold text-xl">{doctor.specialization}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
   export default FromBlog