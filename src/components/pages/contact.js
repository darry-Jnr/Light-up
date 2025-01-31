import React, { useState } from "react";
import Footer from "../footer/Footer";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">LEAVE A MESSAGE</h2>
          <p className="text-center text-gray-600 mb-6">
            Your email address will not be published. Required fields are marked.
          </p>

          {showAlert && (
            <div className="mb-4 p-4 bg-green-200 text-green-800 rounded-md text-center font-semibold">
              Your message has been submitted!
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email*</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone*</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="(+12) 123 456 7890"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message*</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-400 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
