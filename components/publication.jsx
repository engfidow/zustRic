import React from 'react';

// Example data structure for publications. This would likely come from props or a fetch call in a real app.
const publications = [
  {
    id: 1,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 2,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 3,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 4,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 5,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 6,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 7,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 8,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 9,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  {
    id: 10,
    faculty: 'Computer and Information Technology',
    title: 'User-Friendly Web Based Deep Learning System for TB and Pneumonia Diagnosis in developing countries',
    published: '29-02-2024',
    link: '#'
  },
  // ...other publications
];

const Publication = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <select name="status" required className='p-3  rounded-md border-solid border-blue-300  border-[1px] w-full my-4'>
            <option value="">All</option>
            <option value="active">Faculty of Agricultural Science</option>
            <option value="inactive">Faculty of Medicine & Surgery</option>
            <option value="inactive">Faculty of Health Science</option>
            <option value="inactive">Faculty of Engineering Technology</option>
            <option value="inactive">Faculty of Computer and Information Science</option>
            <option value="inactive">Faculty of Business and Management</option>
          </select>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded mb-4">
          <thead className="bg-gray-400 border-2 border-black">
            <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
              <th className="text-gray-600 font-semibold text-left pl-8 pr-6 text-sm tracking-normal leading-4">
                No
              </th>
              <th className="text-gray-600 font-semibold text-left pr-6 text-sm tracking-normal leading-4">
                Faculty
              </th>
              <th className="text-gray-600 font-semibold text-left pr-6 text-sm tracking-normal leading-4">
                Title
              </th>
              <th className="text-gray-600 font-semibold text-left pr-6 text-sm tracking-normal leading-4">
                Published
              </th>
              <th className="text-gray-600 font-semibold text-left pr-6 text-sm tracking-normal leading-4">
                Links
              </th>
            </tr>
          </thead>
          <tbody className='border-2 border-black'>
            {publications.map((pub, index) => (
              <tr key={pub.id} className="h-24 border-gray-300 dark:border-gray-200 border-b">
                <td className="text-sm whitespace-no-wrap text-gray-900 pl-8 pr-6">{index + 1}</td>
                <td className="text-sm whitespace-no-wrap text-gray-900 pr-6">{pub.faculty}</td>
                <td className="text-sm whitespace-no-wrap text-gray-900 pr-6">{pub.title}</td>
                <td className="text-sm whitespace-no-wrap text-gray-900 pr-6">{pub.published}</td>
                <td className="text-sm whitespace-no-wrap text-gray-900 pr-6">
                  <a href={pub.link} className="text-blue-500 hover:text-blue-600">Link</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Publication;
