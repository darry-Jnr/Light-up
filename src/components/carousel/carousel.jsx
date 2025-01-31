import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgimage from "../images/logoo.jpg";

const slides = [
  {
    title: "WELCOME TO LIGHT UP YOUR 20'S",
    subtitle: "Online Church For Youths",
    description: "Empowered by faith, we are the generation called to shine brightly and make a difference in the world.",
    image: bgimage,
  },
  {
    title: "TRANSFORMING LIVES",
    subtitle: "Total Surrender To God",
    description: "Remember your Creator in the days of your youth, before the days of trouble come...",
    image: bgimage,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center flex justify-center items-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center px-6">
                <motion.h1 className="text-4xl font-bold text-gray-100" animate={{ y: [20, 0], opacity: [0, 1] }} transition={{ duration: 1 }}>
                  {slide.title}
                </motion.h1>
                <motion.p className="font-bold text-xl text-gray-200" animate={{ y: [20, 0], opacity: [0, 1] }} transition={{ duration: 1, delay: 0.3 }}>
                  {slide.subtitle}
                </motion.p>
                <motion.p className="text-xl text-gray-300" animate={{ y: [20, 0], opacity: [0, 1] }} transition={{ duration: 1, delay: 0.6 }}>
                  {slide.description}
                </motion.p>
                <motion.button
                  className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Become a Volunteer
                </motion.button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="text-white p-2 bg-gray-900 bg-opacity-50 rounded-full"
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
          className="text-white p-2 bg-gray-900 bg-opacity-50 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
