import React, { useState, useEffect } from 'react';
import { Button, Input, Alert, IconButton, Tooltip, Typography, Card, CardBody, CardHeader, CardFooter } from '@material-tailwind/react';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon, XCircleIcon, CheckCircleIcon, ListBulletIcon } from '@heroicons/react/24/solid';

import CoursesForm from '../Forms/CoursesForm.jsx';
import CoursesSubjectsDialog from '../Dialogs/CoursesSubjectsDialog.jsx';

const CoursesTable = ({ courses, subjects }) => {
  const [search, setSearch] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);

  const [openSubjectsDialog, setOpenSubjectsDialog] = useState(false);

  // Filtrar usuarios por búsqueda
  useEffect(() => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [search, courses]);

  // Calcular los usuarios actuales en la página
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseDrawer = () => {
    setCurrentCourse(null);
    setOpenDrawer(false);
  };

  const handleFormSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEditClick = (course) => {
    setCurrentCourse(course);
    setOpenDrawer(true);
  };

  const handleCloseDialog = () => {
    setCurrentCourse(null);
    setOpenSubjectsDialog(false);
  };

  const handleSubjectsSuccess = (message) => {
    console.log('sntro');
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <>
      {successMessage && <Alert color="green">{successMessage}</Alert>}
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Lista de Cursos
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Administra tus cursos a continuación
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
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Título</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Descripción</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Precio ($)</th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentCourses.map((course, index) => (
                <tr key={course.id}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Typography className="font-bold">{course.title}</Typography>
                    </div>
                  </td>
                  <td className="p-4">{course.description}</td>
                  <td className="p-4">{course.price}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Tooltip content="Editar">
                        <IconButton variant="text" onClick={() => handleEditClick(course)}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Materias">
                        <IconButton
                          variant="text"
                          onClick={() => {
                            setCurrentCourse(course);  // Seteamos el curso en la variable currentCourse
                            setOpenSubjectsDialog(true);  // Abrimos el dialogo de materias
                          }}
                        >
                          <ListBulletIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <form method="POST" action={route('courses.destroy', course.id)} onSubmit={(e) => {
                        if (!window.confirm(`¿Estás seguro que deseas eliminar el curso: ${course.title}?`)) {
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
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredCourses.length / coursesPerPage)}>Siguiente</Button>
        </CardFooter>
      </Card>
      <CoursesForm open={openDrawer} onClose={handleCloseDrawer} onSuccess={handleFormSuccess} currentCourse={currentCourse} />
      <CoursesSubjectsDialog open={openSubjectsDialog} onClose={handleCloseDialog} handleMessage={handleSubjectsSuccess} course={currentCourse} subjects={subjects} />
    </>

  );
};

export default CoursesTable;
