import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Carousel from "./components/carousel/carousel";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Mission from "./mission/Mission";
import Testimony from "./components/testimony/testimony";
import Donate from './components/pages/Donate';
import Sermon from "./components/pages/sermon";
import Mainabout from "./components/pages/Mainabout";
import Contact from "./components/pages/contact";
import ScrollToTop from "./scrolltotop";
import BackToTop from "./BackToTop";

function App() {
  return (
    <>
    <Router>
      <ScrollToTop /> {/* ✅ This should be placed here */}

      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div id="home">
                <Carousel />
              </div>

              <div id="about">
                <About />
              </div>

              <Mission />
              <Testimony />
              <Events />

              <div id="contact">
                <Footer />
              </div>
            </div>
          }
        />

        <Route path="/donate" element={<Donate />} />
        <Route path="/sermon" element={<Sermon />} />
        <Route path="/Mainabout" element={<Mainabout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <BackToTop />
    </>
  );
}

export default App;
