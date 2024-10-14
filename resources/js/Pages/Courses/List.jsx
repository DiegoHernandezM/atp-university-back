import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Alert } from '@material-tailwind/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CourseCard from '@/Components/Cards/CourseCard';

export default function List({ auth, courses, subjects, ...props }) {
  const success = props?.flash?.success;

  return (
    <AuthenticatedLayout
      user={auth.user}
      roles={auth.roles}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Cursos</h2>}
    >
      <Head title="Courses" />
      <div>
        {success && <Alert color="green">{success}</Alert>}
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
