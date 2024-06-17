import React from 'react'
import VideoBackground from '../components/VideoBackground'

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-around bg-gray-700  border-b-2 md:flex-row banner-div'>
       
        <div className=" banner-left z-10 flex flex-col justify-center items-center gap-5">
              <VideoBackground />
        </div>
    </div>
  )
}

export default Banner