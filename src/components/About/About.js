import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-blue-400 py-16 text-white" id="about">
      <div className="container mx-auto px-6 md:text-center">
        
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to our community! We are a Christian organization that aims to empower and guide 
          individuals through faith, fellowship, and service. Our goal is to help people 
          grow spiritually and impact their world positively.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Our Purpose</h3>
            <p>
              We strive to create a community where individuals can grow in their relationship 
              with God, support one another, and serve their communities with love and compassion.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
            <p>
              We organize regular fellowship gatherings, prayer meetings, and outreach programs 
              to spread the message of hope and transformation through Christ.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link 
            to="/Mainabout" 
            className="bg-white no-underline text-blue-400 font-semibold py-3 px-6 rounded-lg shadow-lg text-lg transition-all hover:bg-blue-500 hover:text-blue-900"
          >
            Read More
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
