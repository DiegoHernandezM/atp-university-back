import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Alert } from '@material-tailwind/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SubjectCard from '@/Components/Cards/SubjectCard';

export default function Show({ auth, course, subjects, ...props }) {
  console.log(course);
  const success = props?.flash?.success;

  return (
    <AuthenticatedLayout
      user={auth.user}
      roles={auth.roles}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{course.title}</h2>}
    >
      <Head title="Courses" />
      <div>
        {success && <Alert color="green">{success}</Alert>}
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
