import Section, { sectionStyle } from '@/components/primitives/Section';
import Title from '@/components/primitives/Title';
import { cn } from '@/lib/utils';
import React from 'react';
import { FaChevronLeft, FaChevronRight, FaCross } from 'react-icons/fa';

const Programe = () => {
  return (
    <div className='w-full bg-[#F5F5F5] mb-10 py-5'>
      <div className={cn("flex justify-between items-center custom-container px-6 md:px-8")}>
        <div>
          <p className="text-sm font-bold">DIMANCHE - 34è Temps ordinaire</p>
          <Title className="text-2xl md:text-3xl font-bold text-[#0088FF]">
            28 SEPTEMBRE
          </Title>
          <p className="text-md font-black">Job 25:1-6</p>
        </div>
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-200 transition border border-[#4D4D4D] rounded-l-xl">
            <FaChevronLeft className="text-[#1D1B20]" />
          </button>
          <button className="p-2 hover:bg-gray-200 transition border border-[#4D4D4D] rounded-r-xl">
            <FaChevronRight className="text-[#1D1B20]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programe;
