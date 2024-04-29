import React from 'react';
import { FaLightbulb, FaHandsHelping } from 'react-icons/fa'; // Example icons for objectives and core values

const ObjectiveValues = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Objectives Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-10">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-full bg-orange-100">
                  <FaLightbulb className="text-orange-500" size={24} />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Objectives</h2>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li className='text-justify'><strong>Advance knowledge:</strong>  Conduct cutting-edge research and develop innovative solutions to address global challenges.</li>
              <li className='text-justify'><strong>Foster collaboration:</strong>  Facilitate interdisciplinary collaboration and partnerships to maximize impact.</li>
              <li className='text-justify'><strong>Empower innovators:</strong>  Provide resources, mentorship, and support to empower innovators and entrepreneurs.</li>
              <li className='text-justify'><strong>Inspire the next generation:</strong>  Educate and inspire the next generation of innovators through outreach and educational programs.</li>
              <li className='text-justify'><strong>Drive impact:</strong>  Translate research into tangible outcomes that benefit society and drive positive change.</li>
              
            </ul>
          </div>

          {/* Core Values Section */}
          <div className="space-y-4 ">
            <div className="flex items-center space-x-2 mb-10">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-full bg-blue-100">
                  <FaHandsHelping className="text-blue-500" size={24} />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Core Values</h2>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li className='text-justify'><strong>Innovation:</strong>  We embrace creativity and innovation to drive meaningful change.</li>
              <li className='text-justify'><strong>Excellence:</strong>  We strive for excellence in everything we do, setting high standards for ourselves and our work.</li>
              <li className='text-justify'><strong>Collaboration:</strong>  We believe in the power of collaboration and teamwork to achieve shared goals.</li>
              <li className='text-justify'><strong>Integrity:</strong>  We uphold the highest ethical standards and act with honesty and integrity in all our interactions.</li>
              <li className='text-justify'><strong>Impact:</strong>  We are committed to making a positive impact on society and the world around us.</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveValues;
