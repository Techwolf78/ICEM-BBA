import React from 'react';
import backgroundImage from '../../assets/Images/mark-join.jpg'; // Adjust the path as necessary
import ApplyButton from '../ApplyButton'; // Import the ApplyButton component


function MarketingManagementJoin() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Green overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#6C5CE7] opacity-70 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 py-4">
        <div className="text-center mb-2">
          <h1 className="text-5xl font-bold text-white mb-6 mt-2">
          Apply for BBA in International Business at Indira University Today!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Are You Ready to Build Global Empires?
          </p>
          <ApplyButton /> {/* Using the ApplyButton component */}
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementJoin;
