import React from 'react';
import { FaChalkboard, FaRegClock, FaChartLine } from 'react-icons/fa';

function MarketingManagementPointers() {
  return (
    <div className="px-8 md:px-16 py-4 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 justify-center max-w-5xl mx-auto">
        {/* Card 1: Program Format */}
        <div className="bg-[#F6FBFF] p-2 md:p-4 shadow-md flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]">
          <FaChalkboard size={30} className="text-[#2A9DA2]" />
          <h2 className="text-[#135683] text-sm md:text-base font-semibold mt-2">Program Format</h2>
          <p className="text-[#2A9DA2] text-sm md:text-base">Offline</p>
        </div>

        {/* Card 2: Duration */}
        <div className="bg-[#F6FBFF] p-2 md:p-4 shadow-md flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]">
          <FaRegClock size={30} className="text-[#2A9DA2]" />
          <h2 className="text-[#135683] text-sm md:text-base font-semibold mt-2">Duration</h2>
          <p className="text-[#2A9DA2] text-sm md:text-base">
            BBA - 3 yrs <br /> Hons. - 4 yrs
          </p>
        </div>

        {/* Card 3: Highest CTC */}
        <div className="bg-[#F6FBFF] p-2 md:p-4 shadow-md flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]">
          <FaChartLine size={30} className="text-[#2A9DA2]" />
          <h2 className="text-[#135683] text-sm md:text-base font-semibold mt-2">Highest CTC</h2>
          <p className="text-[#2A9DA2] text-sm md:text-base">8 LPA</p>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
