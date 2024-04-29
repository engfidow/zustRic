import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  mt-0">
      <div className="bg-white  py-5 px-12  flex gap-10 items-center  drop-shadow-sm border-r-2 border-r-dashed  border-gray-300">
        <Image
          src="/info/discovery.png" // Replace with your image path
          alt="discover"
          width={40}
          height={40}
         
        />
        <h4 className="text-[#28B6EB] text-2xl my-8">Discover</h4>
      </div>
      <div className="bg-white  py-5 px-12  flex gap-10 items-center  drop-shadow-sm border-r-2 border-r-dashed  border-gray-300">
        <Image
          src="/info/engagement.png" // Replace with your image path
          alt="connect"
          width={40}
          height={40}
          
        />
        <h4 className="text-[#28B6EB] text-2xl my-8">Connect</h4>
      </div>
      <div className="bg-white  py-5 px-12  flex gap-10 items-center  drop-shadow-sm border-gray-300">
        <Image
          src="/info/link.png" // Replace with your image path
          alt="empower"
          width={40}
          height={40}
          
        />
        <h4 className="text-[#28B6EB] text-2xl my-8">Empower</h4>
      </div>
    </div>
  );
};

export default Info;
