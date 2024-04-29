import React from 'react';
import { BiBrain } from 'react-icons/bi'; // Example icon for Vision
import { GiArcheryTarget } from 'react-icons/gi'; // Example icon for Mission

const VisionAndMission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* Vision Card */}
      <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-2 bg-indigo-200 rounded-full">
              <BiBrain size={32} className="text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold text-indigo-700">Our Vision</h2>
          </div>
          <p className="text-gray-600">
          To be a global leader in research and innovation, driving positive change and shaping a better future for humanity.
          </p>
        </div>
      </div>

      {/* Mission Card */}
      <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-2 bg-red-200 rounded-full">
              <GiArcheryTarget size={32} className="text-red-700" />
            </div>
            <h2 className="text-2xl font-bold text-red-700">Our Mission</h2>
          </div>
          <p className="text-gray-600">
          Our mission is to push the boundaries of knowledge and innovation, fostering a culture of collaboration and excellence. We strive to tackle the world's most pressing challenges, create transformative solutions, and inspire the next generation of innovators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
