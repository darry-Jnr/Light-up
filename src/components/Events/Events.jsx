import React, { useState } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

const Events = () => {
  const [showNotification, setShowNotification] = useState(false);

  // Set event date (Next 3rd Saturday of the Month)
  const eventDate = new Date("2025-02-17T19:00:00"); // Adjust to your actual event date

  // Custom Countdown Renderer
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setTimeout(() => setShowNotification(true), 1000);
      return <span className="text-green-600 font-bold">🚀 Event is LIVE Now!</span>;
    } else {
      return (
        <span className="text-xl font-semibold text-gray-900">
          ⏳ <span className="text-blue-600">{days}</span>d
          <span className="text-blue-600 mx-2">{hours}</span>h
          <span className="text-blue-600">{minutes}</span>m
          <span className="text-blue-600">{seconds}</span>s
        </span>
      );
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      {/* Notification Alert */}
      {showNotification && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="fixed top-5 right-5 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg z-50"
        >
          🎉 The Event is Starting Now! Join us on Zoom.
        </motion.div>
      )}

      <h2 className="text-4xl font-bold text-gray-800 mb-6">Upcoming Event</h2>
      <p className="text-lg text-gray-600 mb-8">
        Join us every <span className="font-bold">3rd Saturday</span> of the month via Zoom.
      </p>

      {/* Event Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h3 className="text-3xl font-semibold text-gray-800">Monthly Gathering</h3>
        <p className="text-gray-600 mt-4">
          A time of worship, learning, and connection with believers worldwide.
        </p>

        {/* Countdown Timer */}
        <div className="mt-6 bg-blue-100 text-blue-900 p-4 rounded-md inline-block shadow-md">
          <Countdown date={eventDate} renderer={renderer} />
        </div>

        <div className="mt-6 text-lg space-y-2">
          <p className="text-gray-700">
            <span className="font-bold"> Date:</span> Every 3rd Saturday of the Month
          </p>
          <p className="text-gray-700">
            <span className="font-bold">⏰ Time:</span> 7:00 PM (GMT)
          </p>
          <p className="text-gray-700">
            <span className="font-bold"> Zoom ID:</span> 7398275562
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Passcode:</span> LIGHT
          </p>
        </div>

        <a
          href="https://zoom.us/j/7398275562"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block no-underline mt-8 bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
        >
           Join Event Now
        </a>
      </motion.div>
    </div>
  );
};

export default Events;
