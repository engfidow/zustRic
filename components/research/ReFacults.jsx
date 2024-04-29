import Link from 'next/link';

const faculties = [
  { name: 'Faculty of Agricultural Science', path: '/agricultural-science' },
  { name: 'Faculty of Medicine & Surgery', path: '/medicine-surgery' },
  { name: 'Faculty of Health Science', path: '/health-science' },
  { name: 'Faculty of Engineering Technology', path: '/engineering-technology' },
  { name: 'Faculty of Computer and Information Science', path: '/computer-information-science' },
  { name: 'Faculty of Business and Management', path: '/business-management' },
];

const ReFacults = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-10">Faculties</h1>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap -mx-4">
          {faculties.map((faculty, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-6">
              <div >
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-gray-50">
                  <h3 className="font-semibold text-xl text-gray-800">{faculty.name}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReFacults;
