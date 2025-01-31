import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaDonate, FaPaypal } from "react-icons/fa";
import Footer from "../footer/Footer";

const Donate = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Support Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your generosity helps us spread the Gospel, empower youth, and impact
            lives for Christ. Every donation goes toward organizing events,
            supporting outreach programs, and making a difference in our
            generation.
          </p>

          <motion.div
            className="text-lg text-gray-600 italic mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              "Each one must give as he has decided in his heart, not reluctantly or
              under compulsion, for God loves a cheerful giver." – 2 Corinthians 9:7
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center">
              <FaHandHoldingHeart className="text-blue-400 text-4xl mb-4" />
              <p className="text-lg text-gray-700">Help us spread love and joy</p>
            </div>
            <div className="flex flex-col items-center">
              <FaDonate className="text-green-400 text-4xl mb-4" />
              <p className="text-lg text-gray-700">Your support makes an impact</p>
            </div>
          </motion.div>

          <motion.button
            className="py-3 px-6 bg-blue-400 text-white rounded-md text-lg hover:bg-gray-800 transition duration-300"
            onClick={() => window.open("https://www.paypal.com/donate", "_blank")}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <FaPaypal className="inline-block mr-2" />
            Donate via PayPal
          </motion.button>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
