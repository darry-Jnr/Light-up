import React from "react";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="home">
      <Carousel />
      </div>
     

      <div id="about">
        <About />
        </div>

        <div id="events">
        <Events />
        </div>
        
        <div id="contact">
        <Footer />
        </div>
       
      
    </div>
  );
}

export default App;
