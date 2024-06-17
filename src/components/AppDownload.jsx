import React from 'react'
import android from '../assests/images/playstore.webp'
import appstore from '../assests/images/app-store.png'
import Phone from '../assests/images/1.png'

const AppDownload = () => {
  return (
    <div className='bg-white p-5 rounded-lg z-10'>
      <h1 className="text-4xl text-slate-700 mt-5">
        Appointments are booked on the App. <br />
        <b>Download Now</b>
      </h1>
        <div className="flex items-center banner-right scale-90 lg:scale-100">
            <div className="absolute z-10 flex flex-col justify-center mt-40 mobile-download">
                <button className="w-[40%] android">
                  <img src={android} alt="Playstore logo" className='hover:animate-ping' />
                </button>
                <button className="w-[40%] android">
                  <img src={appstore} alt="Playstore logo" className='hover:animate-ping'/>
                </button>
            </div>
            <span className="relative flex justify-center m-auto phone">
                <img src={Phone} alt="" className=' w-[80%]' />        
            </span>  
        </div>
    </div>
  )
}

export default AppDownload