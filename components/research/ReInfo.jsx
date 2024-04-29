import React from "react";
import Image from "next/image";

const ReInfo = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 lg:items-center">
          {/* Image container */}
          <div className="relative">
            <div className="relative h-64 sm:h-72 lg:h-[500px]">
              <Image
                src="/research/bg.png" // Replace with your image path
                alt="About Us"
                layout="fill"
                objectFit="cover" // Cover the container, you can use "contain" for full image visibility
                className="rounded-xl shadow-lg" // Add some styling
              />
            </div>
          </div>
          {/* Content container */}
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-3xl text-indigo-600 font-bold tracking-tight sm:text-4xl">
              ZUST RIC
            </h2>
            <p className="mt-6 text-lg text-gray-500 text-justify">
              Embark on a transformative journey of discovery and innovation at
              the Zust University Research and Innovation Center, where
              groundbreaking ideas flourish and shape the future. Our center is
              a vibrant ecosystem of creativity and collaboration, bringing
              together brilliant minds from diverse disciplines to tackle the
              world's most pressing challenges. From revolutionizing
              agricultural science to pioneering advancements in medicine and
              surgery, our faculty and researchers are at the forefront of
              innovation. Join us in our quest to push the boundaries of
              knowledge and make a meaningful impact on the world.
            </p>
            <p className="mt-4 text-lg text-gray-500 text-justify">
              Join us on this exciting journey of discovery and innovation.
              Together, we can create a brighter, more sustainable future for
              all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReInfo;
