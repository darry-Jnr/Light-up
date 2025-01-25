import React from 'react';
import bgimage from '../images/car.jpg'; // Import your background image

const Carousel = () => {
  return (
    <div id="carouselExample home" className="relative" data-ride="carousel" data-interval="3000">
      <div className="carousel-inner">
        {/* First Slide with background image */}
        <div
          className="carousel-item active"
          style={{
            backgroundImage: `url(${bgimage})`, // Apply the imported background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            color: 'white', // Ensures text stands out against the background
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-100">WELCOME TO LIGHT UP YOUR 20'S</h1>
              <p className="font-bold text-xl text-gray-200">Online Church For Youths</p>
              <p className="text-xl text-gray-300">Empowered by faith, we are the generation called to shine brightly and make a difference in the world.</p>
              <p>
                <button type="button" className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Become a Volunteer</button>
              </p>
            </div>
          </div>
        </div>

        {/* Second Slide with background image */}
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${bgimage})`, // Apply the imported background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            color: 'white', // Ensures text stands out against the background
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-100">TRANSFORMING LIVES</h1>
              <p className="text-lg text-gray-200">Total Surrender To God</p>
              <p className="text-xl text-gray-300">Remember your Creator in the days of your youth, before the days of trouble come...</p>
              <p>
                <button type="button" className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700">Become a Volunteer</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <a className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-4" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-4" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
