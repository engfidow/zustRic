import Image from 'next/image';
import React from 'react';

const partnerships = [
    { name: 'Hormuud Telecon', imageUrl: '/Partnership/Hormuud.svg', id: 1 },
    { name: 'Tika', imageUrl: '/Partnership/tika.png', id: 2 },
    { name: 'IHH', imageUrl: '/Partnership/IHH.png', id: 3 },
    { name: 'Somtel', imageUrl: '/Partnership/somtel.png', id: 4 },
    // ... more partners
  ];

const ListPartnership = () => {
  return (
    <div className="bg-white py-8 my-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-indigo-600 text-center text-3xl font-bold mb-12">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partnerships.map(partner => (
            <div key={partner.id} className="flex justify-center items-center">
              <div className="h-24 w-40 relative"> {/* Adjust the height and width as needed */}
                <Image
                  src={partner.imageUrl}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain" // This will ensure that logos are scaled properly within the div
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPartnership;
