import Title from '@/components/primitives/Title';
import React from 'react';
import { FaChevronLeft, FaChevronRight, FaCross } from 'react-icons/fa';

const Programe = () => {
    return (
        <div className='w-full'>
             <div className="flex justify-between lg:px-12 lg:py-2 items-center bg-[#F5F5F5] mb-10">
        <div>
          <p className="text-sm font-bold">DIMANCHE - 34è Temps ordinaire</p>
          <Title className="text-2xl md:text-3xl font-bold text-[#0088FF]">
            28 SEPTEMBRE
          </Title>
          <p className="text-md font-black">Job 25:1-6</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaCross className="text-red-600 text-xl" />
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
        </div>
    );
}

export default Programe;
