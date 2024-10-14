import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

export default function SubjectCard({ subject, lessonCount }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={subject.cover} alt={subject.title} className="w-full h-36 object-cover" />
        <div className="p-3">
          <h5 className="text-md font-bold">{subject.title}</h5>
          <p className="text-gray-600 mt-1 text-sm">{subject.description}</p>
          <p className="text-gray-800 font-semibold mt-1 mb-3">{`${subject.lessons_count} lecciones`}</p>
          <InertiaLink
            href={`/subjects/${subject.id}`}
            className="bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
          >
            Ver Lecciones
          </InertiaLink>
        </div>
      </div>
    </div>
  );
};

