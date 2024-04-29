import React from 'react';
import Image from 'next/image';

const researchAreas = [
  { name: 'Agricultural Science', icon: '/research/icons/Agricultural.png' }, // replace icon paths
  { name: 'Medicine & Surgery', icon: '/research/icons/medicine.png' },
  { name: 'Computer and Information Science', icon: '/research/icons/computer.png' },
  { name: 'Health Science', icon: '/research/icons/Health.png' },
  { name: 'Engineering Technology', icon: '/research/icons/Engineering.png' },


  { name: 'Business and Management', icon: '/research/icons/Business.png' },
];

const ReAreas = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-12 px-4 md:px-8 bg-white ">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Our Research Areas</h2>
        <ul className="space-y-4">
          {researchAreas.map((area) => (
            <li key={area.name} className="flex items-center text-lg text-gray-600 bg-white shadow transition-shadow duration-300 ease-in-out hover:bg-gray-50 rounded-md hover:shadow-md p-5">
              <Image src={area.icon} alt={area.name} width={24} height={24} className=''/>
              <span className="ml-2 font-bold">{area.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        {/* Replace with your image path and adjust the sizes */}
        <Image
          src="/research/img1.jpg"
          alt="Research"
          width={600} // Replace with the actual width of your image
          height={300} // Replace with the actual height of your image
          className="rounded-lg shadow-lg"
          layout="cover"
        />
      </div>
    </div>
  );
};

export default ReAreas;
