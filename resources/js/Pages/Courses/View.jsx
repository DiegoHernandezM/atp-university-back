import React, { useState, useRef, useEffect } from 'react';
import { Head, router } from '@inertiajs/react';
import { Alert, Button, Dialog, DialogBody, DialogFooter, IconButton } from '@material-tailwind/react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import QuizzDialog from '@/Components/Dialogs/QuizzDialog';

export default function View({ auth, subject, lessons, ...props }) {
  const success = props?.flash?.success;
  let latestLessonIndex = -1;
  let latestResourceIndex = -1;
  let latestUpdatedAt = new Date("1970-01-01T00:00:00.000Z"); // Fecha muy antigua como referencia inicial
  const [isQuizzOpen, setIsQuizzOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);


  // Proteger la impresión y combinaciones de teclas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.key === 's')) {
        e.preventDefault();
        alert('La acción está deshabilitada en esta página.');
      }
    };
    const handleContextMenu = (e) => e.preventDefault(); // Deshabilitar clic derecho

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Overlay dinámico para prevenir capturas de pantalla
  /*
  useEffect(() => {

    let timeout;
    const handleMouseMove = () => {
      setIsOverlayVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsOverlayVisible(true); // Mostrar overlay después de 5 segundos de inactividad
      }, 10000);

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);
  */

  const handleOpenQuizz = () => {
    setIsQuizzOpen(true);
  };
  const handleCloseQuizz = () => {
    setIsQuizzOpen(false);
  };

  lessons.forEach((lesson, lessonIndex) => {
    lesson.resources.forEach((resource, resourceIndex) => {
      resource.student_resources.forEach((studentResource) => {
        const resourceUpdatedAt = new Date(studentResource.updated_at);
        if (resourceUpdatedAt >= latestUpdatedAt) {
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

  useEffect(() => {
    const handleInertiaNavigate = () => {
      handleSaveProgress();
    };

    router.on('navigate', handleInertiaNavigate);
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
              initialPage={currentLesson.student_resources[0]?.pageProgress}

            />
          </Worker>
        </div>
      );
    } else if (currentLesson.mime_type === 'text/html') {
      return (
        <div style={{ height: '90vh' }} onContextMenu={(e) => e.preventDefault()}>
        <iframe
          src={currentLesson.url} // Usamos el URL de Genially proporcionado
          frameBorder="0"
          width="100%"
          height="100%"
          title="Presentación Genially"
        >
          Tu navegador no soporta iframes.
        </iframe>
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
      {isOverlayVisible && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-50 pointer-events-none" >
        </div>
      )}
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
            {subject?.quizz && (
              <>
                <h3 className="text-lg font-semibold mt-6 mb-4">Cuestionario</h3>
                <Button
                  className="w-full text-left p-2 mb-2 rounded text-white hover:bg-blue-700"
                  onClick={handleOpenQuizz}
                >
                  Responder cuestionario
                </Button>
                <QuizzDialog open={isQuizzOpen} onClose={handleCloseQuizz} quizz={subject.quizz} subjectId={subject.id} />
              </>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
