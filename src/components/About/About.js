import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16" id="about">
      <div className="container mx-auto px-4 md:text-center sm:break-word">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to our community! We are a Christian organization that aims to empower and guide individuals through faith, fellowship, and service.
        </p>
      
   
        <div className="py-16 px-6 max-w-4xl mx-auto">
  <span className="text-3xl font-bold text- text-gray-800 block mb-6">Our Mission</span>
  <ul className="space-y-4">
    <li className="text-xl text-gray-600">
      Reconcilling, reviving, and discipling this generation for Christ.
    </li>
    <li className="text-xl text-gray-600">
      Reaching youths and young adults from late teens to early 30s.
    </li>
  </ul>
</div>


        
      </div>



    </div>
  );
};

export default About;
