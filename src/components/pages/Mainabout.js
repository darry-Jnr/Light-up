import React from "react";
import Footer from "../footer/Footer";
import Testimony from "../testimony/testimony";
import { motion } from "framer-motion";

const Mainabout = () => {
  const features = [
    { icon: "🏛️", title: "Worship", description: "Join our powerful Sunday worship sessions and experience the presence of God." },
    { icon: "🤝", title: "Connect", description: "Become a part of our thriving community and strengthen your faith journey." },
    { icon: "❤️", title: "God’s Love", description: "Our belief is rooted in God's infinite love and grace for all people." },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/853408/pexels-photo-853408.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3204051/pexels-photo-3204051.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/853408/pexels-photo-853408.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      <div className="w-full bg-gray-50 pt-24">
        <motion.section 
          className="bg-gray-900 text-white py-24 text-center"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-5xl font-bold uppercase">About Us</h2>
            <p className="mt-6 text-lg leading-relaxed">
              We are a faith-driven community dedicated to spreading God's love, building strong relationships, and guiding people toward a deeper spiritual connection.
              Our mission is to serve, inspire, and uplift through worship, prayer, and outreach programs.
            </p>
          </div>
        </motion.section>

        <motion.section 
          className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-12"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-white shadow-lg p-8 rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mt-6">{feature.title}</h3>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          className="bg-red-600 text-white py-24 text-center"
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold">
              "A Christian Should Live For The Glory Of God And The Well-Being Of Others."
            </h3>
            <p className="mt-6 text-lg italic">— Founder’s Name</p>
            <p className="mt-4 text-lg leading-relaxed">
              Our founder started this church with a vision to bring people closer to God, spread love, and create a place of worship, growth, and hope.
              Through faith and action, we continue to carry forward this mission.
            </p>
            <motion.img
              src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Founder"
              className="w-48 h-48 rounded-full mx-auto mt-8 border-4 border-white"
              whileHover={{ scale: 1.1 }}
              loading="lazy"
            />
          </div>
        </motion.section>

        <motion.section 
          className="max-w-7xl mx-auto py-24 px-6"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-center">Galleries</h2>
          <p className="text-gray-600 text-center mt-4">
            Moments from our church events, gatherings, and missions.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {galleryImages.map((image, index) => (
              <motion.img 
                key={index} 
                src={image} 
                alt={`Gallery ${index + 1}`} 
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                loading="lazy"
              />
            ))}
          </div>
        </motion.section>
      </div>
      <Testimony />
      <Footer />
    </>
  );
};

export default Mainabout;
