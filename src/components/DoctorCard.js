

"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import doctorData from '../list'; // Import the doctor data

function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState('Physician');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const selectedCategoryData = doctorData.find(category => category.category === selectedCategory);

  return (
    <div className="lg:p-10 bg-orange-200 bg-opacity-20">

      <div className="lg:flex lg:flex-row grid grid-cols-2 justify-center space-y-2 space-x-8 mb-8 p-10" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="700">
        {doctorData.map((categoryData, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div
              className={`text-2xl font-semibold cursor-pointer transition duration-300 ease-in-out border
               border-gray-600 rounded-full px-2 lg:py-2 text-center w-24 h-20 bg-gradient-to-r from-cyan-100 to-white mb-2
              ${selectedCategory === categoryData.category ? ' text-yellow-500 shadow-lg shadow-yellow-300 ' : 'text-gray-800'}`}
              onClick={() => handleCategoryClick(categoryData.category)} 
            >
              {/* Category Image */}
              <Image
                src={categoryData.image} // Use the image from the data
                alt={categoryData.category}
                width={70} // Set desired width
                height={80} // Set desired height
                className="inline-block mr-2 rounded-full p-1" // Optional styling
              />
            </div>
            {categoryData.category}
          </div>
        ))}
      </div>

      {selectedCategoryData && (
      <div
      className="mt-20 px-4 md:px-14 mb-10 lg:ml-10"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-easing="ease-in-out"
      data-aos-duration="1200"
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {selectedCategoryData.doctors.map((doctor, docIndex) => (
          <li
            key={docIndex}
            className="bg-white bg-opacity-90  min-w-80 lg:max-w-md p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex lg:flex-row  lg:items-center lg:space-x-6 space-y-4 lg:space-y-0">
              <Image
                src={doctor.image || '/default-doctor-image.jpg'}
                alt={doctor.name}
                width={120}
                height={120}
                className="w-32 h-40 lg:w-36 lg:h-44 rounded-lg object-cover shadow-md"
              />
              <div className="flex-1 ml-5 lg:ml-0 lg:text-left">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 mt-1">
                  <strong>Specialization:</strong> {doctor.specialization}
                </p>
                <p className="text-sm lg:text-base text-gray-600">
                  <strong>Experience:</strong> {doctor.experience}
                </p>
                <p className="text-sm lg:text-base text-gray-600">
                  <strong>Availability:</strong> {doctor.availability}
                </p>
              </div>
              <Link
                href={{
                  pathname: '/Booking',
                  query: {
                    doctorImg: doctor.image,
                    doctorName: doctor.name,
                    specialization: doctor.specialization,
                    experience: doctor.experience,
                    availability: doctor.availability,
                  },
                }}
              >
                  <h2
                      className='rounded-full border border-gray-500 px-2  mt-28  lg:mt-40 bg-yellow-50 hover:bg-yellow-100 cursor-pointer 
                      active:bg-yellow-300 active:scale-95 text-2xl pb-1'
                    >
                      +
                    </h2>
                {/* <button
                  className="mt-4 lg:mt-40 bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-full shadow-md 
                  transform active:scale-95 transition duration-150"
                >
                  Book
                </button> */}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
      )}
    </div>
  );
}

export default Doctors;