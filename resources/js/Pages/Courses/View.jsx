import React, { useState, useRef, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Alert, Button } from '@material-tailwind/react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function View({ auth, subject, lessons, ...props }) {
  const success = props?.flash?.success;

  let latestLessonIndex = -1;
  let latestResourceIndex = -1;
  let latestUpdatedAt = new Date("1970-01-01T00:00:00.000Z"); // Fecha muy antigua como referencia inicial

  lessons.forEach((lesson, lessonIndex) => {
    lesson.resources.forEach((resource, resourceIndex) => {
      resource.student_resources.forEach((studentResource) => {
        const resourceUpdatedAt = new Date(studentResource.updated_at);
        if (resourceUpdatedAt > latestUpdatedAt) {
          latestUpdatedAt = resourceUpdatedAt;
          latestLessonIndex = lessonIndex;
          latestResourceIndex = resourceIndex;
        }
      });
    });
  });

  const [currentLesson, setCurrentLesson] = useState(lessons[latestLessonIndex]?.resources[latestResourceIndex]);
  const [currentPage, setCurrentPage] = useState(currentLesson?.student_resources[0]?.pageProgress ?? 1);

  let lessonCount = 0;
  let resourceCount = 0;
  const videoRef = useRef(null);
  const viewerRef = useRef(null);

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          CurrentScale,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div style={{ padding: '0px 2px' }}>
              <ZoomOut>
                {(props) => (
                  <Button
                    className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
                    onClick={props.onClick}
                  >
                    Zoom out
                  </Button>
                )}
              </ZoomOut>
            </div>
            <div style={{ padding: '0px 2px' }}>
              <CurrentScale>{(props) => <span>{`${Math.round(props.scale * 100)}%`}</span>}</CurrentScale>
            </div>
            <div style={{ padding: '0px 2px' }}>
              <ZoomIn>
                {(props) => (
                  <Button
                    className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
                    onClick={props.onClick}
                  >
                    Zoom in
                  </Button>
                )}
              </ZoomIn>
            </div>
            <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
              <GoToPreviousPage>
                {(props) => (
                  <Button
                    className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
                    disabled={props.isDisabled}
                    onClick={() => {
                      props.onClick();
                      setCurrentPage((prevPage) => prevPage - 1);
                    }}
                  >
                    Anterior
                  </Button>
                )}
              </GoToPreviousPage>
            </div>
            <div style={{ padding: '0px 2px', width: '4rem' }}>
              <CurrentPageInput />
            </div>
            <div style={{ padding: '0px 2px' }}>
              / <NumberOfPages />
            </div>
            <div style={{ padding: '0px 2px' }}>
              <GoToNextPage>
                {(props) => (
                  <Button
                    className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
                    disabled={props.isDisabled}
                    onClick={() => {
                      props.onClick();
                      setCurrentPage((prevPage) => prevPage + 1);
                    }}
                  >
                    Siguiente
                  </Button>
                )}
              </GoToNextPage>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });

  useEffect(() => {
    if (currentLesson.student_resources[0] && currentLesson.mime_type === 'video/mp4') {
      videoRef.current.currentTime = currentLesson.student_resources[0].videoProgress ?? 0;
    }
  }, [currentLesson]);

  useEffect(() => {
    if (currentLesson.mime_type === 'application/pdf' && viewerRef.current) {
      viewerRef.current?.jumpToPage(currentLesson.student_resources[0]?.pageProgress ?? 0);
    }
  }, [currentLesson]);

  useEffect(() => {
    // Guardar el progreso cuando se intenta salir de la página o recargar
    const handleBeforeUnload = (event) => {
      handleSaveProgress();
      event.preventDefault();
      event.returnValue = ''; // Algunos navegadores requieren esto para mostrar un cuadro de confirmación
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [currentLesson, currentPage]);

  const handleSaveProgress = () => {
    if (videoRef.current) {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const data = { resourceId: currentLesson.id, progress: videoRef.current.currentTime };
      fetch('/resources/saveprogress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify(data),
        credentials: 'same-origin'
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Progreso guardado.');
          } else {
            console.error('Error:', data);
          }
        })
        .catch(error => {
          console.error('Error 500:', error);
        });
    } else if (currentLesson.mime_type === 'application/pdf') {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const data = { resourceId: currentLesson.id, progress: currentPage };
      fetch('/resources/saveprogress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken
        },
        body: JSON.stringify(data),
        credentials: 'same-origin'
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Progreso guardado.');
          } else {
            console.error('Error:', data);
          }
        })
        .catch(error => {
          console.error('Error 500:', error);
        });
    }
  };

  const handleResourceChange = (resource) => {
    handleSaveProgress();
    setCurrentLesson(resource);
    if (resource.mime_type === 'application/pdf') {
      setCurrentPage(resource.student_resources[0]?.pageProgress ?? 1); // Establecer la página guardada para un recurso PDF
    }
  };

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleVolumeChange = (event) => {
    videoRef.current.volume = event.target.value;
  };

  const handleResetVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const renderContent = () => {
    if (currentLesson.mime_type === 'video/mp4') {
      return (
        <div className="relative">
          <video
            key={currentLesson.url}
            ref={videoRef}
            className="h-3/4 w-full h-96"
          >
            <source src={currentLesson.url} type="video/mp4" />
            Tu navegador no es compatible con el componente de video.
          </video>
          <div className="flex space-x-4 mt-4 justify-center">
            <Button
              className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
              onClick={handlePlay}
            >
              Play
            </Button>
            <Button
              className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
              onClick={handlePause}
            >
              Pause
            </Button>
            <Button
              className="mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800"
              onClick={handleResetVideo}
            >
              Reiniciar
            </Button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              onChange={handleVolumeChange}
              className="w-32"
            />
          </div>
        </div>
      );
    } else if (currentLesson.mime_type === 'application/pdf') {
      return (
        <div style={{ height: '90vh' }} onContextMenu={(e) => e.preventDefault()}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl={currentLesson.url}
              plugins={[defaultLayoutPluginInstance]}
              onPageChange={(e) => setCurrentPage(e.currentPage + 1)}
              initialPage={parseInt(currentLesson.student_resources[0]?.pageProgress)}
              ref={viewerRef}
            />
          </Worker>
        </div>
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
                        onClick={() => handleResourceChange(resource)}
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
