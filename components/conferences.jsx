import React from "react";
import Image from "next/image";

const conferences = [
  {
    id: 1,
    title:
      "Research Conference on medicine and health science with the Collaboration of ZAMZAM University, SIMAD University, and Jamhuriya University.",
    description:
      "The Research Conference on Medicine and Health Science, in partnership with ZAMZAM University, , and Jamhuriya University, is designed to be a dynamic platform for the exchange and dissemination of cutting-edge research, ideas, and innovations in these fields. This collaborative event aims to cultivate partnerships among these prestigious institutions, facilitate the sharing of groundbreaking medical research, encourage interdisciplinary discussions, support emerging scholars and healthcare professionals, bridge the gap between academic research and practical healthcare applications, embrace diverse global perspectives, and enhance the impact of research through scholarly publications. By bringing together academia, researchers, practitioners, and students, the conference seeks to advance medical knowledge, improve healthcare practices, and contribute to the enhancement of healthcare delivery both locally and globally.",
    imagePath: "/conffrences/cmhs.jpg",
    linkPath: "https://cmhs.so/",
  },
  {
    id: 2,
    title:
      "Research Conference on entrepreneurship and business development with the Collaboration of  ZAMZAM University ,SIMAD University, Jamhuriya University.",
    description:
      "The Research Conference on Entrepreneurship and Business Development, conducted in partnership with ZAMZAM University, SIMAD University, and Jamhuriya University, strives to create a dynamic and inclusive platform. This platform facilitates the exchange of innovative ideas, research findings, and practical insights in the fields of entrepreneurship and business development. By fostering synergies among these esteemed institutions, the conference aims to promote knowledge sharing on entrepreneurial strategies, cultivate a comprehensive understanding of business ecosystem dynamics, empower emerging entrepreneurs and business leaders, bridge academia and industry perspectives, embrace diverse global viewpoints, and enhance the impact of research through publication. By bringing together academia, researchers, practitioners, and aspiring entrepreneurs, the conference seeks to advance the discourse on entrepreneurship, stimulate sustainable business growth, and contribute to economic development at both local and international levels.",
    imagePath: "/conffrences/ceb.png",
    linkPath: "https://ceb.so/",
  },
  {
    id: 3,
    title:
      "Research Conference on Engineering, Science and Technology Collaboration with ZAMZAM University , SIMAD University, and Jamhuriya University.",
    description:
      "The Research Conference on Entrepreneurship and Business Development, conducted in partnership with ZAMZAM University, SIMAD University, and Jamhuriya University, strives to create a dynamic and inclusive platform. This platform facilitates the exchange of innovative ideas, research findings, and practical insights in the fields of entrepreneurship and business development. By fostering synergies among these esteemed institutions, the conference aims to promote knowledge sharing on entrepreneurial strategies, cultivate a comprehensive understanding of business ecosystem dynamics, empower emerging entrepreneurs and business leaders, bridge academia and industry perspectives, embrace diverse global viewpoints, and enhance the impact of research through publication. By bringing together academia, researchers, practitioners, and aspiring entrepreneurs, the conference seeks to advance the discourse on entrepreneurship, stimulate sustainable business growth, and contribute to economic development at both local and international levels.",
    imagePath: "/conffrences/cest.jpg",
    linkPath: "https://ceb.so/",
  },
  // ... other conference objects
];

const ConferenceItem = ({ title, description, imagePath, linkPath, isImageRight }) => (
  <div className={`flex flex-col md:flex-row ${isImageRight ? "md:flex-row-reverse" : ""} items-center mb-10 md:mb-20`}>
    <div className="w-full md:w-1/2">
      <Image
        src={imagePath}
        alt={title}
        width={500} // Adjusted for better resolution handling
        height={300} // Adjusted aspect ratio
        layout="responsive"
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/2 px-4 md:px-10">
      <h2 className="text-2xl font-bold text-indigo-600 mb-3">{title}</h2>
      <p className="text-gray-600 text-justify mb-4">{description}</p>
      <a
        href={linkPath}
        target="_blank"
        rel="noopener noreferrer" // Added for security reasons
        className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300 ease-in-out"
      >
        Explore More →
      </a>
    </div>
  </div>
);

const Conferences = () => {
  return (
    <div className="py-12 px-4 mt-10">
      {conferences.map((conference, index) => (
        <ConferenceItem
          key={conference.id}
          title={conference.title}
          description={conference.description}
          imagePath={conference.imagePath}
          linkPath={conference.linkPath}
          isImageRight={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Conferences;
