import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroData = [
  {
    title: 'Inspiring Innovation',
    description: 'At our Research and Innovation Center, we inspire minds to think beyond limits, exploring the unknown to create a better tomorrow.',
    imageUrl: '/hero/img.png', // Update paths as necessary
  },
  {
    title: 'Collaborative Excellence',
    description: 'Experience collaborative excellence at our center, where diverse talents converge to solve complex challenges and drive meaningful change.',
    imageUrl: '/hero/im2.jpg',
  },
  {
    title: 'Transformative Impact',
    description: 'Join us in making a transformative impact on society. Together, we can turn ideas into reality and shape a future we can all be proud of.',
    imageUrl: '/hero/im3.jpg',
  },
  // Add more slides as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => setCurrentSlide(prevSlide => (prevSlide + 1) % heroData.length), 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] flex items-center justify-center">
      {heroData.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={slide.imageUrl}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Adjusted overlay opacity for better readability */}
        </div>
      ))}
      <div className="relative z-10 items-center justify-center text-center lg:max-w-2xl lg:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">{heroData[currentSlide].title}</h1>
        <p className="mt-4 md:mt-6 text-md md:text-lg lg:text-xl text-white leading-relaxed text-justify">{heroData[currentSlide].description}</p>
      </div>
    </section>
  );
};

export default Hero;
