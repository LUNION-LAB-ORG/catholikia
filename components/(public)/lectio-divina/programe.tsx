import Title from '@/components/primitives/Title';
import { ILectio } from '@/features/lectio-divina/types/lectio.type';
import { cn } from '@/lib/utils';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Programe = ({ lectio }: { lectio: ILectio }) => {
  return (
    <div className='w-full bg-[#F5F5F5] mb-10 py-5'>
      <div className={cn("flex justify-between items-center custom-container px-6 md:px-8")}>
        <div>
          <p className="text-sm font-bold">{lectio.lithurgy_time}</p>
          <Title className="text-2xl md:text-3xl font-bold text-[#0088FF] uppercase">
            {new Date(lectio.published_at).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long'
            })}
          </Title>
          <p className="text-md font-black">
            {lectio.reference_text}
          </p>
        </div>
        {/* <div className="flex items-center">
          <button className="p-2 hover:bg-gray-200 transition border border-[#4D4D4D] rounded-l-xl">
            <FaChevronLeft className="text-[#1D1B20]" />
          </button>
          <button className="p-2 hover:bg-gray-200 transition border border-[#4D4D4D] rounded-r-xl">
            <FaChevronRight className="text-[#1D1B20]" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Programe;
