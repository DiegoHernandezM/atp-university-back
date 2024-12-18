import React, { useState, useEffect } from 'react';
import { Button, Input, Alert, IconButton, Tooltip, Typography, Card, CardBody, CardHeader, CardFooter } from '@material-tailwind/react';
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

import StudentsForm from '../Forms/StudentForm.jsx';


const StundentsTable = ({ students, courses }) => {
  const [search, setSearch] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);

  // Filtrar usuarios por búsqueda
  useEffect(() => {
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [search, students]);

  // Calcular los usuarios actuales en la página
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseDrawer = () => {
    setCurrentStudent(null);
    setOpenDrawer(false)
  };

  const handleFormSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEditClick = (student) => {
    setCurrentStudent(student);
    setOpenDrawer(true);
  };

  return (
    <>
      {successMessage && <Alert color="green">{successMessage}</Alert>}
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Lista de Estudiantes
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Administra tus estudiantes a continuación
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
        <CardBody className="p-0">
          {/* Contenedor principal */}
          <div className="w-full overflow-hidden">
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 text-sm md:p-4">
                    Nombre
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 text-sm md:p-4">
                    Email
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 text-sm md:p-4">
                    Género
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 text-sm md:p-4">
                    Teléfono
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 text-sm md:p-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="p-2 text-xs md:p-4 md:text-sm truncate">
                      {student.name} {student.f_surname} {student.m_surname}
                    </td>
                    <td className="p-2 text-xs sm:p-2 md:p-4 md:text-sm truncate">
                      {student.user.email}
                    </td>
                    <td className="p-2 text-xs sm:p-2 md:p-4 md:text-sm truncate">
                      {student.gender}
                    </td>
                    <td className="p-2 text-xs sm:p-2 md:p-4 md:text-sm truncate">
                      {student.phone}
                    </td>
                    <td className="p-2 text-xs sm:p-2 md:p-4 md:text-sm">
                      <div className="flex items-center space-x-2">
                        <Tooltip content="Editar">
                          <IconButton variant="text" onClick={() => handleEditClick(student)}>
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <form
                          method="POST"
                          action={route('students.destroy', student.id)}
                          onSubmit={(e) => {
                            if (!window.confirm(`¿Estás seguro que deseas eliminar a ${student.name}?`)) {
                              e.preventDefault();
                            }
                          }}
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')}
                          />
                          <input type="hidden" name="_method" value="DELETE" />
                          <Tooltip content="Eliminar">
                            <IconButton type="submit" variant="text" color="red">
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </form>
                        <form
                          method="POST"
                          action={route('students.session', student.id)}
                          onSubmit={(e) => {
                            if (!window.confirm(`¿Cerrar sesión de: ${student.name}?`)) {
                              e.preventDefault();
                            }
                          }}
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')}
                          />
                          <input type="hidden" name="_method" value="POST" />
                          <Tooltip content="Cerrar sesión">
                            <IconButton type="submit" variant="text">
                              <ComputerDesktopIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Anterior</Button>
          <Button variant="outlined" size="sm" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredStudents.length / studentsPerPage)}>Siguiente</Button>
        </CardFooter>
      </Card>
      <StudentsForm open={openDrawer} onClose={handleCloseDrawer} onSuccess={handleFormSuccess} currentStudent={currentStudent} courses={courses} />
    </>
  );
};

export default StundentsTable;
