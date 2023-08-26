"use client";


import Image from "next/image";
const Hero = () => {
  
  return (
    <>
      <section className="min-h-[900px]">
        <div className="container   mx-auto lg:mx-[8%]">
          <div className="flex flex-col   lg:flex-row items-center justify-center text-center lg:text-left mt-40">
          
            <div className="flex-1">
              <h1 className="lg:text-[5rem] text-[3rem] font-bold mb-2  lg:mb-5" data-aos="fade-down"
              data-aos-delay="500"
              >Empowering You Business Growth</h1>
              
              <p className="lead mb-5 lg:mb-10"
              data-aos="fade-down"
              data-aos-delay="600"
               
              >📢 Empower Your Future, Ignite Your Growth!</p>
              <button className="bg-[#3226AE] text-white py-4 px-10 rounded-full flex justify-center items-center lg:gap-x-4 hover:bg-[#3C6EED] ml-1 lg:ml-0"
               data-aos="fade-down"
               data-aos-delay="700"
              >
                Contact Us Now
                </button>
              {/* <div className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6"
               data-aos="fade-down"
              data-aos-delay="700"
              >
                
               
              </div> */}
            </div>

            <div className="flex-1"
             data-aos="fade-up"
             data-aos-delay="800"
             
            >
              <Image src="/hero.png" alt="" width={500} height={500} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
