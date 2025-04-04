import React from 'react';
import backgroundImage from '../../assets/Images/mark-join.jpg'; // Adjust the path as necessary
import ApplyButton from '../ApplyButton'; // Import the ApplyButton component

function HumanResourceJoin() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Green overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#2A9D64] opacity-70 z-10"></div> {/* Emerald Green Overlay */}

      {/* Text content */}
      <div className="relative z-20 px-4 md:px-16 py-2 md:py-4">
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl  font-bold text-white mb-6 mt-2">
          Apply for BBA in Human Resource Management Now!
          </h1>
          <p className="text-xl text-gray-200 mb-4 md:mb-8">
          HR is the Future – Are You Ready to Lead?
          </p>
          <ApplyButton /> {/* Using the ApplyButton component */}
        </div>
      </div>
    </div>
  );
}

export default HumanResourceJoin;
