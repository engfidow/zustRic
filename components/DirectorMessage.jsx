import React from "react";
import Image from "next/image";

const DirectorMessage = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
            
          {/* Director's Image Container - Updated for better responsiveness */}
          <div className="w-full lg:w-1/4 xl:w-1/5 flex-shrink-0">
            <div className="w-60 md:w-72 lg:w-80 h-auto relative m-auto lg:ml-20 border-blue-700 border-solid border-2 shadow-lg  p-1   bg-transparent  rounded-tl-full rounded-tr-full mb-0 overflow-hidden">
              <Image
                src="/director.jpg"
                alt="Director"
                layout="responsive"
                width={900}
                height={900}
                objectFit="cover"
                className="rounded-tl-full rounded-tr-full"
              />
            </div>
          </div>

          {/* Message Container - Improved typography and spacing */}
          <div className="flex-2 ml-0 lg:ml-40">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Director Message
            </h1>
            <p className="text-gray-600 text-lg mb-4 text-justify">
              Welcome to our Research and Innovation Center, where we are dedicated to pushing the boundaries of knowledge and driving positive change. As the Director, I am incredibly proud of the work we do here. Our center is a hub of creativity, collaboration, and innovation, where brilliant minds come together to tackle some of the world's most pressing challenges. Our team is made up of passionate individuals from diverse backgrounds and disciplines, united by a shared vision of creating a better future for all. Together, we are developing innovative solutions that have the potential to transform industries, improve lives, and shape the world around us. I invite you to explore our website and learn more about our exciting projects and initiatives. Whether you are a researcher, student, industry partner, or member of the community, there are many ways to get involved and contribute to our mission.
            </p>
            <p className="text-gray-600 text-lg text-justify">
              Thank you for your interest in our center. I look forward to working together to make a meaningful impact on the world.
            </p>
            {/* Director's Name and Position */}
            <div className="mt-6">
              <p className="text-gray-800 font-semibold text-lg">
              Dr. Abdul Rashid Omar Mumin
              </p>
              <p className="text-gray-500">Assistance Prof. Research Innovation Center at ZUST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
