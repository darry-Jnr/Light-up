import React from 'react';

const Events = () => {
  return (
    <div id="events" className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
      <p className="text-lg text-gray-600 mb-12">
        Join us every <span className="font-bold">3rd Saturday</span> of the month via Zoom.
      </p>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800">Monthly Gathering</h3>
        <p className="text-gray-600 mt-4">
          A time of fellowship, worship, and growth. Connect with like-minded youths and strengthen your faith.
        </p>

        <div className="mt-6 text-lg">
          <p className="text-gray-700">
            <span className="font-bold">Date:</span> Every 3rd Saturday of the Month
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Time:</span> 7:00 PM (GMT)
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Zoom ID:</span> 7398275562
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Passcode:</span> LIGHT
          </p>
        </div>

        <a 
          href="https://zoom.us/j/7398275562"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block no-underline mt-8 bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Join Event
        </a>
      </div>
    </div>
  );
};

export default Events;
