import { InertiaLink } from '@inertiajs/inertia-react';
import { Button } from '@material-tailwind/react';
import React from 'react';

export default function CourseCard({ course }) {

  const handleGoToCourse = (course) => {
    window.location.href = `/courses/${course.id}`;
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={course.cover} alt={course.title} className="w-full h-36 object-cover" />
        <div className="p-3">
          <h5 className="text-md font-bold">{course.title}</h5>
          <p className="text-gray-600 mt-1 text-sm">{course.description}</p>
          <p className="text-gray-800 font-semibold mt-1 mb-3">Costo: ${course.price}</p>
          <Button
            className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
            onClick={() => handleGoToCourse(course)}
          >
            IR AL CURSO
          </Button>
        </div>
      </div>
    </div>
  );
};

