import React from "react";

import Image from "next/image";
const Banner = () => {
  
  return (
    <section className="section bg-cta bg-cover bg-left-top mt-28">
      <div className="max-w-[1340px] mx-auto px-[25px]">
        {/* text */}
        <div className="max-w-[920px] mx-auto text-center">
          <h2 className="h2 text-white mb-6"  >Our customers more then 1k from different countries</h2>
          <p className="text-2xl lg:text-4xl text-white"  >Join us we can help you Empowering Your Business Growth</p>
        </div>
        {/* btn & images */}
        <div className="flex justify-between">
          <Image className="hidden xl:flex" src="/cta/image1.svg" alt=""  width={300} height={300}/>
          <button
            className="btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto"
            
          >
            Call Now
          </button>
          <Image className="hidden xl:flex" src="/cta/image1.svg" alt="" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
