import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 lg:items-center">
          {/* Image container */}
          <div className="relative">
            <div className="relative h-64 sm:h-72 lg:h-[500px]">
              <Image
                src="/about/img1.jpg" // Replace with your image path
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
              About Us
            </h2>
            <p className="mt-6 text-lg text-gray-500 text-justify">
              Welcome to the heart of innovation, where ideas flourish, and
              breakthroughs are born. Our Research and Innovation Center is a
              vibrant hub of creativity, collaboration, and discovery. With a
              relentless pursuit of knowledge and a passion for progress, we aim
              to redefine the boundaries of what's possible. At our center, we
              bring together brilliant minds from diverse disciplines and
              backgrounds, fostering a culture of collaboration and excellence.
              We believe that by working together, we can tackle the world's
              most pressing challenges and create solutions that have a lasting
              impact. Our commitment to innovation extends beyond the walls of
              our center. We actively engage with industry partners, academic
              institutions, and the community to drive innovation and drive
              positive change. Together, we are shaping the future through
              groundbreaking research, transformative technologies, and
              visionary leadership.
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

export default About;
