import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Mark Smith',
    quote: 'Joining this program has truly transformed my life spiritually and mentally.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Kyle Meyer',
    quote: 'I have grown in faith and developed meaningful relationships with fellow believers.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'John Doe',
    quote: 'The community and support here have helped me stay focused on my spiritual journey.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-400 py-16 px-6 text-center">
      <h2 className="text-white text-3xl font-bold mb-4">TESTIMONY</h2>
      <h3 className="text-white text-4xl font-extrabold mb-8">TRANSFORMED LIVES</h3>
      <Slider {...settings}>
        {testimonials.map((testimony) => (
          <div key={testimony.id} className="p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-400 p-3 rounded-full">
                <FaQuoteLeft className="text-white text-2xl" />
              </div>
              <img src={testimony.image} alt={testimony.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimony.quote}"</p>
              <h4 className="font-bold text-gray-900">{testimony.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;
