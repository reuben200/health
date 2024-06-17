import React from 'react';
import BgVideo from '../assests/videos/bg-video.mp4'
import '../videobackground.css'; // Import the CSS file for styling

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted className="video-background">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" content ">
          <div className="md:w-1/2 flex flex-col justify-center items-center gap-10">
                <p className=" text-center text-3xl md:block md:text-5xl banner-art">
                Seamless Healthcare Connections
                </p>
                <p className="text-lg">
                Find and connect with experienced health professionals to meet your healthcare needs effortlessly. From virtual consultations to in-person visits, we bring the expertise of top specialists directly to you, ensuring timely and effective care.
                </p>
                <button className='btn-health animate-bounce bg-slate-600 hover:bg-slate-400 text-white sm:text-2xl w-fit p-2 text-sm sm:px-8 sm:py-4 rounded'>Book Appointment</button>
          </div>
      </div>
    </div>
  );
};

export default VideoBackground;
