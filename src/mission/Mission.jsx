import React from 'react';
import { motion } from 'framer-motion';
import { FaCross, FaHandsHelping, FaGlobe } from 'react-icons/fa';

const Mission = () => {
  return (
    <div className="bg-white py-16 text-gray-800 text-center" id="mission">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaCross className="text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Faith Foundation</h3>
            <p className="text-lg max-w-sm">
              Building a strong spiritual foundation for youths through the Word of God and prayer.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaHandsHelping className="text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Empowering Youths</h3>
            <p className="text-lg max-w-sm">
              Equipping young people with the knowledge and skills to fulfill their God-given purpose.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaGlobe className="text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Global Outreach</h3>
            <p className="text-lg max-w-sm">
              Connecting youths across the world to share the love of Christ and impact lives positively.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Mission;