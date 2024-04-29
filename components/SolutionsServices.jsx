import Image from "next/image";
import React from "react";

// Assuming you have images related to each service stored in your public folder
const services = [
  {
    name: "Qualifications and Curriculum",
    description:
      "RIC is dedicated to developing robust educational programs that meet high standards of academic excellence. The center works on enhancing the curriculum with the latest knowledge and best practices in various fields, ensuring that students are well-prepared for both academic pursuits and professional careers.",
    imageUrl: "/service/img1.jpg",
  },
  {
    name: "Quality Management & Systems",
    description:
      "The center emphasizes the importance of quality management by implementing rigorous systems that ensure the consistency and improvement of educational and research outputs. This includes monitoring and evaluating processes to uphold high standards across all departments and initiatives.",
    imageUrl: "/service/img2.jpg",
  },
  {
    name: "Training and Development for Education",
    description:
      "RIC provides extensive training and development programs aimed at empowering educators and administrative staff. These programs are designed to improve teaching methods and operational efficiency, fostering an environment that supports effective learning and innovation.",
    imageUrl: "/service/img3.jpg",
  },
  {
    name: "Policy and Legislation",
    description:
      "Engaging with policy and legislation, the center actively participates in shaping the educational policies that influence both the internal framework of the university and the broader academic community. This includes advocating for policies that support research initiatives, intellectual property rights, and sustainable educational practices.",
    imageUrl: "/service/img4.jpg",
  },
  {
    name: "Skill Development",
    description:
      "RIC focuses on skill development to prepare students for the demands of the modern workforce. This includes specialized training sessions, workshops, and hands-on projects that enhance practical skills in technology, research methodologies, and critical thinking.",
    imageUrl: "/service/img5.jpg",
  },
  {
    name: "Private Sector Participation",
    description:
      "Recognizing the importance of collaboration with industry leaders, RIC facilitates partnerships with the private sector. These collaborations aim to bridge the gap between academic research and market needs, providing students with exposure to real-world challenges and opportunities to apply their knowledge in practical settings.",
    imageUrl: "/service/img6.jpg",
  },
];

const SolutionsServices = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-indigo-700 mb-12">
          Solutions & Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center text-center bg-white shadow p-10 rounded"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 ">{service.name}</h3>
              <p className="text-gray-600 text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsServices;
