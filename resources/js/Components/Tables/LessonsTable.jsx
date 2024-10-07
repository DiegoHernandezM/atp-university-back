import React, { useState, useEffect } from 'react';
import { Button, Input, Alert, IconButton, Tooltip, Typography, Card, CardBody, CardHeader, CardFooter } from '@material-tailwind/react';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon, ArrowUturnLeftIcon, NewspaperIcon } from '@heroicons/react/24/solid';

import LessonsForm from '../Forms/LessonsForm.jsx';
import ResourcesDialog from '../Dialogs/ResourcesDialog.jsx'


const LessonsTable = ({ lessons, subject }) => {
  const [search, setSearch] = useState('');
  const [filteredLessons, setFilteredLessons] = useState(lessons);
  const [currentPage, setCurrentPage] = useState(1);
  const [lessonsPerPage] = useState(5);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // Drawer para contenido
  const [openContent, setOpenContent] = useState(false);

  // Filtrar usuarios por búsqueda
  useEffect(() => {
    const filtered = lessons.filter((lesson) =>
      lesson.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredLessons(filtered);
  }, [search, lessons]);

  // Calcular los usuarios actuales en la página
  const indexOfLastLesson = currentPage * lessonsPerPage;
  const indexOfFirstLesson = indexOfLastLesson - lessonsPerPage;
  const currentLessons = filteredLessons.slice(indexOfFirstLesson, indexOfLastLesson);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseDrawer = () => {
    setCurrentLesson(null);
    setOpenDrawer(false)
  };

  const handleFormSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEditClick = (lesson) => {
    setCurrentLesson(lesson);
    setOpenDrawer(true);
  };

  const handleContentClick = (lesson) => {
    setCurrentLesson(lesson);
    setOpenContent(true);
  };

  const handleCloseContent = () => {
    setCurrentLesson(null);
    setOpenContent(false)
  };

  return (
    <>
      {successMessage && <Alert color="green">{successMessage}</Alert>}
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                {`Lista de lecciones de la materia: ${subject.title}`}
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Administra tus lecciones a continuación
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Buscar nombre"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm" onClick={handleOpenDrawer}>
                <PlusIcon strokeWidth={2} className="h-4 w-4" /> Nuevo
              </Button>
              <Button className="flex items-center gap-3" size="sm" onClick={() => window.location.href = route('subjects.index')}>
                <ArrowUturnLeftIcon strokeWidth={2} className="h-4 w-4" /> Regresar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Materia</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Titulo</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Descripción</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentLessons.map((lesson, index) => (
                <tr key={lesson.id}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">
                        {subject.title ? subject.title : 'Sin título'}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">{lesson.title}</td>
                  <td className="p-4">{lesson.description}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Tooltip content="Contenido">
                        <IconButton variant="text" onClick={() => handleContentClick(lesson)}>
                          <NewspaperIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Editar">
                        <IconButton variant="text" onClick={() => handleEditClick(lesson)}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <form method="POST" action={route('lessons.destroy', lesson.id)} onSubmit={(e) => {
                        if (!window.confirm(`¿Estás seguro que deseas eliminar a ${lesson.title}?`)) {
                          e.preventDefault();
                        }
                      }}>
                        <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')} />
                        <input type="hidden" name="_method" value="DELETE" />
                        <Tooltip content="Eliminar">
                          <IconButton type="submit" variant="text" color="red">
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Anterior</Button>
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredLessons.length / lessonsPerPage)}>Siguiente</Button>
        </CardFooter>
      </Card>
      <LessonsForm open={openDrawer} onClose={handleCloseDrawer} onSuccess={handleFormSuccess} currentLesson={currentLesson} subject={subject} />
      <ResourcesDialog open={openContent} onClose={handleCloseContent} currentLesson={currentLesson} subject={subject} />
    </>

  );
};

export default LessonsTable;
