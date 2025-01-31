import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 md:right-10 bg-gray-800 text-white p-3 rounded-full shadow-md transition-transform duration-300 hover:scale-110 ${
          visible ? "block" : "hidden"
        } max-w-[50px] max-h-[50px] overflow-hidden`}
        style={{ right: "max(1rem, 5%)" }} // Prevents overflow on very small screens
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default BackToTop;
