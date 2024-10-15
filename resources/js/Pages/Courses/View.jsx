import React, { useState } from 'react';

import { Head } from '@inertiajs/react';
import { Alert, Button } from '@material-tailwind/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function View({ auth, subject, lessons, ...props }) {
  const success = props?.flash?.success;
  const [currentLesson, setCurrentLesson] = useState(lessons[0]?.resources[0]);
  let lessonCount = 0;
  let resourceCount = 0;
  const renderContent = () => {
    if (currentLesson.mime_type === 'video/mp4') {
      return (
        <video key={currentLesson.url} controls className="h-3/4 w-full h-96">
          <source src={currentLesson.url} type="video/mp4" />
          Tu navegador no es compatible con el componente de video.
        </video>
      );
    } else if (currentLesson.mime_type === 'application/pdf') {
      return (
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(currentLesson.url)}&embedded=true`}
          className="h-3/4 w-full h-96"
          title="PDF Viewer"
        ></iframe>
      );
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      roles={auth.roles}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{subject.title}</h2>}
    >
      <Head title="Courses" />
      <div>
        {success && <Alert color="green">{success}</Alert>}
      </div>
      <div className="mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="h-screen bg-white shadow-lg rounded-lg p-4">
              {renderContent()}
              <h2 className="text-xl font-bold mt-4">{currentLesson.title}</h2>
            </div>
          </div>
          <div className="h-full bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Lecciones</h3>
            {lessons.map((lesson) => {
              lessonCount += 1;
              resourceCount = 0;
              return (<div key={lesson.id}>
                <h4 className="text-md font-bold mb-2">{`${lessonCount}. ${lesson.title}`}</h4>
                <ul>
                  {lesson.resources.map((resource) => {
                    resourceCount += 1;
                    return (<li key={resource.id}>
                      <Button
                        onClick={() => setCurrentLesson(resource)}
                        className={`w-full text-left p-2 mb-2 rounded ${currentLesson.id === resource.id
                          ? 'text-white'
                          : 'bg-gray-200 text-black'
                          } hover:bg-blue-700`}
                      >
                        {`${resourceCount}. ${resource.title}`}
                      </Button>
                    </li>)
                  })}
                </ul>
              </div>)
            })}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
