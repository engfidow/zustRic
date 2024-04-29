import Image from "next/image";

const Partnership = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 lg:items-center">
          {/* Image container */}
          <div className="relative">
            <div className="relative h-64 sm:h-72 lg:h-[500px]">
              <Image
                src="/Partnership/img1.jpg" // Replace with your image path
                alt="Partnership Us"
                layout="fill"
                objectFit="cover" // Cover the container, you can use "contain" for full image visibility
                className="rounded-xl shadow-lg" // Add some styling
              />
            </div>
          </div>
          {/* Content container */}
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-3xl text-indigo-600 font-bold tracking-tight sm:text-4xl">
              Partnership's
            </h2>
            <p className="mt-6 text-lg text-gray-500 text-justify">
              Partnerships and collaborations are vital for advancing research
              goals, as they bring together diverse skills, resources, and
              perspectives. Zamzam University of Science and Technology
              exemplifies this through its strong ties with Hormuud Telecom,
              Sometel, TIKA, and IHH. These partnerships enhance the
              university's research capabilities and provide students with
              valuable real-world experiences. By joining forces with these
              organizations, Zamzam University not only boosts its educational
              and research offerings but also contributes significantly to local
              and global development, making a positive impact in the community
              and beyond. These collaborations are essential for fostering
              innovation and addressing complex challenges in today's
              interconnected world.
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

export default Partnership;
