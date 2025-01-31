import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaTags, FaClock, FaDownload } from "react-icons/fa";
import Footer from "../footer/Footer";

const Sermon = () => {
  const sermonData = [
    {
      id: 1,
      date: "10",
      month: "MAR",
      title: "Start a New Way of Living",
      preacher: "Jorge Malone",
      categories: ["God", "Pray"],
      time: "9:00 am - 11:00 am",
      sermon: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://preview.colorlib.com/theme/crose/img/bg-img/8.jpg",
    },
    {
      id: 2,
      date: "11",
      month: "MAY",
      title: "What Must I Do To Be Saved",
      preacher: "Jorge Malone",
      categories: ["God", "Pray"],
      time: "10:00 am - 11:00 am",
      sermon: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://preview.colorlib.com/theme/crose/img/bg-img/9.jpg",
    },
    {
      id: 3,
      date: "15",
      month: "MAY",
      title: "The Second Coming of Christ",
      preacher: "Jorge Malone",
      categories: ["God", "Pray"],
      time: "9:00 am - 11:00 am",
      sermon: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      image: "https://preview.colorlib.com/theme/crose/img/bg-img/7.jpg",
    },
    {
      id: 4,
      date: "20",
      month: "JUN",
      title: "Faith that Moves Mountains",
      preacher: "John Doe",
      categories: ["Faith", "Encouragement"],
      time: "7:00 pm - 9:00 pm",
      sermon: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      image: "https://preview.colorlib.com/theme/crose/img/bg-img/8.jpg",
    },
    {
      id: 5,
      date: "25",
      month: "JUL",
      title: "Walking in the Spirit",
      preacher: "Jane Smith",
      categories: ["Holy Spirit", "Growth"],
      time: "6:00 pm - 8:00 pm",
      sermon: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      image: "https://preview.colorlib.com/theme/crose/img/bg-img/8.jpg",
    },
  ];

  return (
    <>
      <section className="bg-gray-100 py-12 pt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Sermons</h2>
            <p className="text-lg text-gray-700 mb-6">
              Loaded with fast-paced worship, activities, and video teachings to address real issues that students face each day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sermonData.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img src={sermon.image} alt={sermon.title} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-400 text-white text-center px-3 py-2 rounded-lg">
                    <span className="text-2xl font-bold">{sermon.date}</span>
                    <br />
                    <span className="text-sm">{sermon.month}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{sermon.title}</h3>

                  <div className="text-gray-600 text-sm space-y-2">
                    <p className="flex items-center gap-2">
                      <FaUser className="text-blue-400" />
                      <span>
                        <strong>Sermon From:</strong> <em>{sermon.preacher}</em>
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaTags className="text-red-400" />
                      <span>
                        <strong>Categories:</strong> <em>{sermon.categories.join(", ")}</em>
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaClock className="text-gray-500" />
                      <span>
                        {sermon.month} {sermon.date} on <em className="italic">{sermon.time}</em>
                      </span>
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <a href={sermon.sermon} target="_blank" className="flex no-underline items-center text-blue-400 hover:text-blue-500">
                      <button>Listen</button>
                    </a>
                    <a href={sermon.sermon} download className="flex no-underline items-center text-blue-400 hover:text-blue-500">
                      <FaDownload className="mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sermon;
