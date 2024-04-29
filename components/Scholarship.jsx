import React from "react";

const Scholarship = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8">
          <h2 className="text-center text-3xl font-semibold text-gray-900 mb-8">
            Scholarship Information
          </h2>
          <p className="mb-6">
            Dr Mumin Scholarship is know as ‘Dr. Abdul Rashid Omar Mumin’ : This
            is aimed at outstanding student from low income households in the
            Somali.
          </p>
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-blue-900">
                Eligibility Criteria
              </h3>
              <p>
                Outstanding students from low-income households in Mogadishu
                pursuing a bachelor's degree at an accredited college or
                university in Mogadishu.
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-green-900">
                Application Process
              </h3>
              <p>
                Interested applicants should submit a detailed application,
                including exam result screenshot or high school certificate and
                a personal details . Applications must be submitted by the
                announced deadline.
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-yellow-900">
                Deadlines
              </h3>
              <p>
                Opens July 15th and closes September 15th annually. Contact:
                mumin@zust.edu.so (likely the program organizer's email)
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-red-900">
                Specific Requirements
              </h3>
              <p>Only for final year students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
